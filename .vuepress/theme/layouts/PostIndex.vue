<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="primary">
      <b-navbar-brand :href="this.$localePath">@alberttocastro</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <nav-options class="ml-auto" />
      </b-collapse>
    </b-navbar>

    <div class="container mt-5">
      <b-list-group>
        <b-list-group-item
          v-for="page in $pagination.pages"
          v-bind:key="page.key"
          :href="page.path"
        >
          <!-- <div>
            <b-badge
              pill
              variant="danger"
              v-for="(tag, id) in page.frontmatter.tag"
              v-bind:key="id"
              class="mr-2 px-2 py-1"
              :href="'/tags/' + tag"
            >
              {{ tag }}
            </b-badge>
          </div> -->
          <div class="d-flex w-100 justify-content-between mt-2">
            <h1 class="mb-1">
              {{ page.title }}
            </h1>
            <small>{{ lastUpdated(page.frontmatter.date) }}</small>
          </div>

          <p v-if="page.frontmatter.excerpt">
            {{ page.frontmatter.excerpt }}
          </p>
        </b-list-group-item>
      </b-list-group>
    </div>

    <div id="pagination">
      <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink"
        >Prev</router-link
      >
      <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink"
        >Next</router-link
      >
    </div>
  </div>
</template>

<script>
import NavOptions from "../components/NavOptions";
import Moment from "moment";
export default {
  components: { NavOptions },
  methods: {
    formatDate(date) {
      let dateObject = new Date(date);
      let locale = this.$site.locales[this.$localePath].lang;

      return dateObject.toLocaleDateString(locale);
    },
    lastUpdated(date){
      Moment.locale(this.$lang);
      return Moment(date).fromNow();
    }
  },
};
</script>

<style lang="scss" scoped>
.list-group-item {
  h1 {
    font-size: 2rem;
  }
}
</style>
