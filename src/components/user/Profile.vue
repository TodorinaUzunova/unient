<template>
  <div class="row">
    <img
      class="profile-img col-md-6 text-center col-lg"
      src="user-profile.jpg"
    />

    <div class="profile-info col-md-6 text-center col-lg">
      <h3>
        USERNAME:
        <span>{{ username }}</span>
      </h3>
      <p class="infoType">ORGANIZER of {{ userEvents.length }} EVENTS.</p>
      <div v-if="userEvents">
        <ul v-for="(event, id) of userEvents" :key="id" class="list-group">
          <li class="list-group-item">
            <router-link :to="({path:`/details/${event.id}`})">{{
              event.name
            }}</router-link>
          </li>
        </ul>
      </div>
      <p v-if="noUserEvents" class="infoType">NO ORGANIZED EVENTS</p>
    </div>
  </div>
</template>

<script>
import axiosAuth from "@/axios-auth.js"
export default {
  name: "app-profile",
  components: {},
  data() {
    return {
      username: localStorage.getItem("username"),
      userEvents: [],
      userId : localStorage.getItem('userId'),
    };
  },
  created(){
     this.getUserEvents();
  },
  methods: {
 getUserEvents(){
     
       const response= axiosAuth.get("events");
      //`events/?query={"_acl.creator":"${this.userId}"}`)
      console.log(response.data);
 }
      // } catch (error) 
      //   console.log(error);
      //  
      // }
  },
  computed: {
    noUserEvents() {
      return this.userEvents.length === 0;
    }
  }
};
</script>

<style scoped>
.infoType {
  color: red;
  font-weight: bold;
  font-size: large;
}
</style>
