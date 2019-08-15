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
  const dynamicHeight = () => {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  document.addEventListener("DOMContentLoaded", evt => {
    dynamicHeight();
  });

  window.addEventListener("resize", evt => {
    dynamicHeight();
  });
}
</script>
