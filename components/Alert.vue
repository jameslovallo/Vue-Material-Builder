<template>
  <v-alert
    v-editable="blok"
    v-model="alert"
    :color="blok.color | lightOrDark(this.$vuetify.theme.dark)"
    :dismissible="blok.dismissable"
    :icon="'mdi-' + blok.icon"
    :mode="blok.mode"
    :origin="blok.origin"
    :outlined="blok.outline"
    :transition="blok.transition"
    :type="blok.type"
    :class="blok.helpers"
    :style="blok.style"
  >{{blok.message}}</v-alert>
</template>

<script>
export default {
  props: ["blok"],
  data: () => ({
    alert: true
  })
};
</script>

<style>
.page-hero .v-alert {
  margin: 0 0;
  border: 0;
}
</style>
