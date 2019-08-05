<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-editable="blok"
        v-model="date"
        :label="blok.label"
        prepend-icon="mdi-calendar"
        readonly
        v-on="on"
        :rules="blok.required ? [v => !!v || blok.label + ' is required'] : []"
        :name="blok.label"
      ></v-text-field>
    </template>
    <v-date-picker v-model="date" color="primary" scrollable>
      <v-btn color="primary" rounded @click="$refs.menu.save(date)">OK</v-btn>
      <v-spacer></v-spacer>
      <v-btn text color="red" rounded @click="menu = false">Cancel</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: ["blok"],
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false
    };
  }
};
</script>
