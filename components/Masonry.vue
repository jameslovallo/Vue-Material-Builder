<template>
  <no-ssr>
    <magic-grid
      :maxCols="blok.maximum_columns"
      :maxColWidth="blok.maximum_item_width"
      animate="true"
      :class="blok.helpers"
      :style="['width: 100%;', blok.style]"
    >
      <component
        :key="blok._uid"
        v-for="blok in blok.content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </magic-grid>
  </no-ssr>
</template>

<script>
import NoSSR from "vue-no-ssr";

export default {
  props: ["blok"],
  components: {
    "no-ssr": NoSSR
  }
};
</script>
