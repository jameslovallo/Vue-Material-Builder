<template>
  <div v-editable="blok">
    <v-expansion-panel popout>
      <component
        :key="blok._uid"
        v-for="blok in blok.content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.v-expansion-panel > .storyblok__outline {
  flex-basis: 100%;
  display: flex;
  justify-content: center;
}
</style>
