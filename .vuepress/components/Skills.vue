<template>
  <div class="d-flex my-3 pl-3 pb-2">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

div {

  overflow-x: scroll;
  overflow-y: hidden;

  // Simple
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0,0,0,0.1);
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: rgba(0,0,0,0.2);
  }
  &::-webkit-scrollbar-thumb:hover{
    background: rgba(0,0,0,0.4);
  }
  &::-webkit-scrollbar-thumb:active{
    background: rgba(0,0,0,.9);
  }

  img {
    margin: 0 1rem;
  }
  img:first-child {
    margin-left: 0;
  }
}

</style>