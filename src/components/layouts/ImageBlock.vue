<template>
  <div class="image-block">
    <img class="image-block-img" :src="imageBg.imglink" :alt="imageBg.name" />
  </div>
</template>

<script setup>
const props = defineProps({
  imageBg: {
    type: Object,

    default: {},
  },
});
</script>

<style lang="scss" scoped>
.image-block {
  &-img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>
