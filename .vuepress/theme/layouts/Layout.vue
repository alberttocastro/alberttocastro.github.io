<template>
  <div class="d-flex">
    <my-nav />
    <b-container fluid>
      <Content />
    </b-container>
  </div>
</template>

<script>
import MyNav from "../components/MyNav.vue";
export default {
  components: { MyNav }
};
</script>

<style lang="scss">

</style>
