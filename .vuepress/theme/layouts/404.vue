<template>
  <div
    id="container"
    class="d-flex flex-column justify-content-center align-items-center"
  >
    <img src="../assets/404.svg" alt="" />
    <div class="subtitle mt-5">
      Oxe. E é aqui, é?
    </div>
    <div id="page-link" class="d-md-flex w-50 justify-content-around mt-5">
      <p class="text-center">
        <a href="/pt/">
          Página inicial
        </a>
      </p>
      <p class="text-center">
        <a href="/">
          Go back to main page
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
#container {
  width: 100vw;
  height: 100vh;

  img {
    max-width: 90vw;
    max-height: 50vh;
  }

  .subtitle {
    font-weight: 600;
    font-size: 2em;

    color: var(--danger);
  }

  #page-link {
    font-weight: 800;
    a {
      color: var(--primary);
    }
  }
}
</style>
