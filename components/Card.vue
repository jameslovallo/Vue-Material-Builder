<template>
  <v-card
    v-editable="blok"
    :color="blok.color | lightOrDark(this.$vuetify.theme.dark)"
    :dark="blok.dark"
    :elevation="blok.elevation"
    :flat="blok.flat"
    :height="blok.height"
    :hover="blok.hover"
    :max-height="blok.max_height"
    :max-width="blok.max_width"
    :min-height="blok.min_height"
    :min-width="blok.min_width"
    :outlined="blok.outline"
    :raised="blok.raised"
    :tile="blok.tile"
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
    <v-card-text
      v-if="blok.cardcontent != false"
      :class="blok.full_bleed_content ? 'full-bleed' : ''"
    >
      <component
        :key="blok._uid"
        v-for="blok in blok.cardcontent"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-card-text>
    <v-divider v-if="blok.cardactions != false && blok.color!='transparent'"></v-divider>
    <v-card-actions v-if="blok.cardactions != false">
      <component
        :key="blok._uid"
        v-for="blok in blok.cardactions"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style lang="scss">
.full-bleed {
  padding: 0;
}

.v-card {
  display: flex;
  flex-direction: column;
  &__title,
  &__text,
  &__actions {
    position: relative;
    overflow: hidden;
    flex-grow: 0;
    .v-btn {
      margin-left: 8px;
      &.v-size--large {
        padding: 0 20px;
      }
      &.v-btn--text {
        margin-left: 0;
      }
    }
  }

  &__text {
    flex-grow: 1;
  }

  &__title {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 0;
      margin-top: 0;
    }
  }
}

.theme--light.v-card .v-card__text {
  color: black;
}

.theme--dark.v-card .v-card__text {
  color: white;
}
</style>
