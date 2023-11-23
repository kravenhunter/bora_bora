<template>
  <div class="galary">
    <!--   <ImageBlock class="galary-bg" :imageBg="galaryBg" /> -->
    <div class="galary__title">
      <h1>GALARY</h1>
      <hr />
    </div>
    <div class="galary__list">
      <div class="galary__list-image" v-for="(element, i) in galaryList" :key="i">
        <ImageBlock :imageBg="element" />
      </div>
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
  background: url(/images/bg/island2.webp);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;

  &__title {
    font-family: "Montserrat SemiBold";
    font-size: 24px;
    & hr {
      height: 2px;
    }
  }
  &__list {
    display: flex;
    column-gap: 50px;
  }
}
</style>
