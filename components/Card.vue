<template>
  <div v-editable="blok">
    <v-card
      :color="blok.color"
      :dark="blok.dark"
      :elevation="blok.elevation"
      :flat="blok.flat"
      :height="blok.height"
      :hover="blok.hover"
      :min-height="blok.minheight"
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
      <v-card-text>
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
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
