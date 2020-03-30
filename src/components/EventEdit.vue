<template>
    <form @submit.prevent="submitHandler">
    <div class="text-center mb-4">
      <h1 class="h3 mb-3 font-weight-normal">Organize Event</h1>
      <p>Fill up the following information!</p>
    </div>

    <div class="form-label-group">
      <label for="inputEventName">Edit Event</label>
      <input type="text" id="inputEventName" v-model.lazy="name" class="form-control" placeholder="Event"  @blur="$v.name.$touch">
     <template v-if="$v.name.$error" >
        <div v-if="!$v.name.required" class="alert alert-danger">Event's name is required!</div>
      </template>
    </div>

    <div class="form-label-group">
      <label for="inpuEventDate">Date</label>
      <input type="date" id="inpuEventDate" v-model.lazy="dateTime" class="form-control" placeholder="Date-mm/dd/yyyy" @blur="$v.dateTime.$touch" >
      <template v-if="$v.dateTime.$error" >
        <div v-if="!$v.dateTime.required" class="alert alert-danger">Date is required!</div>
      </template>     
    </div>

    <div class="form-label-group">
      <label for="inputEventDescription">Description</label>
      <textarea type="text" id="inputEventDescription" v-model="description" class="form-control" placeholder="Description" @blur="$v.description.$touch"></textarea>
      <template v-if="$v.name.$error" >
        <div v-if="!$v.description.required" class="alert alert-danger">Description is required!</div>
      </template>   
    </div>

    <div class="form-label-group">
      <label for="inputEventImage">Image</label>
      <input type="text" id="inputEventImage" v-model="imageURL" class="form-control" placeholder="Image"  @blur="$v.imageURL.$touch">
        <template v-if="$v.imageURL.$error" >
        <div v-if="!$v.imageURL.required" class="alert alert-danger">Image url is required!</div>
        <div v-else-if="!$v.imageURL.url" class="alert alert-danger">Please provide valid url!</div>
      </template>
    </div>

     <div style="display: none">
      <input class="form-control"  v-model.number ="peopleInterestedIn" />
      <input  class="form-control"  v-model="organizer"  />
       <!-- [value]="isOrganizer" -->
    </div>
    <button :disabled="$v.$invalid" class="btn btn-lg btn-dark btn-block">Edit it</button>
    
    <p class="mt-5 mb-3 text-muted text-center">© UniEnt - 2020.</p>
</form>

</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import { validationMixin } from "vuelidate";
import { required, email, integer} from "vuelidate/lib/validators";

export default {
    name:'app-event-edit',
    mixins:validationMixin,
    // props:{
    //        name:{
    //          type:String,
    //           required:true,
    //          },
    //       dateTime:{
    //         type:Date,
    //         required:true,
    //         default:()=>{new Date('12/03/2020')}
    //       },
    //       description:{
    //         type:String,
    //         required:true,
    //       },
    //       imageURL:{
    //         type:String,
    //         required:true,
    //       },
    //       peopleInterestedIn:{
    //         type:Number,
    //         default:0
    //       },
    //       organizer:{
    //         type:String
    //       }
    // },
    data(){
      return{
          name:'',
          dateTime:null,
          description:'',
          imageURL:'',
          peopleInterestedIn:0,
          organizer:''
      }

    },
    validations:{
             name:{
              required,
             },
          dateTime:{
            required
          },
          description:{
              required
          },
          imageURL:{
               required,
          },
          peopleInterestedIn:{
               integer
          },
          organizer:{
            email
          }

    },
    methods:{
        submitHandler(){
            this.$v.$touch;
            if(this.$v.$invalid){return}
            console.log('Form is submitted!');
        }
    }
}
</script>

<style scoped>
</style>