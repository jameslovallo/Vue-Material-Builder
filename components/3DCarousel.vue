<template>
  <carousel-3d
    v-editable="blok"
    :autoplay="blok.autoplay"
    :controlsVisible="blok.show_controls"
    :autoplayTimeout="Number(blok.autoplay_speed)"
    :autoplayHoverPause="blok.pause_on_hover"
    :perspective="$vuetify.breakpoint.smAndDown ? blok.perspective : blok.mobile_perspective"
    :display="$vuetify.breakpoint.smAndDown ? blok.mobile_active_slides : blok.active_slides"
    :animationSpeed="blok.transition_speed"
    :width="$vuetify.breakpoint.smAndDown ? blok.mobile_width : blok.width"
    :height="$vuetify.breakpoint.smAndDown ? blok.mobile_height : blok.height"
    :border="blok.border_width"
    :space="$vuetify.breakpoint.smAndDown ? blok.mobile_space_between_slides : blok.space_between_slides"
    :clickable="blok.clickable"
    :minSwipeDistance="Number(blok.swipe_sensitivity_in_pixels)"
    :class="blok.helpers"
  >
    <slide v-if="blok.slide_1 != false" :index="0">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_1"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </slide>
    <slide v-if="blok.slide_2 != false" :index="1">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_2"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </slide>
    <slide v-if="blok.slide_3 != false" :index="2">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_3"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </slide>
    <slide v-if="blok.slide_4 != false" :index="3">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_4"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </slide>
    <slide v-if="blok.slide_5 != false" :index="4">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_5"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </slide>
    <slide v-if="blok.slide_6 != false" :index="5">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_6"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </slide>
    <slide v-if="blok.slide_7 != false" :index="6">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_7"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </slide>
    <slide v-if="blok.slide_8 != false" :index="7">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_8"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </slide>
    <slide v-if="blok.slide_9 != false" :index="8">
      <component
        :key="blok._uid"
        v-for="blok in blok.slide_9"
        :blok="blok"
        :is="blok.component | dashify"
      ></component>
    </slide>
  </carousel-3d>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style lang="scss">
.carousel-3d {
  &-container {
    overflow: visible !important;
  }
  &-slide {
    border-radius: 10px !important;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.8), 0px 12px 24px rgba(0, 0, 0, 0.4);
  }
}
</style>
