<template>
  <v-row
    v-editable="blok"
    :class="[classProps, blok.helpers]"
    :dense="blok.dense"
    :no-gutters="blok.no_gutters || blok.use_as_container"
  >
    <component
      :key="blok._uid"
      v-for="blok in blok.rowcontent"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-row>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    classProps() {
      return [
        this.blok.align ? "align-" + this.blok.align : "",
        this.blok.align_sm ? "align-sm-" + this.blok.align_sm : "",
        this.blok.align_md ? "align-md-" + this.blok.align_md : "",
        this.blok.align_lg ? "align-lg-" + this.blok.align_lg : "",
        this.blok.align_xl ? "align-xl-" + this.blok.align_xl : "",
        this.blok.justify ? "justify-" + this.blok.justify : "",
        this.blok.justify_sm ? "justify-sm-" + this.blok.justify_sm : "",
        this.blok.justify_md ? "justify-md-" + this.blok.justify_md : "",
        this.blok.justify_lg ? "justify-lg-" + this.blok.justify_lg : "",
        this.blok.justify_xl ? "justify-xl-" + this.blok.justify_xl : "",
        this.blok.fill_height ? "fill-height" : "",
        this.blok.use_as_container ? "container" : ""
      ];
    }
  }
};
</script>
