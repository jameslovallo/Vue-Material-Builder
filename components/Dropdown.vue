<template>
  <v-menu offset-y :left="blok.right">
    <template v-slot:activator="{ on }">
      <v-btn
        v-editable="blok"
        v-on="on"
        :color="blok.button_color | lightOrDark(this.$vuetify.theme.dark)"
        :dark="blok.button_dark"
        :text="blok.button_flat"
        :icon="blok.button_icon"
        :large="blok.button_large"
        :outlined="blok.button_outline"
        :rounded="blok.button_round"
        :small="blok.button_small"
        :class="blok.helpers"
        :style="blok.style"
      >
        <component
          :key="blok._uid"
          v-for="blok in blok.icon"
          :blok="blok"
          :is="blok.component | dashify"
        ></component>
        {{blok.button_text}}
      </v-btn>
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
