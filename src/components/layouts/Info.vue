<template>
  <div class="info">
    <div class="about">
      <div class="about-title">
        <div class="title-wrapper">
          <h1 class="title-one">ABOUT</h1>
          <hr />
          <h1 class="title-two">ISLAND</h1>
        </div>
      </div>

      <div class="about-description">
        <p>
          Lörem ipsum minöv eusat Anette Jonsson logotion syr, nening sprejgodis. Antisöska viling, att sanyl i nyras. Ogt blorange odavis. Her fåbamån. Sejinade lakronera tripatologi i päfumåheten i trebelt. Du kan vara
          drabbad. Lörem ipsum minöv eusat Anette Jonsson logotion syr, nening sprejgodis. Antisöska viling, att sanyl i nyras. Ogt blorange odavis. Her fåbamån. Sejinade lakronera tripatologi i päfumåheten i trebelt. Du
          kan vara drabbad. Lörem ipsum minöv eusat Anette Jonsson logotion syr, logotion syr, vara drabbad. Lörem ipsum minöv eusat Anette Jonsson logotion syr, logotion syr,
        </p>
      </div>
    </div>
    <div class="about-galary">
      <div class="about-galary-pagination">
        <AddPagination />
      </div>

      <div class="about-galary-list">
        <img class="about-galary-img" src="/images/bg/info-image.webp" alt="info" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AddPagination from "@/components/ui_elements/AddPagination.vue";
</script>

<style lang="scss" scoped>
.info {
  padding: 140px 105px;
  background: #edeaea no-repeat;
  color: #000000;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.info * {
  margin: 0;
  padding: 0;
}
.info .about {
  font-size: 21px;
  line-height: 1.55;
  font-weight: 400;
  max-width: 60%;
  justify-self: center;
}

.about-title {
  display: grid;
  justify-content: center;
  align-items: center;
}
.title-wrapper {
  display: grid;
  width: calc(var(--indexSize) * 7);
}
.title-wrapper hr {
  border: 2px solid;
}
.title-wrapper * {
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);
}
.title-wrapper .title-one {
  justify-self: start;
}
.title-wrapper .title-two {
  justify-self: end;
}
.about .about-description {
  margin-top: 20px;
}
.about-galary {
  max-width: 700px;
  max-height: 644px;
  display: grid;
  justify-content: center;
}
.about-galary .about-galary-pagination {
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
}
</style>
