<template>
  <div v-editable="blok">
    <component
      :key="blok._uid"
      v-for="blok in blok.nav"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
    <v-container>
      <component
        :key="blok._uid"
        v-for="blok in blok.body"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
