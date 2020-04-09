import axiosAuth from "@/axios-auth.js";

export default {
  data: function () {
    return {
      isLoading: true,
      success: false,
    };
  },
  methods: {
    async login(payload) {
      try {
        const response = await axiosAuth.post("login", payload);
        console.log(response.data);
        localStorage.setItem("token", response.data._kmd.authtoken);
        // localStorage.setItem("userInfo", JSON.stringify(response.data));
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("userId", response.data._id);
        console.log("Form is submitted!");
        this.$router.push("/events/all");
        this.success = true;
      } catch (error) {
        console.log(error);
        this.$v.$reset();
      }
    },
    async register(payload) {
      try {
        const response = await axiosAuth.post("", payload);
        console.log(response.data);
        this.success = true;
        console.log("Form is submitted!");
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
        this.$v.$reset();
      }
    },
  },
};
