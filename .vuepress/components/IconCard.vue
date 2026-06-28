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

<style lang="scss" scoped>
@import "../theme/styles/variables.scss";

.card {
  border: none;
}

a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  width: 100%;
}

a:hover {
  color: var(--accent);
  text-decoration: none;
  
  ::v-deep p, ::v-deep em, ::v-deep span {
    color: var(--accent);
    text-decoration: none;
  }
}

::v-deep p {
  margin-bottom: 0;
  color: #ffffff;
  font-weight: 500;
  transition: color 0.3s ease;
}
</style>

