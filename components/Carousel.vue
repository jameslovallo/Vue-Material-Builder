<template>
  <v-carousel
    :active-class="blok.active_class"
    :cycle="blok.cycle"
    :dark="blok.dark"
    :delimeter-icon="blok.delimeter_icon"
    :height="blok.height"
    :hide-controls="blok.hide_controls"
    :hide-delimiters="blok.hide_delimiters"
    :interval="blok.interval"
    :light="blok.light"
    :mandatory="blok.mandatory"
    :max="blok.max_width"
    :next-icon="blok.next_icon"
    :prev-icon="blok.prev_icon"
    :reverse="blok.reverse"
    :touchless="blok.touchless"
    :vertical="blok.vertical"
    :style="blok.style"
    :class="helpers"
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
