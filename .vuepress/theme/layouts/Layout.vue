<template>
  <div class="d-md-flex">
    <my-nav/>
    <b-container fluid>
      <Content />
    </b-container>
  </div>
</template>

<script>
import MyNav from "../components/MyNav.vue";
export default {
  components: { MyNav },
};
</script>

<style lang="scss" scoped>

</style>
