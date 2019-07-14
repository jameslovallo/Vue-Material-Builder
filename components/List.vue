<template>
  <v-list
    v-editable="blok"
    :dark="blok.dark"
    :dense="blok.dense"
    :expand="blok.expand"
    :subheader="blok.subheader"
    :three-line="blok.threeline"
    :two-line="blok.twoline"
    :class="[blok.helpers, blok.grid_list ? 'grid-list' : '']"
    :style="blok.style + gridStyles"
    data-aos
    data-aos-once="true"
  >
    <component
      :key="blok._uid"
      v-for="(blok, n) in blok.listcontent"
      :blok="blok"
      :is="blok.component | dashify"
      :style="`--animation-order: ${n};`"
    ></component>
    {{blok.text}}
  </v-list>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    gridStyles() {
      return `grid-template-columns: repeat(auto-fit, minmax(${this.blok.grid_column_width}px, 1fr)); gap: ${this.blok.grid_gap} ${this.blok.grid_gap};`;
    }
  }
};
</script>

// TODO: Allow dynamic animation setting
<style scoped>
.grid-list {
  display: grid;
  width: 100%;
}

.aos-animate * {
  animation-name: animateIn;
  animation-duration: 300ms;
  animation-delay: calc(var(--animation-order) * 200ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

@keyframes animateIn {
  0% {
    opacity: 0;
    transform: scale(0.6) translateY(-8px);
  }

  100% {
    opacity: 1;
  }
}
</style>
