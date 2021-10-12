<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../theme/styles/variables.scss";
.container {

  border-left-color: $white;
  border-left-style: solid;
  border-left-width: 2px;

  #name p {
    font-weight: 800;
    font-size: 2.3rem;
    margin-bottom: 0;
    letter-spacing: 0.1rem;
  }

  #subtitle p {
    font-weight: lighter;
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
  }

}

</style>