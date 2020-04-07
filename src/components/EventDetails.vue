<template>
  <div v-if="isLoading">Loading...</div>

  <div v-else class="row event-details">
    <div class="col-md-12 text-center overflow-hidden">
      <img class="details-img" :src="selectedEvent.imageURL" />
      <div class="my-3 p-3">
        <h2 class="display-5">{{selectedEvent.name}}</h2>
        <p class="infoType">Description:</p>
        <p class="infoType grey event-description">{{selectedEvent.description}}</p>
        <p class="infoType">
          Date:
          <small class="infoType black">{{selectedEvent.dateTime}}</small>
        </p>
        <p class="infoType">
          People interested in:
          <small class="infoType black">{{selectedEvent.peopleInterestedIn}}</small>
        </p>
        <p class="infoType">
          Organizer:
          <small class="infoType black">{{selectedEvent.organizer}}</small>
        </p>
      </div>
      <div v-if="isOrganizer()">
        <router-link
          :to="({path:`/edit/${selectedEvent._id}`})"
          class="btn btn-primary btn-lg"
        >Edit the event</router-link>
        <a class="btn btn-danger btn-lg" @click="closeEvent">Close the event</a>
      </div>
      <a v-if="!isOrganizer()" class="btn btn-info btn-lg" @click="joinTheEvent">Join the event</a>
    </div>
  </div>
</template>

<script>
import axiosAuth from "@/axios-auth.js";

export default {
  name: "app-event-details",
  props: {
    events: {
      type: Array
    }
  },
  data() {
    return {
      selectedEventId: this.$route.params.id,
      selectedEvent: {
        type: Object,
        required: true
      },
      isLoading: true
    };
  },
  created() {
    this.getEventById();
       
  },
  methods: {
    isOrganizer() {
      return localStorage.getItem("username") === this.selectedEvent.organizer;
    },
     async getEventById() {
        try {
          const response = await axiosAuth.get(`events/${this.selectedEventId}`);
          console.log(this.$route.params.id);
          this.selectedEvent = response.data;
          console.log(response);
          this.isLoading = false;
        } catch (error) {
          console.log(error);
        }
      },
      async closeEvent() {
        try {
          const response = await axiosAuth.delete(`events/${this.selectedEventId}`);
          console.log(response);
          this.$router.push({ name: "eventsAll" });
          this.isLoading = false;
        } catch (error) {
          console.log(error);
        }
      },
      async joinTheEvent() {
        try {
          const payload = {
            name: this.selectedEvent.name,
            dateTime: this.selectedEvent.dateTime,
            description: this.selectedEvent.description,
            imageURL: this.selectedEvent.imageURL,
            peopleInterestedIn: (this.selectedEvent.peopleInterestedIn += 1),
            organizer: this.selectedEvent.organizer
          };
          const response = await axiosAuth.put(
            `events/${this.selectedEvent._id}`,
            payload
          );
          console.log(response.data);
          this.$router.push("events/all");
          this.isLoading = false;
        } catch (error) {
          console.log(error);
        }
      }
    
  }
};
</script>

<style scoped>
.infoType {
  color: blueviolet;
  font-weight: bold;
  font-size: large;
}
.event-description {
  font-style: italic;
  font-weight: bold;
}
.black {
  color: indianred;
}
.grey {
  color: darkslategray;
}
</style>