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
