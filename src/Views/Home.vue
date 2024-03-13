<script setup>
import Header from "@/components/layouts/Header.vue";
import Info from "@/components/layouts/Info.vue";
import { useDataStore } from "@/store/store";
import { onMounted, reactive } from "vue";

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
});
</script>

<template>
  <div class="paralax" id="smooth-wrapper">
    <section class="section">
      <Header class="fixed" :headerBg="dataState.imageBg[6]" :iconImg="dataState.icons[3]" />
    </section>
    <section class="section" id="ABOUT">
      <Info class="fixed" />
    </section>
    <section class="section">
      <ImageBlock class="fixed" :imageBg="dataState.imageBg[1]" />
    </section>
    <section class="section" id="TOURIZM">
      <Galary class="fixed" :galaryList="dataState.imageGalary" :galaryBg="dataState.imageBg[3]" />
    </section>
    <section class="section" id="NEWS">
      <Cards class="fixed" :cards="dataState.articles" :title="dataState.titles[0]" />
    </section>
    <section class="section">
      <ImageBlock class="fixed" :imageBg="dataState.imageBg[4]" />
    </section>
    <section class="section" id="REVIEWS">
      <Cards class="fixed" :cards="dataState.cardsList" :title="dataState.titles[1]" />
    </section>
    <section class="section">
      <ContactUs class="fixed" :contactUsBg="dataState.imageBg[5]" />
    </section>

    <section class="section">
      <Footer class="fixed" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.paralax {
  & .section {
    position: absolute;
    width: 100%;
    height: 100vh;

    overflow: hidden;
    clip: rect(0, auto, auto, 0);
    & .fixed {
      width: min(100%, 1920px);
      margin-inline: auto;
      overflow: hidden;
      position: fixed;
      inset: 0;
    }
  }

  @for $i from 1 through 10 {
    .section:nth-child(#{$i}) {
      box-shadow: inset 0 1px 80px rgba(0, 0, 0, 0.14);

      color: #fff;
      top: (100vh * ($i - 1));
      z-index: ($i);
    }
  }
}
</style>
