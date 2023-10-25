<template>
  <div class="paralax">
    <Header :headerBg="dataState.imageBg[6]" :iconImg="dataState.icons[3]" />
    <Info />
    <ImageBlock :imageBg="dataState.imageBg[1]" />
    <Galary :galaryList="dataState.imageGalary" :galaryBg="dataState.imageBg[3]" />
    <Cards :cards="dataState.articles" :title="dataState.titles[0]" />
    <ImageBlock :imageBg="dataState.imageBg[4]" />
    <Cards :cards="dataState.cardsList" :title="dataState.titles[1]" />
    <ContactUs :contactUsBg="dataState.imageBg[5]" />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/layouts/Header.vue";
import Info from "@/components/layouts/Info.vue";
import { useDataStore } from "@/store/store";
import { onMounted, reactive } from "vue";
// import path from 'path'

import Cards from "@/components/layouts/Cards.vue";
import ContactUs from "@/components/layouts/ContactUs.vue";
import Footer from "@/components/layouts/Footer.vue";
import Galary from "@/components/layouts/Galary.vue";
import ImageBlock from "@/components/layouts/ImageBlock.vue";

const dataState = reactive({
  titles: [],
  cardsList: [],
  articles: [],
  imageGalary: [],
  imageBg: [],
  icons: [],
});
const dataStore = useDataStore();

const titles = [
  {
    id: 1,
    name: "Articles",
  },
  {
    id: 2,
    name: "Reviews of journey",
  },
];
const imageCards = [
  {
    id: 1,
    name: "Ralph _Edwards",
    link: "src/assets/images/Cards/Ralph _Edwards.jpg",
  },
  {
    id: 2,
    name: "Leslie_Alexander",
    link: "src/assets/images/Cards/Leslie_Alexander.jpg",
  },
  {
    id: 3,
    name: "Cameron_Williamson",
    link: "src/assets/images/Cards/Cameron_Williamson.jpg",
  },
];
const imageGalary = [
  {
    id: 1,
    name: "sea-2",
    link: "src/assets/images/bg/sea-2.jpg",
  },
  {
    id: 2,
    name: "sea-1",
    link: "src/assets/images/bg/sea-1.jpg",
  },
  {
    id: 3,
    name: "beach-1",
    link: "src/assets/images/bg/beach-1.jpg",
  },
];
const imageBg = [
  {
    id: 1,
    name: "image_3",
    link: "src/assets/images/bg/image_3.jpg",
  },
  {
    id: 2,
    name: "image-5",
    link: "src/assets/images/bg/image-5.jpg",
  },
  {
    id: 3,
    name: "info-image",
    link: "src/assets/images/bg/info-image.png",
  },

  {
    id: 4,
    name: "galary-bg",
    link: "src/assets/images/bg/island2.jpg",
  },

  {
    id: 5,
    name: "beach-2",
    link: "src/assets/images/bg/beach-2.jpg",
  },
  {
    id: 6,
    name: "beach-3",
    link: "src/assets/images/bg/beach-3.jpg",
  },
];

onMounted(async () => {
  dataState.imageBg = await dataStore.getImagBgASync();
  dataState.titles = await dataStore.getTitleASync();
  dataState.cardsList = await dataStore.getCardASync();
  dataState.imageGalary = await dataStore.getImageGalaryASync();
  dataState.articles = await dataStore.getArticlesASync();
  dataState.icons = await dataStore.getIconsASync();
  console.log("getImagBgASync", dataState.imageBg);
  console.log("getTitleASync", dataState.titles);
  console.log("getCardASync", dataState.imageCards);
  console.log("getImageGalaryASync", dataState.imageGalary);

  console.log("Icons", dataState.icons);
});
</script>

<style lang="scss" scoped></style>
