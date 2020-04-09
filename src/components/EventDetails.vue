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
        <router-link :to="selectedEvent|eventEditLink" class="btn btn-primary btn-lg">Edit the event</router-link>
        <a class="btn btn-danger btn-lg" @click="closeEvent">Close the event</a>
      </div>
      <a v-if="!isOrganizer()" class="btn btn-info btn-lg" @click="joinEvent">Join the event</a>
    </div>
  </div>
</template>

<script>
import eventsMixin from "@/mixins/events-mixin.js";
export default {
  name: "app-event-details",
  mixins: [eventsMixin],
  props: {
    // events: {
    //   type: Array
    // }
  },
  data() {
    return {
      // selectedEventId: this.$route.params.id,
      // selectedEvent: {
      //   type: Object,
      //   required: true
      // },
      // isLoading: true
    };
  },
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getEventById();
  },
  methods: {
    isOrganizer() {
      return localStorage.getItem("username") === this.selectedEvent.organizer;
    },

    async getEventById() {
      this.getTheEventById();
    },
    async closeEvent() {
      this.closeTheEvent();
    },
    async joinEvent() {
      const joinedEvent = {
        name: this.selectedEvent.name,
        dateTime: this.selectedEvent.dateTime,
        description: this.selectedEvent.description,
        imageURL: this.selectedEvent.imageURL,
        peopleInterestedIn: (this.selectedEvent.peopleInterestedIn += 1),
        organizer: this.selectedEvent.organizer
      };
      this.joinTheEvent(joinedEvent);
    }
  },
  filters: {
    eventEditLink(selectedEvent) {
      return `/edit/${selectedEvent._id}`;
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