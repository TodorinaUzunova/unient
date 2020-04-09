<template>
  <div>
    <div v-if="success">Login successfull!</div>
    <form @submit.prevent="handleLogin">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        <p>You are on one step of awesome events!</p>
      </div>

      <div class="form-label-group">
        <input
          type="text"
          id="inputUsername"
          name="username"
          v-model.trim="username"
          @blur="$v.username.$touch"
          class="form-control"
          placeholder="Username"
          autofocus
        />
        <label for="inputUsername">Username</label>
        <template v-if="$v.username.$error">
          <p v-if="!$v.username.required" class="alert alert-danger">Username is required!</p>
          <p
            v-else-if="!$v.username.email"
            class="alert alert-danger"
          >Username should be a valid email!</p>
        </template>
      </div>

      <div class="form-label-group">
        <input
          type="password"
          id="inputPassword"
          name="password"
          v-model.lazy="password"
          @blur="$v.password.$touch"
          class="form-control"
          placeholder="Password"
        />
        <label for="inputPassword">Password</label>
        <template v-if="$v.password.$error">
          <p v-if="!$v.password.required" class="alert alert-danger">Password is required!</p>
          <p
            v-else-if="!$v.password.minLength || !$v.password.maxLength"
            class="alert alert-danger"
          >Password should be between 5 and 16 symbols!</p>
          <p v-else-if="!$v.password.alphanumeric">Password must contain only letters and digits!</p>
        </template>
      </div>

      <button class="btn btn-lg btn-dark btn-block" type="submit">Login</button>

      <div class="text-center mb-4">
        <p class="alreadyUser">
          Don't have account? Then just
          <router-link to="/register">Register</router-link>!
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">© UniEnt - 2020.</p>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
import userMixin from "@/mixins/user-mixin.js";

const alphanumeric = helpers.regex("alphanumeric", /^[A-Za-z0-9]*$/);
export default {
  name: "app-login",
  mixins: [validationMixin, userMixin],
  props: {
    isLoggedIn: Boolean
  },
  data() {
    return {
      username: "",
      password: "",
      success:false
    };
  },
  validations: {
    username: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(16),
      alphanumeric
    }
  },
  methods: {
    async handleLogin() {
      // Login using fetch/axios/vue-resource
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const payload = {
        username: this.username,
        password: this.password
      };
      this.login(payload);
    }
  }
};
</script>

<style scoped>
form {
  width: 30%;
  margin: 0 auto;
  text-align: center;
}
h1 {
  color: blue;
}

input.form-control {
  width: 100%;
  margin: 0 auto;
}
div.row form.form-inline {
  text-align: center;
}

textarea.form-control {
  width: 50%;
  margin: 0 auto;
  resize: none;
  height: 20vh;
}

form label {
  display: block;
  margin: 0 auto;
  width: 50%;
  text-align: center;
  margin-bottom: 2%;
}

.btn {
  width: 43%;
  margin: 0 auto;
  color: white;
}
p.alert {
  width: 100%;
}
.alreadyUser {
  margin: 1%;
}
</style>