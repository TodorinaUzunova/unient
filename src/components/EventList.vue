<template>
<app-main>
  <div v-if="events">
   <div v-for="event in events" :key="event._id" class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden eventPlaceholder">
      <div class="my-3 p-3">
        <h2 class="display-5">{{event.name}}</h2>
      </div>
      <div>
        <div class="img"><img class="eventPicture"
            :src="event.imageURL" />
        </div>
        <router-link :to="({path:`/details/${event._id}`})" tag="button"  class="eventDetails">
          More
        </router-link>
        {{$route.params.id}}
      </div>
    </div>
  </div>
    <div v-else>

    <app-not-found slot="create" class="row">
      <div class="col-md-12">
        <div id="fouronefour">
          <img class="no-found-picture" src="404face.png" />
        </div>
        <div class="error-template">
          <h1>
            Oops!</h1>
          <h2>
            404 Not Found</h2>
          <div class="error-details">
            UniEnt cannot find any event...
          </div>
          <div class="actions">
            <router-link to="/create"  class="btn btn-dark btn-lg">Create the first one? </router-link>
          </div>
        </div>
      </div>
        </app-not-found>
    </div>
 
</app-main>
</template>

<script>
import AppMain from './shared/Main.vue';
import AppNotFound from '@/components/NotFound.vue';


function arrayValidator(arr) {

       return Array.isArray(arr) && arr.every((i) => typeof i.name === "string") &&
     arr.every((i) => typeof i.description === "string") && arr.every((i) => typeof i.imageURL === "string" ) && arr.every((i) => typeof i.dateTime === {Date});
}
export default {
   name:'app-event-list',
   components:AppMain,
   AppNotFound,
     data(){

    return {
      events: [
    {
      "_id": "5e1ef996b6cb0338c3abf919",
      "name": "Concert of ROLING STONES",
      "dateTime":"12/12/2020",
      "description": "Aliquip in reprehenderit eu exercitation sint sunt dolor ut culpa incididunt dolor nulla. Quis mollit et sit esse est quis nisi velit. Esse minim ad pariatur fugiat. Sint officia magna elit consequat consequat proident irure cupidatat commodo elit culpa mollit veniam amet. Magna culpa aliqua sint voluptate eu duis sint mollit est sit ut fugiat deserunt. Tempor aliqua eiusmod fugiat qui do eu amet dolore sunt. Nostrud est nisi amet enim deserunt et.",
      "imageURL": "https://www.rollingstone.com/wp-content/uploads/2018/06/led-zeppelin-iv-album-release-review-35c87652-3510-4318-9145-25a24db837f5.jpg",
    
    },
    {
      "_id": "5e1ef996a74fd9ecac5a8510",
      "name":"Concert of Adel",
       "dateTime": "12/06/2020",
      "description": "Enim laboris Lorem esse exercitation commodo. Consectetur officia cillum officia minim est mollit dolor do aliquip consectetur incididunt ad veniam consectetur. Excepteur cupidatat pariatur occaecat amet exercitation eu dolore ut. Proident quis ullamco irure culpa cillum nostrud eu et cillum eu. Duis non velit magna mollit ea incididunt. Tempor sint dolore ad cillum incididunt. Nulla consequat voluptate commodo aute ut.",
      "imageURL": "https://www.rollingstone.com/wp-content/uploads/2018/06/led-zeppelin-iv-album-release-review-35c87652-3510-4318-9145-25a24db837f5.jpg?",
     
    },
    {
      "_id": "5e1ef99652de0e99f5f93fff",
      "name": "Concert of BJORN",
      "dateTime": "12/08/2020",
      "description": "In dolore enim culpa duis minim qui deserunt aliquip voluptate et ipsum ut eu labore. Nisi deserunt cupidatat reprehenderit irure officia occaecat sint. Quis adipisicing ut ut ipsum exercitation tempor ut aute. Magna occaecat exercitation ea excepteur consequat cillum. Eu aliquip fugiat eiusmod et id veniam aute voluptate voluptate anim aute in sit. Qui do ut ipsum eu occaecat sint sint id ullamco occaecat adipisicing laborum laborum. Ex aliquip reprehenderit cillum officia est nostrud dolor.",
      "imageURL": "https://www.rollingstone.com/wp-content/uploads/2018/06/led-zeppelin-iv-album-release-review-35c87652-3510-4318-9145-25a24db837f5.jpg"
    },
    {
      "_id": "5e1ef996c17853358e6da155",
      "name": "Concert of ARIANA GRANDE",
      "dateTime": "22/05/2020",
      "description": "Qui est officia consequat dolor qui. Eu dolor magna quis eiusmod commodo reprehenderit cupidatat occaecat nulla. Enim veniam velit incididunt et est duis sit exercitation ad. Mollit occaecat tempor duis nostrud ut irure irure. Laboris exercitation pariatur exercitation laborum voluptate. Mollit Lorem aute reprehenderit fugiat non magna cupidatat proident ut cillum voluptate aliqua ipsum ad. In incididunt id occaecat sunt eiusmod veniam occaecat proident.",
      "imageURL": "https://www.rollingstone.com/wp-content/uploads/2018/06/led-zeppelin-iv-album-release-review-35c87652-3510-4318-9145-25a24db837f5.jpg",
    
    },
   
  ],
  name:{
    type:String,
    required:true
  },
    dateTime:{
    type:Date,
    required:true
  },
      description:{
    type:String,
    required:true
  },
  imageURL:{
    type:String,
    required:true
  },
  peopleInterestedIn:{
    type:Number
  },
  organizer:{
    type:String
  }
  }},
  // selectedEventId:{
  //    type:String,

  // },
   validations: {
       events: {
         arrayValidator
       }
},
// methods:{
   //@click="selectEventHandler(`${event._id}`)"
//        selectEventHandler(id) {
//       this.selectedEventId = id;
//     },
// },
// computed:{
//   selectedEvent(){
//     return this.events[this.selectedEventId];
//   }
// }
}
 
</script>

<style scoped>

</style>