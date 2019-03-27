<template>
  <div v-editable="blok">
    <v-expansion-panel-content>
      <template v-slot:header>
        <div>{{blok.title}}</div>
      </template>
      <component
        :key="blok._uid"
        v-for="blok in blok.content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-expansion-panel-content>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
