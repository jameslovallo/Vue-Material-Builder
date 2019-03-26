<template>
  <v-sparkline :value="value" auto-draw></v-sparkline>
</template>

<script>
export default {
  data: () => ({
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
  })
};
</script>
