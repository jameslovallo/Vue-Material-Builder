<template>
  <div v-editable="blok">
    <!-- DRAWER -->
    <v-navigation-drawer v-model="drawer" clipped app fixed>
      <component
        :key="blok._uid"
        v-for="blok in blok.sidebarcontent"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-navigation-drawer>
    <!-- TOOLBAR -->
    <v-toolbar
      app
      clipped-left
      :color="blok.color"
      :dark="blok.dark"
      :flat="blok.flat"
      :dense="blok.dense"
      :class="blok.helpers"
      :style="blok.style"
    >
      <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-only"></v-toolbar-side-icon>
      <v-img :src="blok.logo" height="66%" :max-width="blok.logowidth" contain></v-img>
      <v-toolbar-title>{{blok.title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <component
        :key="blok._uid"
        v-for="blok in blok.toolbarcontent"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  data() {
    return {
      drawer: null
    };
  }
};
</script>
