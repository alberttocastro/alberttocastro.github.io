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
  background: linear-gradient(162.74deg, #2D142C 2.55%, #792476 163.15%);
  min-height: 100vh;
}
</style>
