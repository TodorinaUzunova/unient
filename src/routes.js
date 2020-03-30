// routes could be here also separated in a file

import AppHome from '@/components/Home.vue';
import AppLogin from '@/components/authentication/Login.vue';
import AppRegister from '@/components/authentication/Register.vue';
import AppEventCreate from '@/components/EventCreate.vue';
import AppEventDetails from '@/components/EventDetails.vue';
import AppEventEdit from '@/components/EventEdit.vue';
import AppProfile from '@/components/user/Profile.vue';


const routes =  [
    { path: '/', component: AppHome },
    { path: '/home', component: AppHome },
    { path: '/login', component: AppLogin },
    { path: '/register', component: AppRegister },
    { path: '/create', component: AppEventCreate },
    { path: '/details/:id', component: AppEventDetails },
    { path: '/edit/:id', component: AppEventEdit },
    { path: '/profile', component: AppProfile },
   
]   