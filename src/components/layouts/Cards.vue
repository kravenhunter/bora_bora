<template>
  <div class="articles">
    <div class="articles-title">
      <h1>{{ title.name }}</h1>
      <hr />
    </div>
    <div class="articles-list">
      <Card v-for="(el, i) in cards" :key="i" :card="el" />
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/Card.vue";
const porps = defineProps({
  cards: {
    type: Array,
    default: [],
  },
  title: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
.articles {
  background: #edeaea;
  color: #000000;
  display: grid;
  gap: 38px;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(14, 1fr);
}
.articles .articles-title {
  grid-row: 2 / span 1;
  grid-column: 1 / span 14;
  justify-self: center;
}
.articles .articles-title h1 {
  font-family: montserrat_var, sans-serif;
  font-size: 40px;
  line-height: 10px;
  font-weight: 600;
  text-transform: uppercase;
}
.articles .articles-title hr {
  border: 2px solid;
}
.articles .articles-list {
  grid-row: 3 / span 7;
  grid-column: 2 / span 12;

  display: flex;
  column-gap: 110px;
  justify-content: space-between;
}
</style>
