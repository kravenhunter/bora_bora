<template>
  <article class="card">
    <ImageBlock :imageBg="card" />
    <h2>{{ card.name }}</h2>
    <p>{{ card.description }}</p>
  </article>
</template>

<script setup>
import ImageBlock from "@/components/layouts/ImageBlock.vue";
const props = defineProps({
  card: {
    type: Object,
    derault: {},
  },
});
</script>

<style lang="scss" scoped>
.card {
  max-width: 380px;
  max-height: 350px;
}

.card h2 {
  font-family: montserrat_var, sans-serif;
  font-size: 24px;
  line-height: 37px;
  font-weight: 600;
}
.card p {
  font-family: montserrat_var, sans-serif;
  font-size: 24px;
  line-height: 37px;

  font-weight: 400;
}
</style>
