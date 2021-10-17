<template>
  <b-button :href="url" target="_blank" block variant="link">
    <div class="d-flex align-content-center">
      <div class="flex-grow-0">
        <img :src="icon" />
      </div>
      <div class="flex-grow-1 d-flex align-items-center">
        <div class="flex-grow-1 text-center m-0 px-4">
          <slot />
        </div>
      </div>
    </div>
  </b-button>
</template>

<script>
export default {
  props: {
    icon: String,
    url: String
  },
};
</script>

<style scoped>

p {
  margin: 0;
  overflow-wrap: anywhere;
}

</style>

<style lang="scss" scoped>
@import "../theme/styles/variables.scss";
a:hover, a:visited, a:focus {
  text-decoration-color: $white;
}
</style>
