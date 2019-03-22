<template>
  <div v-editable="blok">
    <v-list
      :dark="blok.dark"
      :dense="blok.dense"
      :expand="blok.expand"
      :subheader="blok.subheader"
      :three-line="blok.threeline"
      :two-line="blok.twoline"
      :class="blok.helpers"
      :style="blok.style"
    >
      <component
        :key="blok._uid"
        v-for="blok in blok.listcontent"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
      {{blok.text}}
    </v-list>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
