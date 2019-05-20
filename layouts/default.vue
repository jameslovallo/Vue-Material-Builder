<template>
  <v-app class="body">
    <div v-if="!$store.state.settings.navigation" v-editable="$store.state.settings"></div>
    <component
      :key="blok._uid"
      v-for="blok in $store.state.settings.navigation"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
    <nuxt/>
  </v-app>
</template>

<script>
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

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 110%;
  margin: 0.25em 0;
  font-weight: 400;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  font-weight: inherit;
}

h1 {
  font-size: 96px;
  letter-spacing: -1.5;
}

h2 {
  font-size: 60px;
  letter-spacing: -0.5;
}

h3 {
  font-size: 48px;
  letter-spacing: 0;
}

h4 {
  font-size: 34px;
  font-weight: 500;
  letter-spacing: 0.25;
}

h5 {
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0;
}

h6 {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15;
}

em {
  font-style: italic;
}

strong {
  font-weight: 500;
}

ol,
ul {
  line-height: 1.5em;
  margin-bottom: 1em;
}

p,
ol,
ul {
  font-size: 14px;
}

@media (min-width: 400px) and (max-width: 800px) {
  p,
  ol,
  ul {
    font-size: calc((14px + 18 - 14) * ((100vw - 400px) / 2));
  }
}

@media (min-width: 800px) {
  p,
  ol,
  ul {
    font-size: 18px;
  }
}

blockquote {
  background: rgba(125, 125, 125, 0.1);
  border-left: 5px solid rgba(125, 125, 125, 0.15);
  border-radius: 5px;
  padding: 10px 10px 10px 15px;
}

code {
  border-radius: 0;
}

code:before,
code:after {
  display: none;
}

.fa-phone {
  transform: scaleX(-1);
}
</style>
