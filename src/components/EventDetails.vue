<template>
    <div  class="row event-details" >
    <div class="col-md-12 text-center overflow-hidden">

      <img class="details-img"
        :src="event.imageURL" />
      <div class="my-3 p-3">
        <h2 class="display-5">{{event.name}}</h2>
        <p class="infoType">Description:</p>
        <p class="event-description">{{event.description}}</p>
        <p class="infoType">Date: <small>{{event.dateTime}}</small></p>
        <p class="infoType">People interested in: <small>{{event.peopleInterestedIn}}</small></p>
        <p class="infoType">Organizer: <small>{{event.organizer}}</small></p>
      </div>
      <router-link :to="({path:`/edit/${_id}`})"  class="btn btn-primary btn-lg">Edit the event</router-link>
      <router-link :to="({name:'delete', params:{_id}})" class="btn btn-danger btn-lg">Close the event</router-link>
      <div v-if="!isOrganizer">
      <a href="#" class="btn btn-info btn-lg">Join the event</a>
      </div>
      {{$route.params._id}}
    </div>
  </div>
</template>

<script>
import AppMain from './shared/Main.vue';

export default {
  name:'app-event-details',
  components:AppMain,
  props:{
    event:{
    name:{
      type:String,
      required:true
      },
      dateTime:{
        type:Date,
        required:true,
        default:()=>{
          new Date('12/03/2020');
        }
      },
       imageURL:{
            type:String,
            required:true,
          },
          peopleInterestedIn:{
            type:Number,
            default:0
          },
          organizer:{
            type:String
          },
    }
     
       },
  data(){
      return {
      }
  },
  computed:{
    isOrganizer: function(){
      return this.localStorage.getItem('username')
      }
  }
}
</script>

<style scoped>

</style>