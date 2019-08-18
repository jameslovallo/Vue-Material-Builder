<template>
  <v-col
    v-editable="blok"
    :cols="this.blok.size['xsmall']"
    :sm="this.blok.size['small']"
    :md="this.blok.size['medium']"
    :lg="this.blok.size['large']"
    :xl="this.blok.size['xlarge']"
    :class="blok.helpers"
    :style="blok.style"
  >
    <component
      :key="blok._uid"
      v-for="blok in blok.columncontent"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-col>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
