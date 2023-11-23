<script setup>
//import ImageBlock from "@/components/layouts/ImageBlock.vue";
import AddButton from "@/components/ui_elements/AddButton.vue";
import AddInput from "@/components/ui_elements/AddInput.vue";
import { reactive } from "vue";

const props = defineProps({
  contactUsBg: {
    type: Object,
    default: {},
  },
});
const state = reactive({
  firstname: "",
  lastname: "",
  email: "",
  message: "",
});
</script>
<template>
  <div class="contacts">
    <div class="contacts__header">
      <h1>contuct us</h1>
      <hr />
    </div>
    <div class="contacts__block">
      <div class="contacts__form">
        <form @submit.prevent="submitForm">
          <div class="contacts__form-group">
            <AddInput label="First Name" name="firstname" placeholder="Input your First Name" v-model:value="state.firstname" />
            <AddInput label="Last Name" name="lastname" placeholder="Input your Last Name" v-model:value="state.lastname" />
          </div>

          <AddInput label="Email" name="email" placeholder="Input your Email" v-model:value="state.email" widthBlock="100%" />
          <AddInput label="Message" name="message" placeholder="Input your Message" v-model:value="state.message" widthBlock="100%" heightBlock="100px" />
          <div class="form-btn">
            <AddButton :rounded="true" :changeColor="true" colorBg="#EC954D" width="160px" hoverColor="#8C8D87" paddings="20px 40px"> <span>SUBMIT</span></AddButton>
          </div>
        </form>
      </div>
      <div class="contacts__location">
        <div class="contacts__location-item">
          <img src="/images/icons/email.svg" alt="email" />
          <span> maulayuouts@gmail.com</span>
        </div>

        <div class="contacts__location-item">
          <img src="/images/icons/telephone.svg" alt="email" />
          <span>123-452-746</span>
        </div>
        <div class="contacts__location-item">
          <img src="/images/icons/location.svg" alt="email" />
          <span>123 Sant-Petesburg, Moskov street 17</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  font-family: montserrat_var, sans-serif;
  background: url(/images/bg/beach-3.webp);
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: center;
  align-items: center;
  &__header {
    justify-self: center;
    max-width: 262px;
    & h1 {
      font-size: 35px;
      line-height: 10px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  &__block {
    display: grid;
    column-gap: 30px;
    grid-template-columns: repeat(2, minmax(200px, 602px));
  }
  &__form {
    &-group {
      display: flex;
      column-gap: 30px;
    }
    & .form-btn {
      margin-top: 45px;
    }
  }
  &__location {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 38px;
    &-item {
      display: flex;
      align-items: center;
      column-gap: 38px;
      & img {
        width: 30px;
      }
    }
  }
}
</style>
