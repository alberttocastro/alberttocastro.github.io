<template>
  <div id="fpc-container" class="d-flex align-items-center">
    <b-container>
      <slot />
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style class="scss">
#fpc-container {
  min-height: 100vh;
}
</style>
