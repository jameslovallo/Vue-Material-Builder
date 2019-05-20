<template>
  <div v-editable="blok" class="highlight-wrapper">
    <div class="code-title" v-if="blok.title != false">
      {{blok.title}}
      <span class="lang">
        <i v-if="blok.language == 'js'" class="mdi mdi-language-javascript" style="color: yellow;"></i>
        <i
          v-if="blok.language == 'html' && blok.show_html_as_vue == false"
          class="mdi mdi-language-html5"
          style="color: #F47A31;"
        ></i>
        <i
          v-if="blok.language == 'html' && blok.show_html_as_vue == true"
          class="mdi mdi-vuejs"
          style="color: #3FB984;"
        ></i>
        <i v-if="blok.language == 'css'" class="mdi mdi-language-css3" style="color: #1890CF"></i>
        <i v-if="blok.language == 'json'" class="mdi mdi-json" style="color: limegreen"></i>
        <i v-if="blok.language == 'md'" class="mdi mdi-markdown" style="color: #3498DB"></i>
      </span>
      <small class="description" v-if="blok.description != false">{{blok.description}}</small>
    </div>
    <highlight :language="blok.language" :style="blok.style" :class="blok.helpers">{{ blok.code }}</highlight>
  </div>
</template>

<script>
import hljs from "highlight.js";
import Highlight from "vue-highlight-component";

export default {
  props: ["blok"],
  components: {
    Highlight
  }
};
</script>

<style src="highlight.js/styles/atom-one-dark.css"></style>
<style scoped>
code {
  padding: 1em;
  padding-bottom: 1.25em;
  line-height: 1.33em;
  font-family: Roboto Mono;
}
.highlight-wrapper {
  position: relative;
  filter: saturate(1.25);
}
.lang {
  float: right;
}
.code-title {
  color: #abb2bf;
  padding: 12px;
  background: #282c34;
  border-bottom: 1px solid #555;
  font-weight: bold;
}
small {
  display: block;
  font-weight: normal;
}
</style>

<style>
.hljs-doctag,
.hljs-keyword,
.hljs-formula,
.hljs-built_in {
  font-style: italic;
}
.css .hljs-built_in {
  color: #56b6c2;
}
</style>
