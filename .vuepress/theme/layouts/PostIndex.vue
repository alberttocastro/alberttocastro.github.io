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
      <b-card
        no-body
        v-for="page in $pagination.pages"
        v-bind:key="page.key"
        :style="
          'background-image: linear-gradient(0deg, rgba(29, 29, 29, 0.8), rgba(29, 29, 29, 0.8)), url(' +
            page.frontmatter.image +
            ')'
        "
        class="my-4 rounded-lg article p-2"
      >
        <a :href="page.path">
          <div class="last-updated">
            {{ lastUpdated(page.frontmatter.date) }}
          </div>
          <div class="mt-5 title">
            {{ page.title }}
          </div>
          <div>
            <b-badge
              v-for="tag in page.frontmatter.tag"
              v-bind:key="tag"
              pill
              variant="white"
              class="text-primary"
              :href="'/tags/' + tag"
            >
              #{{ tag }}
            </b-badge>
          </div>
        </a>
      </b-card>
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
    lastUpdated(date) {
      Moment.locale(this.$lang);
      return Moment(date).fromNow();
    },
  },
};
</script>

<style lang="scss" scoped>
.list-group-item {
  h1 {
    font-size: 2rem;
  }
}
.article {
  background-position: center;
  background-size: 100%;
}

.last-updated {
  font-size: 0.8rem;
  font-weight: lighter;
}

.title {
  font-size: 1.3rem;
  line-height: 1.5rem;
}

.badge {
  margin-right: 5px;
}

* {
  color: white;
}

.card a:hover {
  text-decoration: none;
}
</style>
