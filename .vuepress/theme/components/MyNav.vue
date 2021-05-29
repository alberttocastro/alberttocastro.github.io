<template>
  <div id="nav">
    <b-nav
      vertical
      class="flex-grow-0 flex-shrink-0 vh-100 align-items-center justify-content-center"
    >
      <img src="../assets/profile.png" class="mb-5" style="max-width: 150px;" />
      <b-nav-item
        v-for="link in this.$themeConfig.locales[this.$localePath].nav"
        v-bind:key="link.link"
          :href="link.link"
          >{{ link.text }}</b-nav-item
        >
    </b-nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";

$navwidth: 250px;
@media (min-width: map-get($grid-breakpoints, md)) {
  #nav,
  #nav > ul {
    min-width: $navwidth;
    max-width: $navwidth;
  }

  #nav > ul {
    position: fixed;
  }
}

@media (max-width: map-get($grid-breakpoints, md) - 1px) {
  #nav,
  #nav > * {
    display: none !important;
  }
}
</style>
