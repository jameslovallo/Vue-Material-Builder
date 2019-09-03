<template>
  <span
    :class="blok.helpers"
    :style="blok.style"
  >&copy; {{ new Date().getFullYear() + ' ' + blok.site_name}}</span>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
