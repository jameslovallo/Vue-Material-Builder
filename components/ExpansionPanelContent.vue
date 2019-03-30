<template>
  <v-expansion-panel-content
    :disabled="blok.disabled"
    :hide-actions="blok.hide_actions"
    :lazy="blok.lazy"
    :readonly="blok.read_only"
    :ripple="blok.ripple"
    :value="blok.expand_by_default"
    :class="blok.helpers"
    :style="blok.style"
  >
    <template v-slot:header>
      <div>{{blok.title}}</div>
    </template>
    <component
      :key="blok._uid"
      v-for="blok in blok.content"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-expansion-panel-content>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
