<template>
  <v-text-field
    v-editable="blok"
    label="Name"
    name="name"
    required
  ></v-text-field>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
