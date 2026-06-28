<template>
  <div class="latest-articles-container">
    <article-card
      v-for="post in latestArticles"
      :key="post.key"
      :url="post.path"
      :src="post.frontmatter.image || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97'"
      class="mb-4"
    >
      <template #date>
        {{ formatDate(post.frontmatter.date) }}
      </template>
      {{ post.title }}
    </article-card>
  </div>
</template>

<script>
export default {
  name: "LatestArticles",
  props: {
    limit: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    latestArticles() {
      const localePath = this.$localePath;
      const isPt = localePath === "/pt/";
      
      const posts = this.$site.pages.filter((page) => {
        const isBlogPath = isPt
          ? page.path.startsWith("/pt/blog/") && page.path !== "/pt/blog/"
          : page.path.startsWith("/blog/") && page.path !== "/blog/";
        
        return isBlogPath && page.title && page.frontmatter.date;
      });

      // Sort by date descending
      return posts
        .sort((a, b) => {
          const dateA = new Date(a.frontmatter.date);
          const dateB = new Date(b.frontmatter.date);
          return dateB - dateA;
        })
        .slice(0, this.limit);
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return "";
      const dateObject = new Date(date);
      const locale = this.$site.locales[this.$localePath].lang || "en-US";
      return dateObject.toLocaleDateString(locale, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "UTC", // Avoid timezone shifts changing the day
      });
    },
  },
};
</script>

<style scoped>
.latest-articles-container {
  width: 100%;
}
</style>
