<template>
  <div
    v-editable="blok"
    v-html="$md.render(blok.md)"
    :style="blok.style"
    :class="['markdown', blok.disable_responsive_copy ? 'not-responsive' : '', blok.helpers]"
  ></div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.markdown *:first-child,
.markdown blockquote * {
  margin-top: 0;
}

.markdown *:last-child,
.markdown blockquote * {
  margin-bottom: 0;
}

.markdown * {
  max-width: 100%;
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

h1 {
  font-size: responsive 60px 96px;
  letter-spacing: -1.5;
}

h2 {
  font-size: responsive 48px 60px;
  letter-spacing: -0.5;
}

h3 {
  font-size: responsive 34px 48px;
  letter-spacing: 0;
}

h4 {
  font-size: responsive 24px 34px;
  font-weight: 500;
  letter-spacing: 0.25;
}

h5 {
  font-size: responsive 20px 24px;
  font-weight: 500;
  letter-spacing: 0;
}

h6 {
  font-size: responsive 18px 20px;
  font-weight: 500;
  letter-spacing: 0.15;
}

p,
ol,
ul {
  line-height: 1.5em;
  margin-bottom: 1em;
}

.markdown:not(.not-responsive) p,
.markdown:not(.not-responsive) ol,
.markdown:not(.not-responsive) ul {
  font-size: responsive 16px 20px;
}

a {
  color: var(--v-primary-base);
  font-weight: 500;
}

.markdown a {
  font-weight: 500;
  text-decoration: none;
  position: relative;
  z-index: 1;
  display: inline-block;
}

.markdown a:after {
  content: "";
  position: absolute;
  bottom: 15%;
  left: 0;
  right: 0;
  height: 6%;
  background: var(--v-primary-base);
  z-index: -1;
}

.markdown a:hover:after {
  height: 100%;
  transition: 0.5s;
  background: linear-gradient(
    to top,
    var(--v-primary-base) 0%,
    var(--v-primary-base) 6%,
    transparent 7%,
    transparent 100%
  );
}

em {
  font-style: italic;
}

strong {
  font-weight: 500;
  color: var(--v-primary-base);
}

blockquote {
  border-left: 5px solid var(--v-primary-base);
  padding: 0px 10px 0px 15px;
  margin: 1em 0;
  font-style: italic;
  font-size: 1.5em;
}

code {
  border-radius: 0;
}

code:before,
code:after {
  display: none;
}
</style>
