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
    <v-card-title v-if="blok.title != false">
      <component
        :key="blok._uid"
        v-for="blok in blok.title"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-card-title>
    <v-card-text v-if="blok.cardcontent != false" :class="blok.full_bleed_content">
      <component
        :key="blok._uid"
        v-for="blok in blok.cardcontent"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-card-text>
    <v-divider v-if="blok.cardactions != false && blok.color!='transparent'"></v-divider>
    <v-card-actions v-if="blok.cardactions != false" class="px-4">
      <component
        :key="blok._uid"
        v-for="blok in blok.cardactions"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-card-actions>z
  </v-card>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.full-bleed {
  padding: 0;
}
.v-card__title,
.v-card__text {
  position: relative;
}
.theme--dark.v-card .v-card__text {
  color: white;
}
.theme--light.v-card .v-card__text {
  color: black;
}
</style>
