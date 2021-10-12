<template>
  <b-card
    class="rounded-lg"
    no-body
    :style="
      'background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(' +
        src +
        ')'
    "
  >
    <div class="p-0">
      <div class="text-center date">
        <slot name="date" />
      </div>
      <div class="text-center">
        <slot />
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    src: String,
  },
};
</script>

<style scoped>
.card {
  background-position: center;
  background-size: 100%;
}
</style>

<style lang="scss" scoped>

.date {
  font-size: 0.7rem;
  letter-spacing: 0.2rem;
}

</style>
