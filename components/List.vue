<template>
  <v-list
    v-editable="blok"
    :dark="blok.dark"
    :dense="blok.dense"
    :expand="blok.expand"
    :subheader="blok.subheader"
    :three-line="blok.threeline"
    :two-line="blok.twoline"
    :class="blok.helpers"
    :style="blok.style"
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
  props: ["blok"]
};
</script>

// TODO: Allow dynamic animation setting
<style>
[role="listitem"] {
  animation-name: animateIn;
  animation-duration: 350ms;
  animation-delay: calc(var(--animation-order) * 100ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

li + li {
  margin-top: 16px;
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
