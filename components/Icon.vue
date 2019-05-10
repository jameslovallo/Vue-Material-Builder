<template>
  <v-icon
    v-editable="blok"
    :color="blok.color"
    :dark="blok.dark"
    :left="blok.left"
    :right="blok.right"
    :size="blok.size"
    :class="[blok.helpers, blok.brand_icon]"
    :style="blok.style"
  >{{blok.fa.icon}}{{blok.add_icon}}</v-icon>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.is-brand {
  font-family: "Font Awesome 5 Brands" !important;
}
</style>
