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
    <a :href="url">
      <div class="p-0">
        <div class="text-center date">
          <slot name="date" />
        </div>
        <div class="text-center title">
          <slot />
        </div>
      </div>
    </a>
  </b-card>
</template>

<script>
export default {
  props: {
    src: String,
    url: String,
  },
};
</script>

<style lang="scss" scoped>
@import "../theme/styles/variables.scss";

.card {
  background-position: center;
  background-size: cover;
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 180px;
  
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 180px;
    padding: 2.5rem 1.5rem;
    color: #ffffff;
    text-decoration: none;
    background: rgba(10, 11, 16, 0.65);
    transition: background 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
    
    a {
      background: rgba(10, 11, 16, 0.5);
    }
    
    .title {
      color: var(--accent);
    }
  }
}

.date {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.title {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #ffffff;
  transition: color 0.3s ease;
  
  ::v-deep p, ::v-deep span, ::v-deep em {
    margin-bottom: 0;
  }
}
</style>

