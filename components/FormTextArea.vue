<template>
  <v-textarea
    v-editable="blok"
    :autofocus="blok.auto_focus"
    :box="blok.box"
    :clear-icon="blok.clear_icon.icon"
    :clearable="blok.clearable"
    :color="blok.color"
    :flat="blok.flat"
    :label="blok.label"
    :name="blok.name"
    :outline="blok.outline"
    :prepend-icon="blok.prepend_icon.icon"
    :prepend-inner-icon="blok.inner_icon.icon"
    :required="blok.required"
    :class="blok.helpers"
    :style="blok.style"
    no-resize
    auto-grow
  ></v-textarea>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
