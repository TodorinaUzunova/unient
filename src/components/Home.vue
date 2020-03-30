<template>
  <app-main>
    <template v-slot:main>
      <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div style=" padding-left: 7%; padding-top:3%;" class="col-md-7">
          <h2 class="featurette-heading">
            The events that
            <span class="text-muted">will blow your mind!</span>
          </h2>
          <p class="lead">Join our community.</p>
          <p style="padding-left:5%" class="lead">Organizie an event.</p>
          <p
            style="padding-left:10%"
            class="lead"
          >Gathered as many people as possible for one purpose.</p>
          <p style="padding-left:15%" class="lead">Learn!</p>
          <p style="padding-left:20%" class="lead">Share!</p>
          <p style="padding-left:25%" class="lead">Enjoy the life!</p>
        </div>
        <div class="col-md-5">
          <img class="home-event-picture" src="events-concept-600w-580432891.webp" />
        </div>
      </div>
    </template>
  </app-main>
</template>

<script>
import AppMain from "../components/shared/Main.vue";
export default {
  name: "app-home",
  components: {
    AppMain
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
