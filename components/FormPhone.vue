<template>
  <v-text-field v-editable="blok" v-model="phone" :rules="phoneRules" required label="Phone number" mask="phone"></v-text-field>
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
