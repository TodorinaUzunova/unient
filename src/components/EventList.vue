<template>
  <div v-if="isLoggedIn">
    <div v-if="isLoading">Loading...</div>
    <div v-if="eventsLength">
      <div
        v-for="event in events"
        :key="event._id"
        class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden eventPlaceholder"
      >
        <div class="my-3 p-3">
          <h2 class="display-5">{{event.name}}</h2>
        </div>
            <div class="date">
        {{event.dateTime}}
         </div>
        <div>
          <div class="img">
            <img class="eventPicture" :src="event.imageURL" />
          </div>
          <router-link :to="{path:`/details/${event._id}`}" tag="button" class="eventDetails">More</router-link>
          {{$route.params.id}}
        </div>
      </div>
    </div>
    <div v-else>
      <div slot="create" class="row">
        <div class="col-md-12">
          <div id="fouronefour">
            <img class="no-found-picture" src="404face.png" />
          </div>
          <div class="error-template">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div class="error-details">UniEnt cannot find any event...</div>
            <div class="actions">
              <router-link to="/create" class="btn btn-dark btn-lg">Create the first one?</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AppNotFound from "@/components/NotFound.vue";
//import axiosAuth from "@/axios-auth.js";
import eventsMixin from '@/mixins/events-mixin.js';

function arrayValidator(arr) {
  return (
    Array.isArray(arr) &&
    arr.every(i => typeof i.name === "string") &&
    arr.every(i => typeof i.description === "string") &&
    arr.every(i => typeof i.imageURL === "string") &&
    arr.every(i => typeof i.dateTime === { Date })
  );
}
export default {
  name: "app-event-list",
  mixins:[eventsMixin],
  props: {
    isLoggedIn: Boolean
  },
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getAllEvents();
  },
  components: AppNotFound,
  data() {
    return {
      events: [],
      name: {
        type: String,
        required: true
      },
      dateTime: {
        type: Date,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      imageURL: {
        type: String,
        required: true
      },
      peopleInterestedIn: {
        type: Number
      },
      organizer: {
        type: String
      },
      isLoading: true
    };
  },
  validations: {
    events: {
      arrayValidator
    }
  },
  methods: {
    // async getAllEvents() {
    //   try {
    //     const response = await axiosAuth.get("events");
    //     const allEvents = response.data;
    //     console.log(allEvents);
    //     for (const _id in allEvents) {
    //       this.events.push({ _id, ...allEvents[_id] });
    //       this.isLoading = false;
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  },
  computed: {
    eventsLength() {
      return this.events.length !== 0;
    }
  }
};
</script>

<style scoped>
.date{
    color:blueviolet;
    font-size: 40px;
    font-weight: bold;
}
</style>