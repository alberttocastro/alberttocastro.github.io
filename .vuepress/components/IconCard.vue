<template>
  <b-card no-body class="bg-glass rounded-lg py-2">
    <a :href="url" target="_blank" v-if="url">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div class="d-flex flex-grow-0 justify-content-center">
            <img v-if="hasIcon" :src="icon" alt="" srcset="" class="mr-2" />
          </div>
          <div class="d-flex flex-grow-1 justify-content-center text-center">
            <slot />
          </div>
        </div>
      </div>
    </a>
    <div class="card-body" v-else>
      <div class="d-flex align-items-center">
        <div class="d-flex flex-grow-0 justify-content-center">
          <img v-if="hasIcon" :src="icon" alt="" srcset="" class="mr-2" />
        </div>
        <div class="d-flex flex-grow-1 justify-content-center text-center">
          <slot />
        </div>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    icon: String,
    hasIcon: Boolean,
    url: String,
  },
};
</script>

<style scoped>
p {
  margin-bottom: 0;
}
</style>

<style lang="scss" scoped>
a:hover {
  &, p {
    text-decoration:none;
  }
}
</style>
