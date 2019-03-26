<template>
  <div v-editable="blok" class="markdown" v-html="$md.render(blok.md)" :style="blok.style" :class="blok.helpers">
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.markdown code:before,
.markdown code:after {
  display: none;
}
</style>

