<template>
  <div :id="blok.id" class="anchor-target" v-scroll="onScroll"></div>
</template>

<script>
export default {
  props: ["blok"],
  methods: {
    onScroll() {
      if (process.client) {
        var el = document.getElementById(this.blok.id);
        var top = el.getBoundingClientRect().top;
        if (top >= -75 && top <= 75) {
          this.$router.push("/#" + this.blok.id);
        }
        var toolbar = document.querySelector(".v-toolbar__content");
        var selected = document.activeElement;
        if (selected.parentNode == toolbar) selected.blur();
      }
    }
  }
};
</script>

<style lang="scss">
.anchor-target {
  position: relative;
  top: -60px;
  pointer-events: none;
  @media (max-width: 959px) {
    top: -56px;
  }
}
</style>
