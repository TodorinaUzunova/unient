<template>
    <div  class="row event-details" >
    <div class="col-md-12 text-center overflow-hidden">
      <button @click="display" >Click</button>
      <img class="details-img"
        :src="selectedEvent.imageURL" />
      <div class="my-3 p-3">
        <h2 class="display-5">{{selectedEvent.name}}</h2>
        <p class="infoType">Description:</p>
        <p class="event-description">{{selectedEvent.description}}</p>
        <p class="infoType">Date: <small>{{selectedEvent.dateTime}}</small></p>
        <p class="infoType">People interested in: <small>{{selectedEvent.peopleInterestedIn}}</small></p>
        <p class="infoType">Organizer: <small>{{selectedEvent.organizer}}</small></p>
      </div>
      <router-link :to="({path:`/edit/${selectedEvent._id}`})"  class="btn btn-primary btn-lg">Edit the event</router-link>
      <router-link :to="({name:'delete', params:`${selectedEvent._id}`})" class="btn btn-danger btn-lg">Close the event</router-link>
      <div v-if="!isOrganizer">
      <a href="#" class="btn btn-info btn-lg">Join the event</a>
      </div>
      {{$route.params._id}}
    </div>
  </div>
</template>

<script>


export default {
  name:'app-event-details',
   
  props:{
    events:{
      type:Array
    },
    // selectedEvent:{
    // name:{
    //   type:String,
    //   required:true
    //   },
    //   dateTime:{
    //     type:Date,
    //     required:true,
    //     default:()=>{
    //       new Date('12/03/2020');
    //     }
    //   },
    //    imageURL:{
    //         type:String,
    //         required:true,
    //       },
    //       peopleInterestedIn:{
    //         type:Number,
    //         default:0
    //       },
    //       organizer:{
    //         type:String
    //       },
    // }
     
       },
  data(){
      return {
        selectedEventId:this.$route.params.id,
       
      }
  },
  methods:{
    display(){
       console.log(this.selectedEventId);
    }
    },
  computed:{
    selectedEvent(){ 
     
      return this.events[this.selectedEventId]
     },
    isOrganizer: function(){
      return this.localStorage.getItem('username')===this.event.organizer;
      }
  }
}
</script>

<style scoped>

</style>