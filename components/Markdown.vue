<template>
  <div
    v-editable="blok"
    class="markdown"
    v-html="$md.render(blok.md)"
    :style="blok.style"
    :class="blok.helpers"
  ></div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.v-card__text .markdown *:first-child {
  margin-top: 0;
}
.v-card__text .markdown *:last-child {
  margin-bottom: 0;
}
</style>

