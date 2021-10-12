<template>
  <b-navbar toggleable type="dark" class="bg-transparent">
    <b-navbar-brand :href="this.$localePath">@alberttocastro</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <nav-options />
    </b-collapse>
  </b-navbar>
</template>

<script>
import NavOptions from "./NavOptions";
export default {
  components: { NavOptions }
};
</script>

<style></style>
