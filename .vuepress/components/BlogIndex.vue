<template>
  <div>
    <b-list-group v-if="this.blogPosts.length > 0">
      <b-list-group-item
        class="post-list-item"
        v-for="post in this.blogPosts"
        v-bind:key="post.key"
        :href="post.path"
      >
        <h1>{{ post.title }}</h1>
        <p>{{ post.frontmatter.description }}</p>
      </b-list-group-item>
    </b-list-group>
    <blockquote v-else class="blockquote">
      <slot name="no-article" />
    </blockquote>
    <!-- <pre>{{ JSON.stringify(this.$site, null, 2) }}</pre> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    blogPosts: [],
  }),
  mounted: function() {
    let pages = this.$site.pages;

    // Filter only blogposts
    pages = pages
      .filter(function(page) {
        return page.frontmatter.blogpost;
      });
      
    pages = pages.sort(function(page, pageB) {
        if (page.frontmatter.date == pageB.frontmatter.date) {
          return 0;
        } else {
          return page.frontmatter.date > pageB.frontmatter.date ? -1 : 1;
        }
      });

    this.blogPosts = pages;
  },
};
</script>

<style lang="scss" scoped></style>
