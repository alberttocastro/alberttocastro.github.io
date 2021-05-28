<template>
  <div class="d-md-flex">
    <my-nav/>
    <!-- As a link -->
    <mobile-nav />
    <b-container fluid>
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
