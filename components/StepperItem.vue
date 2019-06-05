<template>
  <div v-editable="blok">
    <v-stepper-step :step="blok.step" :color="blok.color">
      {{blok.label}}
      <small>{{blok.description}}</small>
    </v-stepper-step>
    <v-stepper-content :step="blok.step">
      <component
        :key="blok._uid"
        v-for="blok in blok.content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-stepper-content>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
