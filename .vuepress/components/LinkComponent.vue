<template>
  <div>
    <a
      :href="link"
      class="rounded-pill text-decoration-none text-black"
      target="_blank"
    >
      <b-card class="rounded-pill font-weight-bold" style="font-size: 1.4rem">
        <b-card-text
          class="d-flex align-items-center justify-content-center text-dark "
        >
          <b-icon v-if="icon" :icon="icon" class="mr-2" />
          <slot />
        </b-card-text>
      </b-card>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
.card-text {
  p {
    margin-bottom: 0;
  }
}
</style>
