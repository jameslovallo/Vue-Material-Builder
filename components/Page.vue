<template>
  <div v-editable="blok" class="page">
    <component
      :key="blok._uid"
      v-for="blok in blok.layout"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
    <div :class="['page-content', blok.container]">
      <component
        :key="blok._uid"
        v-for="blok in blok.body"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>
