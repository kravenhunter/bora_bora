<template>
  <a :href="`#${label}`" :class="['btn', 'btn-size', 'btn-text', 'btn-border', 'btn-label', { 'btn-rounded': rounded }, { 'btn-color': changeColor }]"> <slot></slot></a>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  rounded: {
    type: Boolean,
    reqired: false,
  },
  changeColor: {
    type: Boolean,
    reqired: false,
  },
  colorBg: {
    type: String,
    default: "#000",
  },
  textColor: {
    type: String,
    default: "#FFFFFF",
  },
  paddings: {
    type: String,
    default: "20px 10px",
  },
  width: {
    type: String,
    default: "310px",
  },
  hoverColor: {
    type: String,
    default: "#EC954D",
  },
});
//Регистрируем кастомное событие @test
const emit = defineEmits(["test"]);
// По клику вызывается emit с событием @test
</script>
<style lang="scss" scoped>
.btn {
  text-align: center;
  padding: v-bind(paddings);
  color: v-bind(textColor);
  border: 1px solid #c2c2c2;
  transition-property: background;
  transition-duration: 0.4s;
  transition-timing-function: linear;
}
.btn:hover {
  background: v-bind(hoverColor);
}

.btn-color {
  background: v-bind(colorBg);
}

.btn-rounded {
  border-radius: 50px;
}
</style>
