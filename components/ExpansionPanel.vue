<template>
  <div v-editable="blok">
    <v-expansion-panel
      :dark="blok.dark"
      :expand="blok.expand"
      :focusable="blok.focusable"
      :inset="blok.inset"
      :popout="blok.popout"
      :readonly="blok.readonly"
      :class="blok.helpers"
      :style="blok.style"
    >
      <component
        :key="blok._uid"
        v-for="blok in blok.content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
