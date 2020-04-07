import axiosAuth from "@/axios-auth.js";

export default {
  data: function () {
    return {
      events: [],
      userEvents: [],
      
    };
  },
  methods: {
    async getAllEvents() {
      try {
        const response = await axiosAuth.get("events");
        const allEvents = response.data;
        console.log(allEvents);
        for (const id in allEvents) {
          this.events.push({ id, ...allEvents[id] });
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getUserEvents() {
      try {
        const response = await axiosAuth.get(
          `events/?query={"_acl.creator":"${this.userId}"}`
        );
        console.log(response.data);
        this.userEvents = response.data;
      } catch (error) {
        console.log(error);
      }
    },
   
  },
};
