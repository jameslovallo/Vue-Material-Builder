<template>
  <v-form v-editable="blok" v-model="valid" ref="form" lazy-validation :netlify="blok.netlify">
    <component
      :key="blok._uid"
      v-for="blok in blok.content"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
    <v-btn @click="submit" :disabled="!valid">submit</v-btn>
    <v-btn @click="clear" flat color="red">clear</v-btn>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  props: ["blok"],
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
