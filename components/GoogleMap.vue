<template>
  <div :style="`height: ${blok.height}; max-height: ${blok.height}; overflow: hidden;`">
    <iframe
      :width="blok.width"
      :height="blok.height"
      :src="`https://maps.google.com/maps?q=${blok.location.replace(' ', '%20')}&t=${blok.satellite}&z=${blok.zoom_level}&ie=UTF8&iwloc=&output=embed`"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
