<template>
  <v-list-item
    v-editable="blok"
    :active-class="blok.activeclass"
    :color="blok.color"
    :class="blok.helpers"
    :dark="blok.dark"
    :exact="blok.exact"
    :exact-active-class="blok.exactactiveclass"
    :href="blok.href"
    :nuxt="blok.nuxt"
    ripple
    :style="blok.style"
    :target="blok.target"
    :to="blok.to"
  >
    <v-list-item-avatar v-if="blok.image != false" class="image-avatar">
      <img :src="blok.image" />
    </v-list-item-avatar>
    <v-list-item-avatar :color="blok.iconbg" v-if="blok.icon != false" class="icon-avatar">
      <component
        :key="blok._uid"
        v-for="blok in blok.icon"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title v-if="blok.title">{{blok.title}}</v-list-item-title>
      <v-list-item-sub-title v-if="blok.subtitle">{{blok.subtitle}}</v-list-item-sub-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
