<template>
  <div v-editable="blok" class="markdown">
    <div v-html="$md.render(blok.md)" :style="blok.style" :class="blok.helpers"></div>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.markdown code {
  background: #ebeff2;
  border-radius: 10px;
  padding: 1rem;
  color: black;
  font-family: 'Roboto Mono';
}
.markdown code:before,
.markdown code:after {
  display: none;
}
</style>

