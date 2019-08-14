<template>
  <v-expansion-panels
    v-editable="blok"
    :accordion="blok.accordion"
    :dark="blok.dark"
    :multiple="blok.multiple"
    :class="blok.helpers"
    :style="blok.style"
  >
    <component
      :key="blok._uid"
      v-for="blok in blok.content"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-expansion-panels>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
