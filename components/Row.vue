<template>
  <div v-editable="blok">
    <v-layout
      :align-baseline="blok.alignbaseline"
      :align-center="blok.aligncenter"
      :align-end="blok.alignend"
      :align-space-around="blok.alignspacearound"
      :align-space-between="blok.alignspacebetween"
      :align-start="blok.alignstart"
      :class="blok.helpers"
      :column="blok.column"
      :justify-center="blok.justifycenter"
      :justify-end="blok.justifyend"
      :justify-space-around="blok.justifyspacearound"
      :justify-space-between="blok.justifyspacebetween"
      :justify-start="blok.justifystart"
      :row="blok.row"
      :style="blok.style"
      :wrap="blok.wrap"
    >
      <component
        :key="blok._uid"
        v-for="blok in blok.rowcontent"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
