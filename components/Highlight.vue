<template>
  <div v-editable="blok" class="highlight-wrapper">
    <div class="code-title" v-if="blok.title">
      {{blok.title}}
      <small class="description" v-if="blok.description">{{blok.description}}</small>
    </div>
    <highlight :language="blok.language" :style="blok.style" :class="blok.helpers">{{ blok.code }}</highlight>
    <span class="lang">
      <i v-if="blok.language == 'js'" class="fab fa-lg fa-js" style="color: #F99D36;"></i>
      <i
        v-if="blok.language == 'html' && blok.show_html_as_vue == false"
        class="fab fa-lg fa-html5"
        style="color: #F47A31;"
      ></i>
      <i
        v-if="blok.language == 'html' && blok.show_html_as_vue == true"
        class="fab fa-lg fa-vuejs"
        style="color: #3FB984;"
      ></i>
      <i v-if="blok.language == 'css'" class="fab fa-lg fa-css3-alt" style="color: #1890CF"></i>
      <span v-if="blok.language == 'json'" style="color: limegreen; font-weight: bold;">{ ; }</span>
      <i v-if="blok.language == 'md'" class="fab fa-lg fa-markdown" style="color: #3498DB"></i>
    </span>
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
}
.hljs {
  filter: saturate(1.25);
}
.highlight-wrapper {
  position: relative;
}
.lang {
  position: absolute;
  top: 10px;
  right: 10px;
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


