<template>
  <div>
    <div v-if="success">Event created successfully!</div>
    <form @submit.prevent="submitHandler">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Organize Event</h1>
        <p>Fill up the following information!</p>
      </div>

      <div class="form-label-group">
        <input
          type="text"
          id="inputEventName"
          name="name"
          class="form-control"
          placeholder="Event"
          v-model="name"
          @blur="$v.name.$touch"
          autofocus
        />
        <label for="inputEventName">Event</label>
        <template v-if="$v.name.$error">
          <p v-if="!$v.name.required" class="alert alert-danger">Event name is required!</p>
        </template>
      </div>

      <div class="form-label-group">
        <input
          type="date"
          id="inpuEventDate"
          name="dateTime"
          class="form-control"
          placeholder="Date"
          v-model="dateTime"
          @blur="$v.dateTime.$touch"
        />
        <label for="inpuEventDate">Date</label>
        <template v-if="$v.dateTime.$error">
          <p v-if="!$v.dateTime.required" class="alert alert-danger">Date is required!</p>
        </template>
      </div>

      
     
        <vue-editor    v-model="description"    @blur="$v.description.$touch"/>
        <label for="description">Description</label>
        <template v-if="$v.description.$error">
          <p v-if="!$v.description.required" class="alert alert-danger">Description is required!</p>
        </template>

      <div class="form-label-group">
        <input
          type="text"
          id="inputEventImage"
          name="imageURL"
          class="form-control"
          placeholder="Image"
          v-model="imageURL"
          @blur="$v.imageURL.$touch"
          autofocus
        /> 
        <label for="inputEventImage">Image</label>
            <template v-if="$v.imageURL.$error">
          <p v-if="!$v.imageURL.required" class="alert alert-danger">Image is required!</p>
          <p v-else-if="!$v.imageURL.isURL" class="alert alert-danger">Image url is not valid!</p>
        </template>
      </div>

      <button
        :disabled="$v.$invalid"
        class="btn btn-lg btn-dark btn-block"
        type="submit"
      >Organize it</button>

      <p class="mt-5 mb-3 text-muted text-center">© UniEnt - 2020.</p>
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { validationMixin } from "vuelidate";
import {
 required
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
//import axiosAuth from '@/axios-auth.js';
import eventsMixin from "@/mixins/events-mixin.js";

const isURL=helpers.regex('url', /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g);

export default {
  name: "app-event-create",
  mixins:[validationMixin, eventsMixin],
  data() {
    return {
      name: "",
      dateTime: "",
      description: "",
      imageURL: "",
      success: false
    };
  },
  validations: {
    name: {
      required
    },
    dateTime: {
      required,
    },
    description: {
      required
    },
    imageURL: {
      required,
      isURL
    }
  },
   beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  methods: {
  async  submitHandler() {
      this.$v.$touch();
      if (this.$v.$error) {
        return;
      }
      this.createEvent();
      //  try {
      //   const payload = {
      //     name: this.name,
      //     dateTime: this.dateTime,
      //     description:this.description,
      //     imageURL:this.imageURL,
      //     peopleInterestedIn:0,
      //     organizer:localStorage.getItem('username'),
      //   };
      //   const response = await axiosAuth.post('events', payload);
      //   console.log(response.data);
      //   console.log("Form is submitted!");
      //   this.$router.push("/events/all");
      //   this.success = true;
      // } catch (error) {
      //   console.log(error);
      //   this.$v.$reset();
      //}
      }
    },
  components:{
      VueEditor
      }
};
</script>

<style>
p.alert{
   width: 50%;
   margin: 0 auto;
   text-align: center;
   margin-top: 1%;
   margin-bottom: 3%;
}

p.alert-danger{
  
  text-decoration-color: red;
}
</style>