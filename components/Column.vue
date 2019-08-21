<template>
  <v-col
    v-editable="blok"
    v-if="this.blok.size"
    :cols="this.blok.size['xsmall'] ? this.blok.size['xsmall'] : false"
    :sm="this.blok.size['small'] ? this.blok.size['small'] : false"
    :md="this.blok.size['medium'] ? this.blok.size['medium']  : false"
    :lg="this.blok.size['large'] ? this.blok.size['large'] : false"
    :xl="this.blok.size['xlarge'] ? this.blok.size['xlarge'] : false"
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
