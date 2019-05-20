<template>
  <div v-editable="blok" :class="['flex', blok.xscol, blok.smcol, blok.mdcol, blok.lgcol, blok.xlcol]">
    <component
      :key="blok._uid"
      v-for="blok in blok.columncontent"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
