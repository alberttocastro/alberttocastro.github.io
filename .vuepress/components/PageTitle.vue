<template>
  <div class="d-flex">
    <div class="flex-grow-1 flex-shrink-1 d-flex align-items-center">
      <div class="line"></div>
    </div>
    <div class="flex-grow-1 text-center title">
      <h3>
        <slot />
      </h3>
    </div>
    <div class="flex-grow-1 flex-shrink-1 d-flex align-items-center">
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.line {
  border: 1px solid #ffffff;
  max-height: 0;
  width: 100%;
}

h1, p {
  margin: 0;
}
</style>
