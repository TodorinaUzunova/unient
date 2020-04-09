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

</style>