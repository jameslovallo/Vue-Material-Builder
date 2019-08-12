<template>
  <v-spacer :class="[blok.use_as_dot_leader, 'hidden-sm-and-down']"></v-spacer>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.dot-leader {
  border-bottom: 1px dotted;
  height: 1em;
  margin: 0 0.25em;
}
</style>
