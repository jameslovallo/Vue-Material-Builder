<template>
  <component
    :is="blok.tag"
    v-editable="blok"
    :class="[blok.size, blok.weight, blok.transform, blok.italic, blok.truncate, blok.helpers, blok.shadow, blok.text_background_image ? 'clip-text' : '']"
    :style="`${color} ${blok.style} ${backgroundImage} ${longShadow}`"
  >{{blok.text}}</component>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    color() {
      let color = this.blok.color;
      if (color.toString().includes("/")) {
        let colors = color.split("/");
        if (this.$vuetify.theme.dark === true) {
          return `color: ${colors[1]};`;
        } else {
          return `color: ${colors[0]};`;
        }
      } else {
        return `color: ${this.blok.color};`;
      }
    },
    backgroundImage() {
      if (this.blok.text_background_image) {
        return `background: url('${this.blok.text_background_image}') no-repeat center center/cover;`;
      } else {
        return "";
      }
    },
    longShadow() {
      let color = "";
      if (this.blok.shadow_color.includes("/")) {
        let colors = this.blok.shadow_color.split("/");
        if (this.$vuetify.theme.dark === true) {
          color = colors[1];
        } else {
          color = colors[0];
        }
      } else {
        color = this.blok.shadow_color;
      }
      var shadow = "";
      var i;
      for (i = 1; i < this.blok.shadow_length; i++) {
        shadow += `${i}px ${i}px 0 ${color},`;
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
