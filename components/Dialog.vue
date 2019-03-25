<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <div v-on="on">
          <component
            :key="blok._uid"
            v-for="blok in blok.dialogtrigger"
            :blok="blok"
            :is="blok.component | dashify"
          ></component>
        </div>
      </template>
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
        <v-img
          :src="blok.image"
          :aspect-ratio="blok.aspectratio"
          :position="blok.hor + '% ' + blok.ver + '%'"
        ></v-img>
        <v-card-title
          v-if="blok.title"
          primary-title
          :class="blok.titlecolor + ' headline'"
        >{{blok.title}}</v-card-title>
        <v-card-text>
          <component
            :key="blok._uid"
            v-for="blok in blok.cardcontent"
            :blok="blok"
            :is="blok.component | dashify"
          ></component>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-3">
          <component
            :key="blok._uid"
            v-for="blok in blok.cardactions"
            :blok="blok"
            :is="blok.component | dashify"
            style="width: 100%;"
          ></component>
          <v-spacer></v-spacer>
          <div @click="dialog = false">
            <component
              :key="blok._uid"
              v-for="blok in blok.dialogcloser"
              :blok="blok"
              :is="blok.component | dashify"
            ></component>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style>
.v-dialog__container {
  display: block !important;
}
</style>
