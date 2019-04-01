<template>
  <v-btn
    v-editable="blok"
    :active-class="blok.activeclass"
    :block="blok.block"
    :color="blok.color"
    :class="blok.helpers"
    :dark="blok.dark"
    :exact="blok.exact"
    :fab="blok.fab"
    :flat="blok.flat"
    :href="blok.href"
    :icon="blok.icon"
    :large="blok.large"
    :outline="blok.outline"
    :round="blok.round"
    :router="blok.router"
    :small="blok.small"
    :style="blok.style"
    :target="blok.target"
    :to="blok.to"
    v-on="blok.on"
  >
    <component
      :key="blok._uid"
      v-for="blok in blok.bicon"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
    {{blok.text}}
  </v-btn>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
