<template>
  <b-navbar toggleable variant="faded" class="d-md-none bg-primary" fixed="top">
    <b-navbar-brand :href="this.$localePath">@alberttocastro</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          v-for="link in this.$themeConfig.locales[this.$localePath].nav"
          v-bind:key="link.link"
          :href="link.link"
          >{{ link.text }}</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
