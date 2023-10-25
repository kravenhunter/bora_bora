<template>
  <div class="icon">
    <img :src="icon.imglink" :alt="icon.name" />
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: Object,
    default: {},
  },
  iconSize: {
    type: String,
    default: "100%",
  },
});
</script>
