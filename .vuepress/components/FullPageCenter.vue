<template>
  <div
    class="d-flex align-items-center fpc-container"
    :style="getStyle"
  >
    <b-container class="py-5">
      <slot />
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: ""
    },
  },
  computed: {
    getStyle() {
      if (!this.background) return '';
      if (this.background.includes('gradient')) {
        return `background: ${this.background};`;
      }
      return `background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${this.background});`;
    }
  }
};
</script>

<style lang="scss">
@import "../theme/styles/variables.scss";

.fpc-container {
  min-height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  position: relative;
  overflow: hidden;
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
  .fpc-container {
    padding-top: 5rem;
    padding-bottom: 5rem;
    min-height: auto;
  }
}
</style>

