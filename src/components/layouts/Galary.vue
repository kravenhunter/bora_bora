<template>
  <div class="galary">
    <ImageBlock class="galary-bg" :imageBg="galaryBg" />
    <div class="galary-title">
      <h1>GALARY</h1>
      <hr />
    </div>
    <div class="galary-list">
      <div class="galary-block">
        <div class="galary-block-image" v-for="(element, i) in galaryList" :key="i">
          <ImageBlock :imageBg="element" />
        </div>
      </div>
      <div></div>
    </div>
    <AddPagination />
  </div>
</template>

<script setup>
import ImageBlock from "@/components/layouts/ImageBlock.vue";
import AddPagination from "@/components/ui_elements/AddPagination.vue";
const props = defineProps({
  galaryList: {
    type: Array,
    default: [],
  },
  galaryBg: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
.galary {
  display: grid;

  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(14, 1fr);
}
.galary .galary-bg {
  grid-row: 1 / span 12;
  grid-column: 1 / span 14;
}
.galary .galary-title {
  font-family: "Montserrat SemiBold";
  font-size: 24px;
  grid-row: 2 / span 1;
  grid-column: 5 / span 6;
  justify-self: center;
}
.galary .galary-title h1 {
  margin: 0;
}
.galary .galary-title hr {
  height: 2px;
}
.galary .galary-list {
  grid-row: 3 / span 4;
  grid-column: 2 / span 12;
  justify-self: center;
  align-self: center;
}
.galary-block {
  display: flex;
  column-gap: 45px;
}
.galary-block .galary-block-image {
  max-width: 470px;
  max-height: 436px;
}
.galary .pagination {
  grid-row: 7 / span 1;
  grid-column: 6 / span 4;
  align-self: start;
}
</style>
