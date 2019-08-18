<template>
  <v-stepper v-model="currentStep" vertical v-editable="blok">
    <component
      :key="blok._uid"
      v-for="blok in blok.content"
      :blok="blok"
      :is="blok.component | dashify"
    ></component>
    <div class="pa-3">
      <v-btn
        :color="blok.color | lightOrDark(this.$vuetify.theme.dark)"
        :outlined="blok.outline"
        :rounded="blok.round"
        :dark="blok.dark"
        @click="currentStep = currentStep + 1"
        v-if="currentStep < blok.steps"
      >Continue</v-btn>
      <template v-if="currentStep == blok.steps">
        <component
          :key="blok._uid"
          v-for="blok in blok.action"
          :blok="blok"
          :is="blok.component | dashify"
        ></component>
      </template>
      <v-btn
        :color="blok.color | lightOrDark(this.$vuetify.theme.dark)"
        :outlined="blok.outline"
        :rounded="blok.round"
        :dark="blok.dark"
        text
        @click="currentStep = currentStep - 1"
        v-if="currentStep > 1"
      >Back</v-btn>
    </div>
  </v-stepper>
</template>

<script>
export default {
  props: ["blok"],
  data() {
    return {
      currentStep: 1
    };
  }
};
</script>

<style>
.v-stepper--vertical {
  padding-bottom: 0;
}
</style>
