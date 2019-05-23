<template>
  <v-card :color="blok.color" :dark="blok.dark" :flat="blok.flat" v-editable="blok">
    <v-img
      :alt="blok.item_image_alt_text"
      :aspect-ratio="blok.item_image_aspect_ratio"
      :contain="blok.item_image_contain"
      :position="blok.item_image_horizontal_adjustment + '% ' + blok.item_image_vertical_adjustment + '%'"
      :src="blok.item_image"
    ></v-img>
    <v-card-title class="title" style="position: relative;">
      {{blok.item_name}}
      <v-btn
        :color="blok.button_color"
        :round="blok.button_round"
        absolute
        class="mt-2 snipcart-add-item"
        href="#"
        medium
        right
        top
        :data-item-id="blok._uid"
        :data-item-name="blok.item_name"
        :data-item-price="blok.item_price"
        :data-item-description="blok.item_description"
        :data-item-image="blok.item_image"
        :data-item-url="'https://vuetiblok.netlify.com' + $route.path"
      >
        <v-icon left>mdi-cart</v-icon>
        {{'$' + blok.item_price}}
      </v-btn>
    </v-card-title>
    <v-card-text
      v-if="blok.item_description != false"
      v-html="$md.render(blok.item_description)"
      class="markdown"
    ></v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.markdown *:first-child,
.markdown blockquote * {
  margin-top: 0;
}
.markdown *:last-child,
.markdown blockquote * {
  margin-bottom: 0;
}
</style>
