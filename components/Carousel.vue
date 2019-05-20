<template>
  <v-carousel
    :active-class="blok.active_class"
    :cycle="blok.cycle"
    :dark="blok.dark"
    :delimeter-icon="'mdi-' + blok.delimeter_icon"
    :height="blok.height"
    :hide-controls="blok.hide_controls"
    :hide-delimiters="blok.hide_delimiters"
    :interval="blok.interval * 1000"
    :light="blok.light"
    :mandatory="blok.mandatory"
    :max="blok.max_width"
    :next-icon="'mdi-' + blok.next_icon"
    :prev-icon="'mdi-' + blok.prev_icon"
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
