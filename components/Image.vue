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
      let width = this.blok.width
        ? this.blok.width
        : Math.floor(Math.random() * (800 - 600) + 600);
      let height = this.blok.height
        ? this.blok.height
        : Math.floor(Math.random() * (800 - 400) + 300);
      let searchTerm = this.blok.placeholder_image_search_term;
      let service = searchTerm ? "loremflickr.com" : "picsum.photos";
      return `https://${service}/${width}/${height}/${searchTerm}`;
    },
    optimizedImage() {
      let img = this.blok.src;
      let valid =
        img.includes("jpeg") || img.includes("jpg") || img.includes("png");
      if (valid) {
        let imageService = "//img2.storyblok.com/";
        let path = img.replace("//a.storyblok.com", "");
        let options = `${this.blok.optiwidth}x${
          this.blok.height ? this.blok.height : 0
        }${this.blok.smart_crop ? "/smart" : ""}`;
        return imageService + options + path;
      } else {
        return img;
      }
    }
  }
};
</script>
