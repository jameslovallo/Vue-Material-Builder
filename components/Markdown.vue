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
.markdown *:first-child,
.markdown blockquote * {
  margin-top: 0;
}
.markdown *:last-child,
.markdown blockquote * {
  margin-bottom: 0;
}
</style>

