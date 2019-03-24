<template>
  <div v-editable="blok">
    <v-navigation-drawer v-model="blok.drawer" clipped app fixed>
      <component
        :key="blok._uid"
        v-for="blok in blok.drawercontent"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
