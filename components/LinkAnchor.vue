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
        if (top >= -200 && top <= 200) {
          // this.$router.push("/#" + this.blok.id);
          if (history.pushState) {
            history.pushState(null, null, "/#" + this.blok.id);
          } else {
            location.hash = "/#" + this.blok.id;
          }
        }
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
