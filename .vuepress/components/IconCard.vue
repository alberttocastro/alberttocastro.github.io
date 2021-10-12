<template>
  <b-card class="bg-glass rounded-lg py-2">
    <div class="d-flex align-items-center">
      <div class="d-flex flex-grow-0 justify-content-center">
        <img v-if="hasIcon" :src="icon" alt="" srcset="" class="mr-2" />
      </div>
      <div class="d-flex flex-grow-1 justify-content-center text-center">
        <slot />
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    icon: String,
    hasIcon: Boolean,
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>
