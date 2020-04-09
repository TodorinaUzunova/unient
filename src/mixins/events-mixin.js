import axiosAuth from "@/axios-auth.js";

export default {
  data: function () {
    return {
      events: [],
      userEvents: [],
      selectedEventId: this.$route.params.id,
      selectedEvent: {
        type: Object,
        required: true
      },
      isLoading: true
      
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
    async getTheEventById() {
        try {
          const response = await axiosAuth.get(`events/${this.selectedEventId}`);
          console.log(this.$route.params.id);
          this.selectedEvent = response.data;
          console.log(response);
          this.isLoading = false;
        } catch (error) {
          console.log(error);
        }
      },
      async closeTheEvent() {
        try {
          const response = await axiosAuth.delete(
            `events/${this.selectedEventId}`
          );
          console.log(response);
          this.$router.push({ name: "eventsAll" });
          this.isLoading = false;
        } catch (error) {
          console.log(error);
        }
      },
      async joinTheEvent(){
        try {
            const payload = {
              name: this.selectedEvent.name,
              dateTime: this.selectedEvent.dateTime,
              description: this.selectedEvent.description,
              imageURL: this.selectedEvent.imageURL,
              peopleInterestedIn: (this.selectedEvent.peopleInterestedIn += 1),
              organizer: this.selectedEvent.organizer
            };
            const response = await axiosAuth.put(
              `events/${this.selectedEvent._id}`,
              payload
            );
            console.log(response.data);
            this.$router.push("events/all");
            this.isLoading = false;
          } catch (error) {
            console.log(error);
          }
      },
      async createEvent(){
        try {
            const payload = {
              name: this.name,
              dateTime: this.dateTime,
              description:this.description,
              imageURL:this.imageURL,
              peopleInterestedIn:0,
              organizer:localStorage.getItem('username'),
            };
            const response = await axiosAuth.post('events', payload);
            console.log(response.data);
            console.log("Form is submitted!");
            this.$router.push("/events/all");
            this.success = true;
          } catch (error) {
            console.log(error);
            this.$v.$reset();
          }
      },
      async getTheEventToEdit(){
        try {
            const response = await axiosAuth.get(`events/${this.selectedEventId}`);
            console.log(this.$route.params.id);
            this.selectedEvent = response.data;
            console.log(response);
             this.name=this.selectedEvent.name,
             this.dateTime=this.selectedEvent.dateTime,
             this.description=this.selectedEvent.description,
             this.imageURL=this.selectedEvent.imageURL,
             this.peopleInterestedIn=this.selectedEvent.peopleInterestedIn,
             this.organizer=this.selectedEvent.organizer
            this.isLoading = false;
          } catch (error) {
            console.log(error);
          }
      },
      async editEvent(){
        try {
            const payload = {
              name:this.name,
              dateTime:this.dateTime,
              description:this.description,
              imageURL:this.imageURL,
              peopleInterestedIn:this.peopleInterestedIn,
              organizer:localStorage.getItem('username')
            };
            const response = await axiosAuth.put(`events/${this.selectedEvent._id}`, payload);
            console.log(response.data);
            console.log("Form is editted!");
            this.$router.push("/events/all");
            this.success = true;
          } catch (error) {
            console.log(error);
            this.$v.$reset();
          }
      }
   
  },
};
