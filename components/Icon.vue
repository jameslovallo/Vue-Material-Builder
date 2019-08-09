<template>
  <v-icon
    v-editable="blok"
    :color="blok.color"
    :dark="blok.dark"
    :left="blok.left"
    :right="blok.right"
    :size="blok.size"
    :class="blok.helpers"
    :style="blok.style"
  >{{'mdi-' + blok.icon}}</v-icon>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.v-btn__content .v-icon--left {
  margin-right: 12px;
}
</style>
