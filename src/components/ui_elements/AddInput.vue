<template>
    <div class="form-input">
      <label :for="name" class="input-label">{{label}}</label>
      <input
        class="input-text"
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :value="value"
        
        @input="updateValue">
    </div>
</template>


<script setup>

const emit = defineEmits(['update:value'])
const props = defineProps({
  error: {
    type: Array,
    required: false
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  widthBlock: {
    type: String,
    default: '300px'
  },
  heightBlock: {
    type: String,
    default: '40px'
  },  
  bgColor: {
    type: String,
    default: '#EDEAEA'
  }
})
const updateValue = (e) => {
  emit('update:value', e.target.value)
}
</script>



<style lang="scss" scoped>

 .form-input{
    margin-bottom: 30px;
    width: v-bind(widthBlock);
}


 .input-text{
  /*   border: 1px solid var(--primary); */
  padding: 0 10px;
  background: v-bind(bgColor);
  color: black;
  height: v-bind(heightBlock);
  border-radius: 7px;
  font-size: 15px;
  width: 100%;

}


.input .input-label{
    font-weight: bold;
    display: block;

    top: 20px;
    opacity: 0;
    font-size: 13px;
   
}

</style>