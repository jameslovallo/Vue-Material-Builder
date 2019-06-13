<template>
  <v-img
    v-editable="blok"
    :alt="blok.alt"
    :aspect-ratio="blok.aspectratio"
    :contain="blok.contain"
    :gradient="blok.gradient"
    :height="blok.height"
    :lazy-src="blok.src ? optimizedImage : randomImage"
    :max-height="blok.maxheight"
    :max-width="blok.maxwidth"
    :min-height="blok.minheight"
    :min-width="blok.minwidth"
    :position="blok.hor + '% ' + blok.ver + '%'"
    :src="blok.src ? optimizedImage : randomImage"
    :width="blok.width"
    :class="blok.helpers"
    :style="blok.style"
  >
    <component
      :key="blok._uid"
      v-for="blok in blok.image_content"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
  </v-img>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    randomImage() {
      var randomHeight = Math.random() * (800 - 400) + 400;
      return `https://source.unsplash.com/random/${
        this.blok.width ? this.blok.width : 600
      }x${this.blok.height ? this.blok.height : randomHeight}?${
        this.blok.placeholder_image_search_term
      }`;
    },
    optimizedImage() {
      if (
        this.blok.src.includes("a.storyblok.com") &&
        (this.blok.src.includes("jpeg") ||
          this.blok.src.includes("jpg") ||
          (this.blok.src.includes("png") &&
            this.blok.do_not_use_image_service == false))
      ) {
        let imageService = "//img2.storyblok.com/";
        let path = this.blok.src.replace("//a.storyblok.com", "");
        let options = `${this.blok.optiwidth}x${
          this.blok.height ? this.blok.height : 0
        }${this.blok.smart_crop ? "/smart" : ""}`;
        return imageService + options + path;
      } else {
        return this.blok.src;
      }
    }
  }
};
</script>
