<template>
  <section
    id="slider"
    v-editable="blok"
    :style="'padding-top: calc(' + blok.aspect_ratio/2 + '% + 10px);' + 'padding-bottom: calc(' + blok.aspect_ratio/2 + '% + 10px);'"
    :class="[blok.indicators, blok.helpers]"
  >
    <input type="radio" name="slider" id="s1" checked>
    <input type="radio" name="slider" id="s2">
    <input type="radio" name="slider" id="s3">
    <input type="radio" name="slider" id="s4">
    <input type="radio" name="slider" id="s5">
    <label for="s1" id="slide1">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_1"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
      <a v-if="blok.slide_1_link" :href="blok.slide_1_link" :target="blok.slide_1_target"></a>
    </label>
    <label for="s2" id="slide2">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_2"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
      <a v-if="blok.slide_2_link" :href="blok.slide_2_link" :target="blok.slide_2_target"></a>
    </label>
    <label for="s3" id="slide3">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_3"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
      <a v-if="blok.slide_3_link" :href="blok.slide_3_link" :target="blok.slide_3_target"></a>
    </label>
    <label for="s4" id="slide4">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_4"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
      <a v-if="blok.slide_4_link" :href="blok.slide_4_link" :target="blok.slide_4_target"></a>
    </label>
    <label for="s5" id="slide5">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_5"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
      <a v-if="blok.slide_5_link" :href="blok.slide_5_link" :target="blok.slide_5_target"></a>
    </label>
  </section>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style scoped>
[type="radio"] {
  visibility: hidden;
}

#slider {
  width: 100%;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

#slider label {
  margin: auto;
  width: 60%;
  height: auto;
  border-radius: 4px;
  position: absolute;
  left: 0;
  right: 0;
  cursor: pointer;
  transition: transform 0.33s ease-out;
  background: dimgray;
  border-radius: 10px;
  overflow: hidden;
}

a {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}

#s1:checked ~ #slide4,
#s2:checked ~ #slide5,
#s3:checked ~ #slide1,
#s4:checked ~ #slide2,
#s5:checked ~ #slide3 {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  transform: translate3d(-66%, 0, -400px);
}

#s1:checked ~ #slide5,
#s2:checked ~ #slide1,
#s3:checked ~ #slide2,
#s4:checked ~ #slide3,
#s5:checked ~ #slide4 {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  transform: translate3d(-33%, 0, -200px);
  z-index: 2;
}

#s1:checked ~ #slide1,
#s2:checked ~ #slide2,
#s3:checked ~ #slide3,
#s4:checked ~ #slide4,
#s5:checked ~ #slide5 {
  box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19);
  transform: translate3d(0, 0, 0);
  z-index: 3;
}

#s1:checked ~ #slide2,
#s2:checked ~ #slide3,
#s3:checked ~ #slide4,
#s4:checked ~ #slide5,
#s5:checked ~ #slide1 {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  transform: translate3d(33%, 0, -200px);
  z-index: 2;
}

#s1:checked ~ #slide3,
#s2:checked ~ #slide4,
#s3:checked ~ #slide5,
#s4:checked ~ #slide1,
#s5:checked ~ #slide2 {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  transform: translate3d(66%, 0, -400px);
}

#s1:checked ~ #slide1 a,
#s2:checked ~ #slide2 a,
#s3:checked ~ #slide3 a,
#s4:checked ~ #slide4 a,
#s5:checked ~ #slide5 a {
  pointer-events: all;
}

[type="radio"]:before {
  content: "";
  visibility: visible;
  display: block;
  height: 20px;
  width: 20px;
  position: absolute;
  bottom: 0;
  border-radius: 10px;
  border: 2px solid #aaa;
  z-index: 1;
  cursor: pointer;
}

[type="radio"]:nth-child(1):before {
  left: calc(50% - 90px);
}
[type="radio"]:nth-child(2):before {
  left: calc(50% - 50px);
}
[type="radio"]:nth-child(3):before {
  left: calc(50% - 10px);
}
[type="radio"]:nth-child(4):before {
  left: calc(50% + 30px);
}
[type="radio"]:nth-child(5):before {
  left: calc(50% + 70px);
}

[type="radio"]:checked:before {
  border: 3px solid #2196f3;
  transition: 0.33s;
}

.hide-indicators [type="radio"]:before {
  display: none;
}
</style>
