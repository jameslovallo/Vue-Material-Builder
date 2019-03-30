<template>
  <v-textarea v-editable="blok" label="Your Message" name="message" textarea required></v-textarea>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
