<template>
  <div v-editable="blok">
    <div>{{blok.text}}</div>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
