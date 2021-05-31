<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="primary">
      <b-navbar-brand class="info" :href="this.$localePath">@alberttocastro</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <nav-options class="ml-auto" />
      </b-collapse>
    </b-navbar>
    <b-container fluid>
      <b-row>
        <b-col lg="9">
          <b-container>
            <div class="post-header my-5">
              <div class="d-flex justify-content-between mt-3 ml-1">
                <span id="post-date">
                  {{ formatDate($page.frontmatter.date) }}
                </span>
                <span id="post-last-edited" class="ml-auto">
                  {{ $page.lastUpdated }}
                </span>
              </div>
              <h1 class="mt-2" v-if="$page.title">{{ $page.title }}</h1>
              <b-badge
                pill
                variant="danger"
                v-for="tag in $page.frontmatter.tag"
                v-bind:key="tag"
                class="mr-2 px-2 py-1"
              >
                #{{ tag }}
              </b-badge>
            </div>
            <Content class="mb-5" />
            <div>
              <social-share is-plain />
            </div>
            <hr />
            <Vssue :title="$page.title" />
          </b-container>
        </b-col>
        <b-col lg="3">
          <about-writter :locale="this.$localePath" class="mt-5" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavOptions from "../components/NavOptions";
import AboutWritter from "../components/AboutWritter";
export default {
  components: { NavOptions, AboutWritter },
  methods: {
    formatDate(date) {
      let dateObject = new Date(date);
      let locale = this.$site.locales[this.$localePath].lang;

      return dateObject.toLocaleDateString(locale);
    },
  },
};
</script>

<style lang="scss" scoped>
#post-date {
  font-size: 0.8rem;
}

#post-last-edited {
  font-size: 0.8rem;
}
</style>
