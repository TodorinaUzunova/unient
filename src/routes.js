// routes could be here also separated in a file

import AppHome from '@/components/Home.vue';
import AppLogin from '@/components/authentication/Login.vue';
import AppRegister from '@/components/authentication/Register.vue';
import AppEventCreate from '@/components/even/EventCreate.vue';
import AppEventDetails from '@/components/even/EventDetails.vue';
import AppEventEdit from '@/components/even/EventEdit.vue';
import AppProfile from '@/components/user/Profile.vue';


const routes =  [
    { path: '/', component: AppHome },
    { path: '/home', component: AppHome },
    { path: '/login', component: AppLogin },
    { path: '/register', component: AppRegister },
    { path: '/event/create', component: AppEventCreate },
    { path: '/event/details/:id', component: AppEventDetails },
    { path: '/event/edit/:id', component: AppEventEdit },
    { path: '/user/profile/:id', component: AppProfile },
   
]   