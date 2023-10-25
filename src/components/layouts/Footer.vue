<template>
<div class="footer">
    <div class="footer-socials">
                <h4>follows</h4>
                <div class="social-icons">
                <span> <img src="@/assets/images/icons/telegram.svg" alt="telegram"></span>
                <span><img src="@/assets/images/icons/facebook.svg" alt="facebook"></span>
                <span><img src="@/assets/images/icons/twitter.svg" alt="twitter"></span>
                <span><img src="@/assets/images/icons/whatsap.svg" alt="whatsap"></span>
             </div>
           </div>  
            <div class="footer-services">
                <h4>Services</h4>
                <div class="services-item">
                    <img src="@/assets/images/icons/arrow.svg" alt="arrow">
                    <span>Free Website Tutorials</span>
                </div>
                <div class="services-item">
                    <img src="@/assets/images/icons/arrow.svg" alt="arrow2">
                    <span>Web Design Tips</span>
                </div>
                <div class="services-item">
                    <img src="@/assets/images/icons/arrow.svg" alt="arrow3">
                    <span>E-Commerce  Tutorials</span>
                </div>
            </div>
            <div class="footer-cts">
                <h4>Contacts</h4>
              
                <div class="footer-cts-item">
                    <img src="@/assets/images/icons/email.svg" alt="email">
                <span> maulayuouts@gmail.com</span>
              </div>
              
                <div class="footer-cts-item">
                        <img src="@/assets/images/icons/telephone.svg" alt="email">
                    <span>123-452-746</span>
                 </div>
               <div class="footer-cts-item">
                 <img src="@/assets/images/icons/location.svg" alt="email">
                  <span>123 Sant-Petesburg, Moskov street 17</span>
               </div>
            
              
               
            </div>
            <div class="footer-copyright">
                <hr>
                <h4>Copyright © 2023 Created a Pro</h4>
            </div>
      
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer{
    font-family: montserrat_var, sans-serif;
        display: grid;
        gap: 38px;
         grid-template-rows: repeat(4, 1fr);
         grid-template-columns: repeat(14, 1fr);
}
.footer .footer-socials{
        grid-row: 2 / span 1;
        grid-column: 3 / span 2;
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
        text-transform: uppercase;
    }
    .footer-socials .social-icons{
        display: flex;
        column-gap: 20px;
    }
 .footer .footer-services{
        grid-row: 2 / span 2;
        grid-column: 7 / span 2;
    
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
        text-transform: uppercase;
        display: grid;
        grid-template-rows: repeat(4, 20px);
        row-gap: 50px;
        align-items: center;
    }
    .footer-services .services-item{
        display: flex;
        column-gap: 20px;
        margin-bottom: 10px;
        
        align-items: center;
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
        text-transform: none;
    }
    .footer .footer-cts{
        grid-row: 2 / span 2;
        grid-column: 11 / span 2;
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
        text-transform: uppercase;
        display: grid;
        grid-template-rows: repeat(4, 20px);
        row-gap: 50px;
        align-items: center;
    
    }
    
    .footer-cts  .footer-cts-item{
        display: flex;
        column-gap: 20px;
        margin-bottom: 10px;
        
        align-items: center;
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
        text-transform: none;
        
    }
    .footer .footer-copyright{
        grid-row: 4 / span 2;
        grid-column: 2 / span 12;
        text-align: center;
    }
</style>