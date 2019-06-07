<template>
  <div
    v-editable="blok"
    :class="[blok.size, blok.weight, blok.transform, blok.italic, blok.truncate, blok.helpers, blok.shadow, blok.text_background_image ? 'clip-text' : '']"
    :style="color + blok.style + (blok.text_background_image ? backgroundImage : '')"
  >{{blok.text}}</div>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    color() {
      return `color: ${this.blok.color.color}; `;
    },
    backgroundImage() {
      return `background: url('${
        this.blok.text_background_image
      }') no-repeat center center/cover;`;
    }
  }
};
</script>

<style>
.shadow {
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}
.clip-text {
  background-clip: text !important;
  -webkit-background-clip: text !important;
  color: transparent;
}
</style>
