<template>
  <div
    v-editable="blok"
    :class="[blok.size, blok.weight, blok.transform, blok.italic, blok.truncate, blok.helpers, blok.shadow, blok.text_background_image ? 'clip-text' : '']"
    :style="`${color} ${blok.style} ${backgroundImage} ${longShadow}`"
  >{{blok.text}}</div>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    color() {
      return `color: ${this.blok.color.color};`;
    },
    backgroundImage() {
      if (this.blok.text_background_image) {
        return `background: url('${this.blok.text_background_image}') no-repeat center center/cover;`;
      } else {
        return "";
      }
    },
    longShadow() {
      var shadow = "";
      var i;
      for (i = 1; i < this.blok.shadow_length; i++) {
        shadow += `${i}px ${i}px 0 ${this.blok.shadow_color},`;
      }
      shadow = `text-shadow: ${shadow};`;
      return shadow.replace(",;", ";");
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
