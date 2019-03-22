<template>
  <div v-editable="blok" class="fa">
    <v-icon
      :color="blok.color"
      :dark="blok.dark"
      :left="blok.left"
      :right="blok.right"
      :size="blok.size"
      :class="blok.helpers"
      :style="blok.style"
    >
      {{blok.fa.icon}}
    </v-icon>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
