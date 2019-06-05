<template>
  <v-spacer :class="blok.use_as_dot_leader"></v-spacer>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.theme--dark .dot-leader {
  border-bottom: 4px dotted white;
  height: 1em;
  position: relative;
  top: -3px;
  margin: 0 .5em;
}
</style>
