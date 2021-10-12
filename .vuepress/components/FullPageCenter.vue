<template>
  <div
    class="d-flex align-items-center fpc-container"
    :style="background ? 'background: url(' + background + ')' : ''"
  >
    <b-container>
      <slot />
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    background: "",
  },
};
</script>

<style lang="scss">
@import "../theme/styles/variables.scss";

.fpc-container {
  min-height: 100vh;

  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}

h1 {
  margin-bottom: 2rem;
}

h2 > a {
  word-break: break-all;
}

.subtitle {
  h2 {
    color: $white;
    margin-bottom: 0.05rem;
  }

  p {
    font-weight: 200;
    letter-spacing: 0.1rem;
  }
}

@media (max-width: map-get($grid-breakpoints, md) - 1px) {
  .fpc-container:first-of-type {
    padding-top: 10rem;
  }
}
</style>
