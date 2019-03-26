<template>
  <div v-editable="blok">
    <v-divider
      :dark="blok.dark"
      :inset="blok.inset"
      :vertical="blok.vertical"
      :class="blok.helpers"
      :style="blok.style"
    ></v-divider>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.theme--dark .v-divider {
  opacity: 0.1;
}
</style>
