<template>
  <h1 id="alberttocastro"></h1>
</template>

<script>
import Typed from 'typed.js';
export default {
  mounted: function() {
    let typed = new Typed('#alberttocastro', {
      strings: ["@alberttocastro", "Alberto Castro"],
      typeSpeed: 100,
      showCursor: false,
      smartBackspace: true,
      backSpeed: 40,
      backDelay: 3000,
      loopCount: 3,
      loop: true
    });
  }
}
</script>

<style>

h1 {
  min-height: 3rem;
  word-break: break-word;
}

</style>