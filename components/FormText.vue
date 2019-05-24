<template>
  <v-text-field
    v-editable="blok"
    :autofocus="blok.auto_focus"
    :box="blok.box"
    :clear-icon="blok.clear_icon ? 'mdi-' + blok.clear_icon : false"
    :clearable="blok.clearable"
    :color="blok.color"
    :flat="blok.flat"
    :label="blok.label"
    :mask="blok.mask"
    :name="blok.name"
    :outline="blok.outline"
    :prepend-icon="blok.prepend_icon ? 'mdi-' + blok.prepend_icon : false"
    :prepend-inner-icon="blok.inner_icon ? 'mdi-' + blok.inner_icon : false"
    :required="blok.required"
    :class="blok.helpers"
    :style="blok.style"
  ></v-text-field>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
