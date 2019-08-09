<template>
  <v-flex :class="[blok.xscol, blok.smcol, blok.mdcol, blok.lgcol, blok.xlcol]">
    <component
      :key="blok._uid"
      v-for="blok in blok.columncontent"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-flex>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
