<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div class="row">
      <img class="profile-img col-md-6 text-center col-md" src="/user-profile.png" />

      <div class="profile-info col-md-6 text-center col-lg">
        <h3>
          USERNAME:
          <span>{{ username}}</span>
        </h3>
        <p class="infoType">ORGANIZER of {{ userEventsLength }} EVENTS.</p>
        <div v-if="userEvents">
          <ul v-for="(event, _id) of userEvents" :key="_id" class="list-group">
            <li class="list-group-item">
              <router-link :to="event|eventDetailsLink">
                {{
                event.name
                }}
              </router-link>
            </li>
          </ul>
        </div>
        <p v-else class="infoType">NO ORGANIZED EVENTS</p>
      </div>
    </div>
  </div>
</template>

<script>
import eventsMixin from "@/mixins/events-mixin.js";

export default {
  name: "app-profile",
  mixins: [eventsMixin],
  components: {},
  data() {
    return {
      username: localStorage.getItem("username"),
      //userEvents: [],
      userId: localStorage.getItem("userId"),
      isLoading: true
    };
  },
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getUserEvents();
  },
  methods: {},
  computed: {
    userEventsLength() {
      return this.userEvents.length;
    }
  },
  filters: {
    eventDetailsLink(event) {
      return `/details/${event._id}`;
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
</style>
