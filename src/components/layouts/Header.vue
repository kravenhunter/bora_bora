<script setup>
import Addbutton from "@/components/ui_elements/AddButton.vue";
import AddIcon from "@/components/ui_elements/AddIcon.vue";
const navigations = ["NEWS", "REVIEWS", "TOURIZM", "ABOUT"];
const props = defineProps({
  headerBg: {
    type: Object,
    default: {},
  },
  headerData: {
    type: Array,
    default: [],
  },
  iconImg: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="header">
    <div class="nav">
      <div class="logo">
        <span>BORA BORA</span>
      </div>
      <div class="navigation">
        <Addbutton v-for="(el, i) in navigations" :key="i" :label="el" :rounded="true">
          {{ el }}
        </Addbutton>
      </div>
      <div class="login">
        <Addbutton class="login-btn" :rounded="true" paddings="10px 20px">
          <AddIcon :icon="iconImg" iconSize="25px" />
          <span> Log In</span>
        </Addbutton>
      </div>
    </div>
    <div class="offer">
      <div class="dream">MAKES YOUR DREAM COME TRUE</div>
      <div class="island"><h1>BORA BORA ISLAND</h1></div>
      <div class="button">
        <Addbutton :rounded="true" :changeColor="true" colorBg="#EC954D" hoverColor="transparent" paddings="20px 55px">
          <span>View Island</span>
        </Addbutton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: url("/images/bg/pablo-azurduy-bg.webp") no-repeat;
  display: grid;

  grid-template-columns: repeat(14, 121px);
  grid-template-rows: repeat(8, 121px);
  gap: 12px;
  & .nav {
    grid-column: 1 / span 14;
    grid-row: 1 / span 1;
    display: grid;
    grid-template-columns: auto auto 200px;

    & .logo {
      grid-column: 1 / span 1;
      justify-self: end;
      align-self: center;
      font-size: calc(var(--indexSize) * 2);
    }
    & .login {
      grid-column: 3 / span 1;
      align-self: center;
      justify-self: start;
    }
    & .login a {
      display: flex;
      column-gap: 10px;
      align-items: center;
    }

    & .navigation {
      display: grid;
      grid-template-columns: repeat(4, 180px);
      column-gap: 15px;
      align-items: center;
      justify-content: center;
    }
  }

  & .offer {
    grid-column: 4 / span 7;
    grid-row: 3 / span 3;

    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding-top: 15%;
    align-items: center;

    & .dream {
      font-size: 24px;
      line-height: 24px;
      font-weight: 400;
    }
    & .island {
      font-size: 35px;
      line-height: 45.5px;
      font-weight: 600;
    }
    & .button {
      margin-top: 35px;
    }
  }
}
</style>
