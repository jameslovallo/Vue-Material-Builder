<template>
  <v-text-field
    v-editable="blok"
    v-model="email"
    :rules="emailRules"
    :autofocus="blok.auto_focus"
    :filled="blok.box"
    :clear-icon="blok.clear_icon ? 'mdi-' + blok.clear_icon : ''"
    :clearable="blok.clearable"
    :color="blok.color"
    :flat="blok.flat"
    :label="blok.label"
    :name="blok.label"
    :outlined="blok.outline"
    :prepend-icon="blok.prepend_icon ? 'mdi-' + blok.prepend_icon : ''"
    :prepend-inner-icon="blok.inner_icon ? 'mdi-' + blok.inner_icon : ''"
    :required="blok.required"
    :class="blok.helpers"
    :style="blok.style"
  ></v-text-field>
</template>

<script>
import axios from "axios";

export default {
  props: ["blok"],
  data: () => ({
    email: "",
    emailRules: [
      v => !!v || "Email is required",
      v =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid"
    ]
  })
};
</script>
