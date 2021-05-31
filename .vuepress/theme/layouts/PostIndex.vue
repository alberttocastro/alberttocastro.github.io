<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary">
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
          <h1>
            {{ page.title }}
          </h1>
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
export default {
  components: { NavOptions }
};
</script>