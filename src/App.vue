<template>
  <div id="app">
      <app-navigation></app-navigation>

      <router-view></router-view>
      <!-- <app-home></app-home> -->
      <!-- <app-event-list :events="events" ></app-event-list> -->
         <!-- <app-not-found></app-not-found> -->
         <!-- <app-event-create></app-event-create> -->
      <!-- <app-event-details></app-event-details> -->
      <!-- <app-event-edit></app-event-edit> -->
       <!-- <app-login></app-login> -->
      <!-- <app-register></app-register> -->
      <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavigation from './components/core/Navigation.vue';
//import AppRegister from './components/authentication/Register.vue';
//import AppLogin from './components/authentication/Login.vue';
import AppFooter from './components/core/Footer.vue';
//import AppHome from './components/Home.vue';
//import AppEventList from './components/EventList.vue';
//import AppNotFound from './components/NotFound.vue';
//import AppEventDetails from './components/EventDetails.vue';
//import AppEventEdit from './components/EventEdit.vue';
//import AppEventCreate from './components/EventCreate.vue';
//import AppProfile from '@/components/user/Profile.vue';



export default {
  name: 'App',
  data(){
    return {events: [
    {
      "_id": "5e1ef996b6cb0338c3abf919",
      "name": "Concert of ROLING STONES",
      "dateTime":"12/12/2020",
      "description": "Aliquip in reprehenderit eu exercitation sint sunt dolor ut culpa incididunt dolor nulla. Quis mollit et sit esse est quis nisi velit. Esse minim ad pariatur fugiat. Sint officia magna elit consequat consequat proident irure cupidatat commodo elit culpa mollit veniam amet. Magna culpa aliqua sint voluptate eu duis sint mollit est sit ut fugiat deserunt. Tempor aliqua eiusmod fugiat qui do eu amet dolore sunt. Nostrud est nisi amet enim deserunt et.",
      "imageURL": "https://www.rollingstone.com/wp-content/uploads/2018/06/led-zeppelin-iv-album-release-review-35c87652-3510-4318-9145-25a24db837f5.jpg",
    
    },
    {
      "_id": "5e1ef996a74fd9ecac5a8510",
      "name": "Concert of ADEL",
       "dateTime": "12/06/2020",
      "description": "Enim laboris Lorem esse exercitation commodo. Consectetur officia cillum officia minim est mollit dolor do aliquip consectetur incididunt ad veniam consectetur. Excepteur cupidatat pariatur occaecat amet exercitation eu dolore ut. Proident quis ullamco irure culpa cillum nostrud eu et cillum eu. Duis non velit magna mollit ea incididunt. Tempor sint dolore ad cillum incididunt. Nulla consequat voluptate commodo aute ut.",
      "imageURL": "https://www.rollingstone.com/wp-content/uploads/2018/06/led-zeppelin-iv-album-release-review-35c87652-3510-4318-9145-25a24db837f5.jpg?",
     
    },
    {
      "_id": "5e1ef99652de0e99f5f93fff",
      "name": "Concert of BJORN",
      "dateTime": "12/08/2020",
      "description": "In dolore enim culpa duis minim qui deserunt aliquip voluptate et ipsum ut eu labore. Nisi deserunt cupidatat reprehenderit irure officia occaecat sint. Quis adipisicing ut ut ipsum exercitation tempor ut aute. Magna occaecat exercitation ea excepteur consequat cillum. Eu aliquip fugiat eiusmod et id veniam aute voluptate voluptate anim aute in sit. Qui do ut ipsum eu occaecat sint sint id ullamco occaecat adipisicing laborum laborum. Ex aliquip reprehenderit cillum officia est nostrud dolor.",
      "imageURL": "https://www.rollingstone.com/wp-content/uploads/2018/06/led-zeppelin-iv-album-release-review-35c87652-3510-4318-9145-25a24db837f5.jpg"
    },
    {
      "_id": "5e1ef996c17853358e6da155",
      "name": "Concert of ARIANA GRANDE",
      "dateTime": "22/05/2020",
      "description": "Qui est officia consequat dolor qui. Eu dolor magna quis eiusmod commodo reprehenderit cupidatat occaecat nulla. Enim veniam velit incididunt et est duis sit exercitation ad. Mollit occaecat tempor duis nostrud ut irure irure. Laboris exercitation pariatur exercitation laborum voluptate. Mollit Lorem aute reprehenderit fugiat non magna cupidatat proident ut cillum voluptate aliqua ipsum ad. In incididunt id occaecat sunt eiusmod veniam occaecat proident.",
      "imageURL": "https://www.rollingstone.com/wp-content/uploads/2018/06/led-zeppelin-iv-album-release-review-35c87652-3510-4318-9145-25a24db837f5.jpg",
    
    },
   
  ]
  }},
  components: {
    AppNavigation,
    //AppRegister,
    //AppLogin,
    AppFooter,
    //AppHome,
    //AppEventList,
    // AppNotFound,
    //AppEventCreate,
    //AppEventDetails,
    //AppEventEdit,
    //AppProfile
    

  }
}
</script>

<style>
.container {
  max-width: 960px;
}

a{
  text-decoration: none;
  cursor:pointer;
}


/*
 * Custom translucent site header
 */

.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}

/*
 * Dummy devices (replace them with your own or something else entirely!)
 */

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}


/*
 * Extra utilities
 */

.flex-equal > * {
  -ms-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    flex: 1;
  }
}

.overflow-hidden { overflow: hidden; }

footer p{
    margin-left: 1%;
}


.eventPicture{
  /* width: 500px;
  height: auto; */
}

.eventDetails{
    display: block;
    border:2px solid black;
    color: black;      
    width: 25%;
    margin: 1.5rem auto 48px auto;      
    text-align: center;      
    border-radius: 15px;    
    font-size: 18px;
    padding: 0.5rem 0;  
    font-weight: bold;
}

a.eventDetails:hover{
  /* text-decoration: underline;
  color: black; */
  background: #333;
  color: white;
  border: 2px solid #333;
}

form{
    width: 80%;
    margin: 0 auto;
}

input.form-control{
    width: 50%;
    margin: 0 auto;
}

textarea.form-control{
    width: 50%;
    margin: 0 auto;
    resize: none;
    height: 20vh;
}

form label{
  display:block;
  margin: 0 auto;
  width: 50%;
  text-align: center;
  margin-bottom: 2%;
}

.btn{

  width: 25%;
  margin: 0 auto;
  color: white;
}

.alreadyUser{
   margin: 1%;
}


.error-template{
   margin: 0 auto;
   text-align: center;
}

#fouronefour{
   margin: 0 auto;
   width: 38%;
}

.alert{
   width: 100%;
   margin: 0 auto;
   text-align: center;
   margin-top: 1%;
   margin-bottom: 3%;
}

.alert-danger{
  
  text-decoration-color: red;
}


.imageContainer{
   border:2px solid black;
   border-radius: 21px;
}

.event-details{
   padding: 2%;
   margin: 2%;
}

.infoType{
   text-decoration: underline;
}

.event-description{
   font-style: italic;
}

/* ------------------------------------------------------------------------------------------------------------------------ */

#successBox, #loadingBox, #errorBox{
display: none;
}

nav{
margin-bottom: 2%;
}

.eventPlaceholder{
flex: 0 1 45%;
margin-bottom: 20px;
}

#eventsHolder{
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
}

.img{
  display: block;
  position: relative;
  overflow: hidden;
  border: 1px solid #000;  /* border */
  background: #FFF;
  box-shadow: 0 0 0.9rem 0 rgba(0,0,0,0.3);
}


.img:before {
display: block;
content: '';
padding-top: 100%;
}

img {
display: block;
width: 100%;
height: auto;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

}

@media screen and (max-width:900px){
.eventPlaceholder{
  flex: 0 1 80%;
 
}
}

.profile-img{
  margin: 0 auto;
  width: 150px;
  height: auto;
  position: static;
  top: 0;
  left: 0;
  transform: none;
}

.profile-info{
  padding: 0;
}

.details-img{
  width: 40%;
  height: auto;
  margin: 0 auto;
  position: static;
  top: 0;
  left: 0;
  transform: none;
  border:1px solid black;
}

.no-found-picture, .home-event-picture{
  top:0;
  left:0;
  transform: none;
  width: 100%;
  position: static;
  margin: 0 auto;
}


</style>
