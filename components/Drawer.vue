<template>
  <v-navigation-drawer v-editable="blok" v-model="blok.drawer" clipped app fixed>
    <component
      :key="blok._uid"
      v-for="blok in blok.drawercontent"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
