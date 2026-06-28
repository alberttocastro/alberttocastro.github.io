<template>
  <b-button :href="url" target="_blank" block variant="link" class="contact-card bg-glass py-3 px-4 my-3">
    <div class="d-flex align-items-center">
      <div class="icon-wrapper mr-4">
        <img :src="icon" class="contact-icon" />
      </div>
      <div class="info-wrapper text-left">
        <slot />
      </div>
    </div>
  </b-button>
</template>

<script>
export default {
  props: {
    icon: String,
    url: String
  },
};
</script>

<style lang="scss" scoped>
@import "../theme/styles/variables.scss";

.contact-card {
  text-decoration: none !important;
  border-radius: 16px;
  overflow: hidden;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  background: rgba(255, 255, 255, 0.02) !important;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  .icon-wrapper {
    background: rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    padding: 0.65rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.05);
    
    .contact-icon {
      width: 32px;
      height: 32px;
      object-fit: contain;
      transition: transform 0.3s ease;
    }
  }

  .info-wrapper {
    color: #ffffff;
    font-size: 1.15rem;
    font-weight: 500;
    transition: color 0.3s ease;
    
    ::v-deep p {
      margin: 0;
      word-break: break-all;
    }
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.3) !important;
    background: rgba(99, 102, 241, 0.04) !important;
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.1);

    .icon-wrapper {
      background: rgba(99, 102, 241, 0.15);
      border-color: rgba(99, 102, 241, 0.2);
      
      .contact-icon {
        transform: scale(1.1);
      }
    }
    
    .info-wrapper {
      color: var(--accent);
    }
  }
}
</style>

