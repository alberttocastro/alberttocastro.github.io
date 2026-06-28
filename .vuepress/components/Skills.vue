<template>
  <div class="skills-container my-4 p-3">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.skills-container {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 2.5rem;
  padding: 1rem 0;
  align-items: center;

  // Custom scrollbar for a premium look
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb:active {
    background: rgba(255, 255, 255, 0.6);
  }

  // Target the slotted images
  ::v-deep img {
    height: 64px;
    width: auto;
    object-fit: contain;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4)) grayscale(20%);
    cursor: pointer;
    flex-shrink: 0;
    
    &:hover {
      transform: translateY(-10px) scale(1.15);
      filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.6)) grayscale(0%) brightness(1.1);
    }
  }
}
</style>