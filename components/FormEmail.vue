<template>
  <v-text-field
    v-editable="blok"
    v-model="email"
    :rules="emailRules"
    :autofocus="blok.auto_focus"
    :box="blok.box"
    :clear-icon="blok.clear_icon ? 'mdi-' + blok.clear_icon : false"
    :clearable="blok.clearable"
    :color="blok.color"
    :flat="blok.flat"
    :label="blok.label"
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
import axios from "axios";

export default {
  props: ["blok"],
  data: () => ({
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid"
    ]
  })
};
</script>
