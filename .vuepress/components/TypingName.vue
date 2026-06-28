<template>
  <span :id="elementId" class="typing-name"></span>
</template>

<script>
import Typed from 'typed.js';
export default {
  props: {
    strings: {
      type: Array,
      default: () => ["@alberttocastro", "Alberto Castro"]
    },
    typeSpeed: {
      type: Number,
      default: 80
    },
    backSpeed: {
      type: Number,
      default: 40
    },
    backDelay: {
      type: Number,
      default: 2000
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      elementId: 'typed-' + Math.random().toString(36).substr(2, 9)
    };
  },
  mounted() {
    new Typed('#' + this.elementId, {
      strings: this.strings,
      typeSpeed: this.typeSpeed,
      backSpeed: this.backSpeed,
      backDelay: this.backDelay,
      loop: this.loop,
      showCursor: true,
      cursorChar: '_'
    });
  }
}
</script>

<style lang="scss">
@import "../theme/styles/variables.scss";

.typing-name {
  font-weight: 700;
}

.typed-cursor {
  color: var(--accent);
  opacity: 1;
  animation: typedjsBlink 0.7s infinite;
  -webkit-animation: typedjsBlink 0.7s infinite;
  animation-fill-mode: both;
}

@keyframes typedjsBlink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
</style>