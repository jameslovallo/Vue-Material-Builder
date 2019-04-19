<template>
  <v-card
    v-editable="blok"
    :color="blok.color"
    :dark="blok.dark"
    :elevation="blok.elevation"
    :flat="blok.flat"
    :height="blok.height"
    :hover="blok.hover"
    :max-height="blok.max_height"
    :max-width="blok.max_width"
    :min-height="blok.min_height"
    :min-width="blok.min_width"
    :raised="blok.raised"
    :width="blok.width"
    :class="blok.helpers"
    :style="blok.style"
  >
    <component
      :key="blok._uid"
      v-for="blok in blok.cardimage"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
    <v-card-title v-if="blok.hastitle">
      <component
        :key="blok._uid"
        v-for="blok in blok.title"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-card-title>
    <v-card-text :class="blok.full_bleed_content">
      <component
        :key="blok._uid"
        v-for="blok in blok.cardcontent"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-card-text>
    <v-divider v-if="blok.hasactions"></v-divider>
    <v-card-actions v-if="blok.hasactions" class="pa-3">
      <component
        :key="blok._uid"
        v-for="blok in blok.cardactions"
        :blok="blok"
        :is="blok.component | dashify"
        style="width: 100%;"
      ></component>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style scoped>
.full-bleed {
  padding: 0;
}
</style>
