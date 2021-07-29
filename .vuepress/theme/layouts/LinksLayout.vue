<template>
  <div id="link-bg" fluid class="text-center">
    <img
      src="../assets/aboutwritter.png"
      class="my-3 round"
      style="max-width: 40vw;"
    />
    <b-container>
      <Content />
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  border-radius: 50%;
  border-color: var(--primary);
  border-width: 8px;
  border-style: solid;
}

#link-bg {
  background: rgb(68, 158, 140);
  background: linear-gradient(
    138deg,
    rgba(68, 158, 140, 1) 0%,
    rgba(129, 158, 68, 1) 40%,
    rgba(68, 158, 69, 1) 100%
  );
  min-height: 100vh;
}
</style>
