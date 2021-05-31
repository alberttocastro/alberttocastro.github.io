<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-brand :href="this.$localePath">@alberttocastro</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <nav-options class="ml-auto" />
      </b-collapse>
    </b-navbar>
    <b-container>
      <Content />
      <Vssue :title="$title" />
    </b-container>
  </div>
</template>

<script>
import NavOptions from "../components/NavOptions";
export default {
  components: { NavOptions }
};
</script>
