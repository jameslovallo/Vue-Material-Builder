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
  // Dynamic viewport height correction for mobile
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
