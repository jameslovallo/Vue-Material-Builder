<template>
  <v-tooltip
    :disabled="!blok.enable_tooltip"
    :bottom="blok.tooltip_direction === 'bottom'"
    :left="blok.tooltip_direction === 'left'"
    :right="blok.tooltip_direction === 'right'"
    :top="blok.tooltip_direction === 'top'"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        v-editable="blok"
        v-on="on"
        :absolute="blok.absolute"
        :active-class="blok.active_class"
        :block="blok.block"
        :bottom="blok.vertical_position === 'bottom'"
        :class="blok.helpers"
        :color="blok.color | lightOrDark($vuetify.theme.dark)"
        :dark="blok.dark"
        :exact="blok.exact"
        :fab="blok.floating_action_button"
        :text="blok.button_style === 'flat'"
        :href="blok.href"
        :icon="!blok.text"
        :large="blok.button_size === 'large'"
        :left="blok.horizontal_position === 'left'"
        :outlined="blok.button_style === 'outline'"
        :right="blok.horizontal_position === 'right'"
        :rounded="blok.round"
        :router="blok.router"
        :small="blok.button_size === 'small'"
        :style="blok.style"
        :target="blok.target"
        :to="blok.to"
        :top="blok.vertical_position === 'top'"
        :x-large="blok.button_size === 'x-large'"
      >
        <component
          :key="blok._uid"
          v-for="blok in blok.bicon"
          :blok="blok"
          :is="blok.component | dashify"
        ></component>
        {{blok.text}}
      </v-btn>
    </template>
    <span>{{blok.tooltip_text}}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
