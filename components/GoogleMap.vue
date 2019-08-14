<template>
  <iframe
    v-editable="blok"
    :width="blok.width"
    :height="blok.height"
    :src="`https://maps.google.com/maps?q=${blok.location.replace(' ', '%20')}${blok.satellite}&z=${blok.zoom_level}&ie=UTF8&output=embed`"
    frameborder="0"
    scrolling="no"
    :class="blok.helpers"
    :style="blok.style"
  ></iframe>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
