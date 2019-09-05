<template>
  <div :id="blok.id" class="anchor-target"></div>
</template>

<script>
export default {
  props: ["blok"]
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
