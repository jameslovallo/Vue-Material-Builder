<template>
  <v-content>
    <nuxt/>
  </v-content>
</template>

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
  background: #f2f2f2;
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
  font-weight: 400;
  line-height: 110%;
  margin: 0.25em 0;
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
  font-size: 4.2rem;
}

h2 {
  font-size: 3.56rem;
}

h3 {
  font-size: 2.92rem;
}

h4 {
  font-size: 2.28rem;
}

h5 {
  font-size: 1.64rem;
}

h6 {
  font-size: 1.15rem;
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
  border: 1px dashed rgba(127, 127, 127, 0.5);
  border-left: 5px solid rgba(127, 127, 127, 0.5);
  border-radius: 5px;
  padding: 10px;
}

.fa-phone {
  transform: scaleX(-1);
}
</style>
