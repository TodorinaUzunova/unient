<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="success">Event edited successfully!</div>
    <form @submit.prevent="submitEditHandler">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Edit Event</h1>
        <p>Fill up the following information!</p>
      </div>

      <div class="form-label-group">
        <label for="inputEventName">Event</label>
        <input
          type="text"
          id="inputEventName"
          v-model.lazy="name"
          class="form-control"
          placeholder="Event"
          @blur="$v.name.$touch"
        />
        <template v-if="$v.name.$error">
          <div v-if="!$v.name.required" class="alert alert-danger">Event's name is required!</div>
        </template>
      </div>

      <div class="form-label-group">
        <label for="inpuEventDate">Date</label>
        <input
          type="date"
          id="inpuEventDate"
          v-model.lazy="dateTime"
          class="form-control"
          placeholder="Date-mm/dd/yyyy"
          @blur="$v.dateTime.$touch"
        />
        <template v-if="$v.dateTime.$error">
          <div v-if="!$v.dateTime.required" class="alert alert-danger">Date is required!</div>
        </template>
      </div>

      <div class="form-label-group">
        <label for="inputEventDescription">Description</label>
        <textarea
          type="text"
          id="inputEventDescription"
          v-model="description"
          class="form-control"
          placeholder="Description"
          @blur="$v.description.$touch"
        ></textarea>
        <template v-if="$v.name.$error">
          <div v-if="!$v.description.required" class="alert alert-danger">Description is required!</div>
        </template>
      </div>

      <div class="form-label-group">
        <label for="inputEventImage">Image</label>
        <input
          type="text"
          id="inputEventImage"
          v-model="imageURL"
          class="form-control"
          placeholder="Image"
          @blur="$v.imageURL.$touch"
        />
        <template v-if="$v.imageURL.$error">
          <div v-if="!$v.imageURL.required" class="alert alert-danger">Image url is required!</div>
          <div v-else-if="!$v.imageURL.url" class="alert alert-danger">Please provide valid url!</div>
        </template>
      </div>

      <div style="display: none;">
        <input class="form-control" v-model.number="peopleInterestedIn" />
        <input class="form-control" v-model="organizer" />
      </div>
      <button :disabled="$v.$invalid" class="btn btn-lg btn-dark btn-block">Edit it</button>

      <p class="mt-5 mb-3 text-muted text-center">© UniEnt - 2020.</p>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import { validationMixin } from "vuelidate";
import { required, email, integer } from "vuelidate/lib/validators";

import eventsMixin from "@/mixins/events-mixin.js";

export default {
  name: "app-event-edit",
  mixins: [validationMixin, eventsMixin],
  data() {
    return {
      selectedEventId: this.$route.params.id,
      selectedEvent: Object,
      name: "",
      dateTime: "",
      description: "",
      imageURL: "",
      peopleInterestedIn: 0,
      organizer: "",
      isLoading: true,
      success: true
    };
  },
  validations: {
    name: {
      required
    },
    dateTime: {
      required
    },
    description: {
      required
    },
    imageURL: {
      required
    },
    peopleInterestedIn: {
      integer
    },
    organizer: {
      email
    }
  },
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getTheEventToEdit();
  },
  methods: {
    async getEventToEdit() {
      this.getTheEventToEdit();
    },

    async submitEditHandler() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      }
      const editedEvent = {
        name: this.name,
        dateTime: this.dateTime,
        description: this.description,
        imageURL: this.imageURL,
        peopleInterestedIn: this.peopleInterestedIn,
        organizer: localStorage.getItem("username")
      };
      this.editEvent(editedEvent);
    }
  }
};
</script>

<style scoped></style>
