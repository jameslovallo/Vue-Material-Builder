<template>
  <span>&copy; {{ new Date().getFullYear() + ' ' + blok.site_name}}</span>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
