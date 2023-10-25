<template>
 <div class="image-block">
    <img class="image-block-img " :src="imageBg.imglink" :alt="imageBg.name" >
 </div>
</template>

<script setup>
import {onMounted} from 'vue'


const props = defineProps({
    imageBg:{
        type:Object,
       // default:'src/assets/images/bg/image_3.jpg'
       //reqired:true
       default:{}
    }
})

</script>

<style lang="scss" scoped>
.image-block .image-block-img{

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>