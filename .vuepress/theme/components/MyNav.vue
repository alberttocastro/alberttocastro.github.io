<template>
  <div id="nav">
    <b-nav
      vertical
      class="flex-grow-0 flex-shrink-0 vh-100 align-items-center justify-content-center"
    >
      <img src="../assets/profile.png" class="mb-5" style="max-width: 150px;" />
      <b-nav-item
        v-for="link in this.$site.themeConfig.sidebar"
        v-bind:key="link[0]"
        :href="link[0]"
        >{{ link[1] }}</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
#nav,
#nav > ul {
  min-width: 225px;
  max-width: 225px;
}

#nav > ul {
  position: fixed;
}
</style>
