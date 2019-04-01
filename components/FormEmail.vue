<template>
  <v-text-field v-editable="blok" label="E-mail" name="email" v-model="email" :rules="emailRules" required></v-text-field>
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
  }),
}
</script>
