<template>
  <div v-editable="blok" id="nav">
    <!-- DRAWERS -->
    <v-navigation-drawer v-if="blok.sidebar_content != false" v-model="drawer" clipped app>
      <component
        :key="blok._uid"
        v-for="blok in blok.sidebar_content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-navigation-drawer>
    <!-- TOOLBAR -->
    <v-toolbar
      v-if="blok.toolbar_content != false"
      app
      clipped-left
      :color="blok.color"
      :dark="blok.dark"
      :flat="blok.flat"
      :dense="blok.dense"
      :class="blok.helpers"
      :style="blok.style"
    >
      <v-toolbar-side-icon v-if="blok.sidebar_content != false" @click="drawer = !drawer"></v-toolbar-side-icon>
      <component
        :key="blok._uid"
        v-for="blok in blok.toolbar_content"
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
