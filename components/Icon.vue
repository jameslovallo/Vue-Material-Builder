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
  >{{blok.fa.icon}}</v-icon>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
