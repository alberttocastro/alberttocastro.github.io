<template>
  <div class="d-flex my-3 pl-3">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

div {

  overflow: scroll;

  img {
    margin: 0 1rem;
  }
  img:first-child {
    margin-left: 0;
  }
}

</style>