<template>
  <div v-editable="blok" class="feature">{{ blok.name }}</div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
