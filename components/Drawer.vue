<template>
  <div v-editable="blok">
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant">
      <v-list>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
