<template>
  <div class="pie-chart" data-aos data-aos-once="true">
    <div class="graph-wrapper">
      <svg width="100%" height="100%" viewBox="0 0 42 42" fill="transparent">
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          stroke="#333"
          stroke-width=".75"
          style="opacity: 1"
        />
        <circle
          cx="21"
          cy="21"
          r="15.91549430918954"
          :stroke="this.$vuetify.theme.themes.light.primary"
          stroke-width=".75"
          style="opacity: 0.3"
        />
        <circle
          :style="dashArray"
          cx="21"
          cy="21"
          r="15.91549430918954"
          :stroke="this.$vuetify.theme.themes.light.primary"
          stroke-width="2"
          stroke-dashoffset="25"
          class="swoosh-in"
        />
      </svg>
      <div class="graph-caption">
        <div class="graph-text">
          <h4>{{ blok.title }}</h4>
          <span>{{ blok.value }}% {{ blok.caption }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PieChart",
  // props: {
  //   title: String,
  //   caption: String,
  //   value: Number
  // },
  props: ["blok"],
  computed: {
    dashArray() {
      return `stroke-dasharray: ${this.blok.value} ${100 - this.blok.value}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.graph {
  &-wrapper {
    position: relative;
  }

  &-caption {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    text-align: center;
    top: 20%;
    right: 20%;
    bottom: 20%;
    left: 20%;
    border-radius: 50%;
  }
}

.aos-animate .swoosh-in {
  animation: swooshIn 1s;
}

@keyframes swooshIn {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>
