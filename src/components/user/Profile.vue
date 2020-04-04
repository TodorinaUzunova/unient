<template>
  <div class="row">
    <img class="profile-img col-md-6 text-center col-lg" src="user-profile.jpg" />

    <div class="profile-info col-md-6 text-center col-lg">
      <h3>
        USERNAME:
        <span>PAKO</span>
      </h3>
      <p class="infoType">ORGANIZER of 2 EVENTS.</p>
      <!-- <div v-if="myEvents">
        <ul v-for="(event,id) of myEvents" :key="id" class="list-group">
          <li class="list-group-item">
            <router-link :to="({path:`/details/${event._id}`})">{{event.name}}</router-link>
          </li>
        </ul>
      </div> -->

      <p class="infoType">NO ORGANIZED EVENTS</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "app-profile",
  components: {},
  data() {
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