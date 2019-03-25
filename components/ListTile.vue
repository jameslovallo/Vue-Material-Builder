<template>
  <div v-editable="blok">
    <v-list-tile
      :active-class="blok.activeclass"
      :avatar="blok.avatar"
      :color="blok.color"
      :class="blok.helpers"
      :dark="blok.dark"
      :exact="blok.exact"
      :exact-active-class="blok.exactactiveclass"
      :href="blok.href"
      :nuxt="blok.nuxt"
      :ripple="blok.ripple"
      :style="blok.style"
      :target="blok.target"
      :to="blok.to"
    >
      <v-list-tile-avatar v-if="blok.image && blok.hideavatar===false" class="image-avatar">
        <img :src="blok.image">
      </v-list-tile-avatar>
      <v-list-tile-avatar :color="blok.iconbg" v-if="blok.hideavatar===false" class="icon-avatar">
        <component
          :key="blok._uid"
          v-for="blok in blok.icon"
          :blok="blok"
          :is="blok.component | dashify"
        ></component>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title v-if="blok.title">{{blok.title}}</v-list-tile-title>
        <v-list-tile-sub-title v-if="blok.subtitle">{{blok.subtitle}}</v-list-tile-sub-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  copmputed: {
    ishidden() {
      return blok.image;
    }
  }
};
</script>

<style>
.image-avatar + .icon-avatar {
  display: none;
}
</style>

