<template>
  <div v-editable="blok">
    <v-expansion-panel>
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
