<template>
  <div
    v-editable="blok"
    :style="`display: grid; grid-template-columns: repeat(auto-fit, minmax(${blok.column_size}, 1fr)); grid-gap: ${blok.grid_gap}; width: 100%;`"
  >
    <component
      :key="blok._uid"
      v-for="blok in blok.columns"
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
