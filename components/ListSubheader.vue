<template>
  <div v-editable="blok">
    <v-subheader>{{blok.text}}</v-subheader>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
