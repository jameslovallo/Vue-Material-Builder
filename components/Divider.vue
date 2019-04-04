<template>
  <v-divider
    v-editable="blok"
    :dark="blok.dark"
    :inset="blok.inset"
    :vertical="blok.vertical"
    :class="blok.helpers"
    :style="blok.style"
  ></v-divider>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
