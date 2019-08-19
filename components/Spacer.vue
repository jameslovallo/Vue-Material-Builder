<template>
  <v-spacer v-editable="blok" :class="blok.use_as_dot_leader ? 'dot-leader' : ''"></v-spacer>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style lang="scss">
.dot-leader {
  @media (min-width: 768px) {
    border-bottom: 1px dotted;
    height: 1em;
    margin: 0 0.25em;
  }
}
</style>
