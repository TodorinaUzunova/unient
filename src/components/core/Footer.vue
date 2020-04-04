<template>
 <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
    
  
        <v-card-text class="py-2 white--text text-center">
          © UniEnt - One application proudly built in BULGARIA!   {{getYear}} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
   <!-- <footer class="container py-5">
    <div class="text-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img"
        viewBox="0 0 24 24" focusable="false">
        <title>Product</title>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94">
        </path>
      </svg>
      <p class="d-block mb-3 text-muted">© UniEnt - 2020. One application proudly built in BULGARIA!</p>
    </div>
  </footer> -->
</template>

<script>
//import Vuetify from '@/plugins/vuetify.js';
export default {
  name: 'app-footer',
  //vuetify: new Vuetify(),
   data:()=>({  
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram',
    ]
   }),
   computed:{
     getYear(){
       return new Date().getFullYear();
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}


/*
 * Extra utilities
 */

/*.flex-equal > * {
  -ms-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    flex: 1;
  }
}

.overflow-hidden { overflow: hidden; } */

/* footer p{
     color:#333;
    margin-left: 1%;
    padding:3%;
    background-color:grey;
} */
</style>