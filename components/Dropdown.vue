<template>
  <v-menu offset-y :left="blok.right" :right="blok.left">
    <template v-slot:activator="{ on }">
      <v-btn v-editable="blok" v-on="on" :color="blok.button_color" :dark="blok.button_dark" :outline="blok.button_outline" :round="blok.button_round" :large="blok.button_large" :icon="blok.button_icon" :flat="blok.button_flat">
        <component
        :key="blok._uid"
        v-for="blok in blok.icon"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>text</v-btn>
    </template>
    <v-list>
      <component
        :key="blok._uid"
        v-for="blok in blok.dropdown_content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
