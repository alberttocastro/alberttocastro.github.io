<template>
  <b-navbar-nav>
    <b-nav-item
      v-for="link in this.$themeConfig.locales[this.$localePath].nav"
      v-bind:key="link.link"
      :href="link.link"
      >{{ link.text }}</b-nav-item
    >
    <switch-locale />
  </b-navbar-nav>
</template>

<script>
import SwitchLocale from "./SwitchLocale";
export default {
  components: { SwitchLocale },
};
</script>

<style></style>
