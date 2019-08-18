<template>
  <v-text-field
    v-editable="blok"
    v-model="phone"
    :rules="phoneRules"
    :autofocus="blok.auto_focus"
    :filled="blok.box"
    :clear-icon="blok.clear_icon ? 'mdi-' + blok.clear_icon : ''"
    :clearable="blok.clearable"
    :color="blok.color | lightOrDark(this.$vuetify.theme.dark)"
    :flat="blok.flat"
    :label="blok.label"
    :name="blok.label"
    :outlined="blok.outline"
    :prepend-icon="blok.prepend_icon ? 'mdi-' + blok.prepend_icon : ''"
    :prepend-inner-icon="blok.inner_icon ? 'mdi-' + blok.inner_icon : ''"
    :required="blok.required"
    :class="blok.helpers"
    :style="blok.style"
    mask="phone"
  ></v-text-field>
</template>

<script>
import axios from "axios";

export default {
  props: ["blok"],
  data: () => ({
    phone: "",
    phoneRules: [
      v => !!v || "Phone number is required",
      v =>
        (v && v.length === 10) || "Phone number must be exactly 10 digits long"
    ]
  })
};
</script>
