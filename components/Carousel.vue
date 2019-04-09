<template>
  <v-carousel
    :active-class="blok.active_class"
    :cycle="blok.cycle"
    :dark="blok.dark"
    :delimeter-icon="blok.delimeter_icon.icon"
    :height="blok.height"
    :hide-controls="blok.hide_controls"
    :hide-delimiters="blok.hide_delimiters"
    :interval="blok.interval"
    :light="blok.light"
    :mandatory="blok.mandatory"
    :max="blok.max_width"
    :next-icon="blok.next_icon.icon"
    :prev-icon="blok.prev_icon.icon"
    :reverse="blok.reverse"
    :touchless="blok.touchless"
    :vertical="blok.vertical"
    :style="blok.style"
    :class="blok.helpers"
  >
    <component
      :key="blok._uid"
      v-for="blok in blok.content"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-carousel>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.v-carousel__prev {
  left: 20px;
}
.v-carousel__next {
  right: 20px;
}
</style>
