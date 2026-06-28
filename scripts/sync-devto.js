const fs = require('fs');
const path = require('path');
const https = require('https');

// Helper to perform HTTP GET requests with JSON response and a timeout, compatible with Node 14+
function customFetch(url, options = {}) {
  return new Promise((resolve, reject) => {
    const timeout = options.timeout || 15000;
    let timedOut = false;

    const req = https.get(url, {
      headers: options.headers || {}
    }, (res) => {
      if (res.statusCode < 200 || res.statusCode >= 300) {
        return reject(new Error(`Request failed with status ${res.statusCode} ${res.statusMessage}`));
      }

      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        if (timedOut) return;
        resolve({
          ok: true,
          statusText: res.statusMessage,
          json: async () => JSON.parse(rawData),
          text: async () => rawData
        });
      });
    });

    req.on('error', (err) => {
      if (timedOut) return;
      reject(err);
    });

    req.setTimeout(timeout, () => {
      timedOut = true;
      req.destroy();
      reject(new Error(`Request to ${url} timed out after ${timeout}ms`));
    });
  });
}

const USERNAME = 'alberttocastro';
const BLOG_DIRS = [
  path.join(__dirname, '../blog'),
  path.join(__dirname, '../pt/blog')
];

// Helper to generate clean, language-independent slugs from titles
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // remove accents
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

// Clean up old synced files to avoid stale articles (excluding persisted ones)
function cleanupOldSync() {
  for (const dir of BLOG_DIRS) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (!file.endsWith('.md')) continue;
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      if (content.includes('devto: true') && !content.includes('persisted: true')) {
        console.log(`Deleting old synced file: ${file}`);
        fs.unlinkSync(filePath);
      }
    }
  }
}

async function syncArticles() {
  try {
    cleanupOldSync();

    // Map existing local markdown files by normalized title
    const titleMap = {};
    for (const dir of BLOG_DIRS) {
      if (!fs.existsSync(dir)) continue;
      const files = fs.readdirSync(dir);
      for (const file of files) {
        if (!file.endsWith('.md')) continue;
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        
        const titleMatch = content.match(/title:\s*["']?([^"\n\r']+)["']?/);
        if (titleMatch) {
          const title = titleMatch[1];
          const normalized = title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w]/g, '');
          titleMap[normalized] = { filePath, dir };
        }
      }
    }

    console.log(`Fetching articles for dev.to user: ${USERNAME}...`);
    const listRes = await customFetch(`https://dev.to/api/articles?username=${USERNAME}&page=1&per_page=100&t=${Date.now()}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!listRes.ok) {
      throw new Error(`Failed to fetch articles list: ${listRes.statusText}`);
    }
    const articles = await listRes.json();
    console.log(`Found ${articles.length} articles on dev.to.`);

    for (const article of articles) {
      console.log(`Fetching detailed content for article ID ${article.id}: "${article.title}"...`);
      const detailRes = await customFetch(`https://dev.to/api/articles/${article.id}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (!detailRes.ok) {
        console.warn(`Failed to fetch details for article ${article.id}. Skipping.`);
        continue;
      }
      const detailedArticle = await detailRes.json();
      
      let rawMarkdown = detailedArticle.body_markdown || '';
      
      // Strip dev.to's own frontmatter block if present
      if (rawMarkdown.startsWith('---')) {
        const secondDashes = rawMarkdown.indexOf('---', 3);
        if (secondDashes !== -1) {
          rawMarkdown = rawMarkdown.slice(secondDashes + 3).trim();
        }
      }

      // Filter out short/empty posts (like comments or discussion starts)
      if (rawMarkdown.length < 150) {
        console.log(`Skipping short/empty article (probably a discussion or comment): "${article.title}"`);
        continue;
      }

      // Generate new frontmatter block for VuePress
      const tagsBlock = article.tag_list && article.tag_list.length > 0
        ? article.tag_list.map(t => `  - ${t}`).join('\n')
        : '  - blog';

      const frontmatter = `---
title: "${article.title.replace(/"/g, '\\"')}"
date: ${article.published_at.split('T')[0]}
image: "${article.cover_image || article.social_image || ''}"
tag:
${tagsBlock}
devto: true
devto_url: "${article.url}"
---

${rawMarkdown}`;

      // Determine target folder based on presence of 'portuguese' tag
      const isPortuguese = article.tag_list && article.tag_list.map(t => t.toLowerCase()).includes('portuguese');

      const targetFolder = isPortuguese 
        ? path.join(__dirname, '../pt/blog')
        : path.join(__dirname, '../blog');

      if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder, { recursive: true });
      }

      // Check if this article matches an existing local file
      const normalizedTitle = article.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\w]/g, '');
      const matched = titleMap[normalizedTitle];

      let targetPath;
      let finalContent = frontmatter;

      if (matched) {
        targetPath = matched.filePath;
        const localContent = fs.readFileSync(matched.filePath, 'utf-8');
        const dateMatch = localContent.match(/date:\s*([\d\-]+)/);
        const originalDate = dateMatch ? dateMatch[1] : article.published_at.split('T')[0];

        finalContent = `---
persisted: true
title: "${article.title.replace(/"/g, '\\"')}"
date: ${originalDate}
image: "${article.cover_image || article.social_image || ''}"
tag:
${tagsBlock}
devto: true
devto_url: "${article.url}"
---

${rawMarkdown}`;
      } else {
        const datePrefix = article.published_at.split('T')[0];
        const cleanSlug = slugify(article.title);
        const filename = `${datePrefix}-${cleanSlug}.md`;
        targetPath = path.join(targetFolder, filename);
      }

      fs.writeFileSync(targetPath, finalContent, 'utf-8');
      console.log(`Successfully synced: ${targetPath}`);
    }
    console.log('Sync completed successfully!');
  } catch (error) {
    console.error('Error syncing articles from dev.to:', error);
    process.exit(1);
  }
}

syncArticles();
