<template>
  <div>
    <component
      :key="blok._uid"
      v-for="blok in $store.state.settings.navigation"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
if (process.client) {
  document.addEventListener("DOMContentLoaded", function() {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  window.addEventListener("resize", evt => {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}
</script>

<style>
/* Document-Level */
html {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Shape Separators */
.bottom-curve {
  -webkit-clip-path: ellipse(100% 60% at 50% 40%);
  clip-path: ellipse(100% 60% at 50% 40%);
}

.bottom-arrow {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);
}

.bottom-arrow-left {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 25% 100%, 0 80%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 25% 100%, 0 80%);
}

.bottom-arrow-right {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 75% 100%, 0 80%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 75% 100%, 0 80%);
}

.bottom-lean-left {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
}

.bottom-lean-right {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
}

.slope-clockwise {
  -webkit-clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 92%);
  clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 92%);
}

.slope-counter-clockwise {
  -webkit-clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);
  clip-path: polygon(0 8%, 100% 0, 100% 92%, 0 100%);
}
</style>
