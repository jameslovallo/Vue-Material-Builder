<template>
  <div v-editable="blok">
    <v-card>
      <v-img :src="blok.image" :aspect-ratio="blok.aspectratio"></v-img>
      <v-card-title primary-title>
        <component
          :key="blok._uid"
          v-for="blok in blok.cardcontent"
          :blok="blok"
          :is="blok.component | dashify"
        ></component>
      </v-card-title>
      <v-card-actions>
        <component
          :key="blok._uid"
          v-for="blok in blok.cardactions"
          :blok="blok"
          :is="blok.component | dashify"
        ></component>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
