<template>
  <v-menu offset-y :left="blok.right" :right="blok.left">
    <template v-slot:activator="{ on }">
      <v-btn
        v-editable="blok"
        v-on="on"
        :color="blok.button_color"
        :dark="blok.button_dark"
        :flat="blok.button_flat"
        :icon="blok.button_icon"
        :large="blok.button_large"
        :outline="blok.button_outline"
        :round="blok.button_round"
        :small="blok.button_small"
      >
        <component
          :key="blok._uid"
          v-for="blok in blok.icon"
          :blok="blok"
          :is="blok.component | dashify"
        ></component
        >{{blok.button_text}}</v-btn
      >
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
