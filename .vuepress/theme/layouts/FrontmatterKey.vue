<template>
  <div>
    <my-nav />
    <div class="container mt-5">
      <b-list-group>
        <b-list-group-item
          v-for="item in $frontmatterKey.list"
          v-bind:key="item.name"
          :href="item.path"
        >
          {{ item.name }}
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import MyNav from "../components/MyNav.vue";
import NavOptions from "../components/NavOptions";
export default {
  components: { NavOptions, MyNav },
}
</script>

<style></style>
