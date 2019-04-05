<template>
  <section id="slider">
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
    </label>
    <label for="s2" id="slide2">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_2"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </label>
    <label for="s3" id="slide3">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_3"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </label>
    <label for="s4" id="slide4">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_4"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </label>
    <label for="s5" id="slide5">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_5"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
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
  top: 50%;
  left: 50%;
}

#slider {
  width: 100%;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
}

#slider:before {
  content: '';
  position: relative;
  display: block;
  padding-top: 50%;
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
  transition: transform 0.3s ease-in-out;
  background: dimgray;
  border-radius: 10px;
  overflow: hidden;
}

#s1:checked ~ #slide4,
#s2:checked ~ #slide5,
#s3:checked ~ #slide1,
#s4:checked ~ #slide2,
#s5:checked ~ #slide3 {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  transform: translate3d(-45%, 0, -300px);
}

#s1:checked ~ #slide5,
#s2:checked ~ #slide1,
#s3:checked ~ #slide2,
#s4:checked ~ #slide3,
#s5:checked ~ #slide4 {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  transform: translate3d(-22%, 0, -150px);
}

#s1:checked ~ #slide1,
#s2:checked ~ #slide2,
#s3:checked ~ #slide3,
#s4:checked ~ #slide4,
#s5:checked ~ #slide5 {
  box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19);
  transform: translate3d(0, 0, 0);
}

#s1:checked ~ #slide2,
#s2:checked ~ #slide3,
#s3:checked ~ #slide4,
#s4:checked ~ #slide5,
#s5:checked ~ #slide1 {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  transform: translate3d(22%, 0, -150px);
}

#s1:checked ~ #slide3,
#s2:checked ~ #slide4,
#s3:checked ~ #slide5,
#s4:checked ~ #slide1,
#s5:checked ~ #slide2 {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  transform: translate3d(44%, 0, -300px);
}

[type="radio"]:before {
  content: '';
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
  border: 3px solid #2196F3;
  transition: .33s;
}
</style>
