<template>
  <div
    v-editable="blok"
    v-html="$md.render(blok.md)"
    :style="blok.style"
    :class="['markdown', blok.disable_responsive_copy ? 'not-responsive' : '', blok.helpers]"
  ></div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
