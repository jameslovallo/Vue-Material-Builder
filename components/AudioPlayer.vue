<template>
  <audio v-editable="blok" :src="blok.source" controls></audio>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
audio {
  width: 100%;
  display: block;
}
</style>
