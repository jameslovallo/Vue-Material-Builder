<template>
  <div v-editable="blok" class="feature">{{ blok.name }}</div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>

<style>
.feature {
  font-size: 2rem;
  text-align: center;
  line-height: 3;
  background: #ebeff2;
  border-radius: 10px;
  border: 2px dashed #dfdfdf;
  flex: 1;
}
</style>

