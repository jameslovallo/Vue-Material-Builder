<template>
  <nuxt-link :to="blok.to">
      <component
        :key="blok._uid"
        v-for="blok in blok.content"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
  </nuxt-link>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
