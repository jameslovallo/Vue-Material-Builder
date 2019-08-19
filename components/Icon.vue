<template>
  <v-icon
    v-editable="blok"
    :color="blok.color | lightOrDark(this.$vuetify.theme.dark)"
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
