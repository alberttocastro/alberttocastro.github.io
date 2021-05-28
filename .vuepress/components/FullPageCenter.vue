<template>
  <div class="d-flex align-items-center fpc-container">
    <b-container>
      <slot />
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../theme/styles/variables.scss";

.fpc-container {
  min-height: 100vh;
}

h1 {
  margin-bottom: 2rem;
}

h2 > a {
  word-break: break-all;
}

@media (max-width: map-get($grid-breakpoints, md) - 1px ) {
  .fpc-container:first-of-type {
    padding-top: 10rem;
  }
}
</style>
