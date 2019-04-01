<template>
  <v-subheader v-editable="blok">{{blok.text}}</v-subheader>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
