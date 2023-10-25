<template>
  <div class="contactus">
    <div class="contacts-bg">
      <ImageBlock class="galary-bg" :imageBg="contactUsBg" />
    </div>

    <div class="contactus-header">
      <h1>contuct us</h1>
      <hr />
    </div>
    <div class="contactus-form">
      <form @submit.prevent="submitForm">
        <div class="fieldnames">
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
    <div class="contactus-contacts">
      <div class="contacts-item">
        <img src="/images/icons/email.svg" alt="email" />
        <span> maulayuouts@gmail.com</span>
      </div>

      <div class="contacts-item">
        <img src="/images/icons/telephone.svg" alt="email" />
        <span>123-452-746</span>
      </div>
      <div class="contacts-item">
        <img src="/images/icons/location.svg" alt="email" />
        <span>123 Sant-Petesburg, Moskov street 17</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageBlock from "@/components/layouts/ImageBlock.vue";
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

<style lang="scss" scoped>
.contactus-form {
  width: 602px;
}

.contactus-form .fieldnames {
  display: flex;
  column-gap: 30px;
}
.contactus {
  font-family: montserrat_var, sans-serif;
  display: grid;
  gap: 38px;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(14, 1fr);
}
.contactus .contacts-bg {
  grid-row: 1 / span 10;
  grid-column: 1 / span 14;
}
.contactus .contactus-header {
  grid-row: 2 / span 1;
  grid-column: 6 / span 4;
  justify-self: center;
}
.contactus-header h1 {
  font-size: 40px;
  line-height: 10px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.contactus .contactus-form {
  grid-row: 4 / span 5;
  grid-column: 3 / span 6;
}
.contactus .contactus-contacts {
  grid-row: 4 / span 4;
  grid-column: 8 / span 3;
  display: grid;
  grid-template-rows: repeat(3, 25px);
  row-gap: 40px;
  margin-top: 20px;
}
.contactus-contacts .contacts-item {
  display: flex;
  column-gap: 20px;

  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
}
.contactus-form .form-btn {
  margin-top: 45px;
}
</style>
