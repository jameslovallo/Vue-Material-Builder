<template>
  <div class="tile-wrapper" v-editable="blok" :class="blok.helpers" :style="blok.style">
    <component
      :key="blok._uid"
      v-for="blok in blok.image_1"
      :blok="blok"
      :is="blok.component | dashify"
      class="tile"
    ></component>
    <component
      :key="blok._uid"
      v-for="blok in blok.image_2"
      :blok="blok"
      :is="blok.component | dashify"
      class="tile"
    ></component>
    <component
      :key="blok._uid"
      v-for="blok in blok.image_3"
      :blok="blok"
      :is="blok.component | dashify"
      class="tile"
    ></component>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style scoped>
.tile-wrapper {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 60vh;
}
.tile {
  flex: 1 0;
  height: 100%;
  box-shadow: none rgba(0, 0, 0, 0.5);
  transition: ease-in-out 0.3s;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.tile:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
}
@media only screen and (max-width: 600px) {
  .tile-wrapper {
    height: auto;
    width: 100%;
  }
  .tile {
    min-width: 100%;
    height: 50vh;
  }
  .tile:hover {
    transform: none;
    box-shadow: none;
  }
}
</style>

<style>
.tile .v-responsive__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5%;
}
</style>
