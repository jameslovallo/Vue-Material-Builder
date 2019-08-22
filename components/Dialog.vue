<template>
  <v-dialog
    v-editable="blok"
    v-model="dialog"
    :fullscreen="blok.fullscreen"
    :max-width="blok.max_width"
    :origin="blok.origin"
    :persistent="blok.persistent"
    :scrollable="blok.scrollable"
    :width="blok.width"
  >
    <template v-slot:activator="{ on }">
      <div v-on="on">
        <component
          :key="blok._uid"
          v-for="blok in blok.open_dialog"
          :blok="blok"
          :is="blok.component | dashify"
          z
        ></component>
      </div>
    </template>
    <v-card
      v-editable="blok"
      :color="blok.color | lightOrDark(this.$vuetify.theme.dark)"
      :dark="blok.dark"
      :elevation="blok.elevation"
      :flat="blok.flat"
      :hover="blok.hover"
      :raised="blok.raised"
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
      <v-divider v-if="blok.cardactions != false"></v-divider>
      <v-card-actions v-if="blok.cardactions != false || blok.close_dialog != false" class="py-4">
        <component
          :key="blok._uid"
          v-for="blok in blok.cardactions"
          :blok="blok"
          :is="blok.component | dashify"
          style="width: 100%;"
        ></component>
        <div @click="dialog = false">
          <component
            :key="blok._uid"
            v-for="blok in blok.close_dialog"
            :blok="blok"
            :is="blok.component | dashify"
          ></component>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["blok"],
  data: () => ({
    dialog: false
  })
};
</script>

<style>
.v-dialog__container {
  display: block !important;
}
</style>
