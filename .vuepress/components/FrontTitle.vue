<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../theme/styles/variables.scss";
.container {
  border-left: 4px solid var(--accent);
  padding-left: 2rem;
  box-shadow: -15px 0 30px -15px rgba(99, 102, 241, 0.4);
  transition: all 0.5s ease;

  #name::v-deep p, #name {
    font-weight: 800;
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, var(--accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #subtitle::v-deep p, #subtitle {
    font-weight: 300;
    font-size: 1.75rem;
    color: $text;
    letter-spacing: -0.02em;
  }
}

@media (max-width: map-get($grid-breakpoints, md) - 1px) {
  .container {
    padding-left: 1.25rem;
    
    #name::v-deep p, #name {
      font-size: 2.8rem;
    }
    #subtitle::v-deep p, #subtitle {
      font-size: 1.35rem;
    }
  }
}
</style>