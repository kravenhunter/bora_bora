<template>
 <div class="header">
    <!-- <img class="header-bg" src="@/assets/images/bg/pablo-azurduy-1VfhkiBVhM0-unsplash 1.jpg"   alt=""> -->
    <ImageBlock class="header-bg"  :imageBg="headerBg" />
    <div class="header-body block-size">
                <div class="navigation">
                    <div class="navigation-logo">
                        <span class="navigation-logo-text">LOGO</span>
                    </div>
                    <GridSlot
                     minSize="150px"
                    maxSize="1fr" 
                     columnGap="35px"
                    countColumns="5">
                        <Addbutton v-for="(el, i) in navigations"
                        :key="i"
                        :label="el" 
                        :rounded="true"
                        width="100%"
                     
                        />
                    </GridSlot>
        <!--             <div class="navigation-list">
                        <Addbutton v-for="(el, i) in navigations"
                        :key="i"
                        :label="el" 
                        :rounded="true"  />
                    </div> -->
            </div>
            <div class="header-offer">
                <div class="header-offer-nav">
                    <div class="header-offer-title dream">
                        <h4>MAKES YOUR DREAM COME TRUE</h4>
                    </div>
                    <div class="header-offer-title island">
                        <h1>BORA BORA ISLAND</h1>
                    </div>
                  <div class="header-offer-button">
                    <Addbutton
                        label="VISIT ISLAND" 
                        :rounded="true" 
                        :changeColor="true"
                       
                        colorBg="#EC954D"
                        />
                    </div>
                </div>
            </div>
    </div>

 </div>
</template>

<script setup>
import Addbutton from '@/components/ui_elements/AddButton.vue'
import GridSlot from '@/components/ui_elements/GridSlot.vue'
import ImageBlock from '@/components/layouts/ImageBlock.vue'

const props = defineProps({
    headerBg:{
        type: Object,
        default:{}
    },
    headerData:{
        type: Array,
        default: []
    }
})
const navigations = ['NEWS','SERVICES','TOURIZM','ABOUT'];



</script>

<style lang="scss" scoped>
/* .header-offer .header-offer-nav{
    text-align: center;
    align-items: center;
} */


.header-offer-title h4{
 
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 0px;
}


.header-offer-title h1{
   
    font-size: 60px;
    line-height: 45.5px;
    font-weight: 600;
 
}
.header-offer .header-offer-nav{
display: flex;
flex-direction: column;
row-gap: 10px;
padding-top: 15%;
align-items: center;


}

.block-size{
    width: 100%;
    height: 100%;
}
.header{
    position: relative;
}

.header .header-bg{
/*     max-width: 100%;
    max-height:100%; */
    background-size: cover; 

/*     background-image: url('src/assets/images/bg/pablo-azurduy-1VfhkiBVhM0-unsplash 1.jpg');
    background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover; */
}

/* .header .header-body{
  
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 1fr;
   // grid-column-gap: 2rem;
   //column-gap: 20px;
    grid-template-rows: [navigation] 1fr [header-offer] 11fr;
    grid-template-columns: repeat(12, 1fr);
} */
.header .header-body{
  
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-rows: [header-nav] 1fr [header-body] 12fr;
  grid-template-columns: [offer] 14fr;
}
.navigation{
    grid-row: header-nav;
    //grid-column: 1 / span 14;
    grid-column: offer;
    display: grid;
    grid-template-columns: [navigation-logo] 1fr [navigation-list] 1fr;
    padding-top: 15px;
    padding-bottom: 15px;
   
}
.navigation .navigation-logo{
    grid-column: navigation-logo;
    justify-self: center;
}
.header .header-offer{
    grid-row: header-body;
    grid-column: 1 / span 14;
    display: grid;
   

  
}


/* .header .header-offer{
    grid-row: header-offer;
    grid-column: 1 / span 12;
    display: grid;
    justify-self: center;
    align-self: center;
}
.navigation{
    grid-row: header-nav;
    grid-column: 1 / span 12;
    display: grid;
    grid-template-columns: [navigation-logo] 1fr [navigation-list] 1fr;
    padding-top: 15px;
    padding-bottom: 15px;
   
} */


/* .navigation .navigation-list{
    grid-column: navigation-list;
    display: flex;
    gap:calc(var(--indexSize) * 0.9);
    list-style: none;
    margin-right: 50px;
} */
.navigation .navigation-list li {
    padding: 20px 55px;
    border: 1px solid #C2C2C2;
    border-radius: 50px;
}
.navigation-logo .navigation-logo-text{
  font-size: calc(var(--indexSize) * 2);
}
</style>