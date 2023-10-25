<template>
    <div class="icon" >
        <img :src="icon.imglink" :alt="icon.name">
    </div>

</template>

<script setup>
import { onMounted} from 'vue'

defineProps(
    {
        icon: {
            type: Object,
            default:{}
        },
        iconSize: {
            type: String,
            default:'100%'
        },
        

    }
)

/* onMounted( () => {
   
 console.log('iconImg',icon);
}); */
</script>

<style lang="scss" scoped>

</style>