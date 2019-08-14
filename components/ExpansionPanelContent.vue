<template>
  <v-expansion-panel v-editable="blok" :class="blok.helpers" :style="blok.style">
    <v-expansion-panel-header>
      <div>{{blok.title}}</div>
    </v-expansion-panel-header>
    <v-expansion-panel-content eager>
      <component
        :key="blok._uid"
        v-for="blok in blok.content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
