<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-brand :href="this.$localePath">@alberttocastro</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item
          v-for="link in this.$themeConfig.locales[this.$localePath].nav"
          v-bind:key="link.link"
          :href="link.link"
          >{{ link.text }}</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
    <b-container>
      <Content />
    </b-container>
  </div>
</template>

<script>
import MyNav from "../components/MyNav.vue";
import MobileNav from "../components/MobileNav.vue";
export default {
  components: { MyNav, MobileNav },
};
</script>

<style lang="scss" scoped>

</style>