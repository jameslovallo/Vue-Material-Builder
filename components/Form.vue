<template>
  <div v-editable="blok">
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-text-field
        label="Name"
        name="name"
        v-model="name"
        :rules="nameRules"
        :counter="30"
        required
      ></v-text-field>
      <v-text-field label="E-mail" name="email" v-model="email" :rules="emailRules" required></v-text-field>
      <v-text-field v-model="phone" :rules="phoneRules" required label="Phone number" mask="phone" color="blue"></v-text-field>
      <v-textarea label="Your Message" name="message" textarea></v-textarea>
      <v-btn @click="submit" :disabled="!valid" color="blue" dark>submit</v-btn>
      <v-btn @click="clear" flat color="red">clear</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["blok"],
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 30) || "Name must be less than 30 characters"
    ],
    phone: "",
    phoneRules: [
      v => !!v || "Phone number is required",
      v => (v && v.length === 10) || "Phone number must be exactly 10 digits long"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid"
    ]
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post("/api/submit", {
          name: this.name,
          email: this.email
        });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
