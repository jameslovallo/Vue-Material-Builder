<template>
  <div v-editable="blok" id="nav">
    <!-- DRAWER -->
    <v-navigation-drawer v-model="drawer" v-if="blok.usedrawer" clipped app>
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
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        v-if="blok.usedrawer"
        class="hidden-md-only mr-3"
      ></v-toolbar-side-icon>
      <v-toolbar-title v-if="blok.title">{{blok.title}}</v-toolbar-title>
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
