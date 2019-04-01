<template>
  <div
    v-editable="blok"
    :class="[blok.size, blok.weight, blok.transform, blok.italic, blok.truncate, blok.helpers, blok.shadow]"
    :style="blok.style"
  >{{blok.text}}</div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.shadow {
  text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
}
</style>
