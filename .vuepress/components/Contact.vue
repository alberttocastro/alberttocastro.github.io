<template>
  <div>
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
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
  },
};
</script>

<style scoped>

p {
  margin: 0;
  overflow-wrap: anywhere;
}

</style>
