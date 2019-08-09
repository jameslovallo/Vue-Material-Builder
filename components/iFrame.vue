<template>
  <iframe
    v-editable="blok"
    :src="blok.source"
    frameborder="no"
    scrolling="no"
    width="100%"
    :height="blok.height"
    :class="blok.helpers"
    :style="blok.style"
  ></iframe>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
