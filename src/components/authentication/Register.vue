<template>
  <div>
    <div v-if="success">Registration successfull!</div>
    <form @submit.prevent="handleRegister">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        <p>Register yourself once and create/join awesome events!</p>
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
          autocomplete="username"
        />
        <label for="inputUsername">Username</label>
        <template v-if="$v.username.$error">
          <p v-if="!$v.username.required" class="alert alert-danger">Username is required!</p>
          <p v-if="!$v.username.email" class="alert alert-danger">Username should be a valid email!</p>
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
          autocomplete="new-password"
        />
        <label for="inputPassword">Password</label>
        <template v-if="$v.password.$error">
          <p v-if="!$v.password.required" class="alert alert-danger">Password is required!</p>
          <p
            v-else-if="!$v.password.minLength || !$v.password.maxLength"
            class="alert alert-danger"
          >Password should be between 5 and 16 symbols!</p>
          <p
            v-else-if="!$v.password.alphanumeric"
            class="alert alert-danger"
          >Password must contain only letters and digits!</p>
        </template>
      </div>

      <div class="form-label-group">
        <input
          type="password"
          id="inputRePassword"
          name="rePassword"
          class="form-control"
          placeholder="Re-Password"
          v-model="rePassword"
          @blur="$v.rePassword.$touch"
          autocomplete="new-password"
        />
        <label for="inputRePassword">Re-Password</label>
        <template v-if="$v.rePassword.$error">
          <p v-if="!$v.rePassword.sameAs" class="alert alert-danger">Passwords must match!</p>
        </template>
      </div>

      <button :disabled="$v.$invalid" class="btn btn-lg btn-dark btn-block" type="submit">Register</button>

      <div class="text-center mb-4">
        <p class="alreadyUser">
          Already have account? Then just
          <router-link to="/login">Login</router-link>!
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
  email,
  sameAs
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
import userMixin from "@/mixins/user-mixin.js";

// function sameAs(field) {
//   return function(value) {
//     return this[field] === value;
//   };
// }

const alphanumeric = helpers.regex("alphanumeric", /^[A-Za-z0-9]*$/);
export default {
  name: "app-register",
  mixins: [validationMixin, userMixin],
  data() {
    return {
      username: "",
      password: "",
      rePassword: "",
      success: true,
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
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  },
  methods: {
    async handleRegister() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      const payload = {
        username: this.username,
        password: this.password
      };
      this.register(payload);
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
