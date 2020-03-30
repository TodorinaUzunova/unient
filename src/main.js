import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from '@/plugins/router' // path to router
// import axios from 'axios'


// const baseUrl = 'https://baas.kinvey.com';
// const appKey = '';
// const appSecret = '';

// const config = {
//     baseURL: baseUrl,
//     headers: {},
// };


// axios.interceptors.request.use(  function (config) {
//     if (
//         (config.url === 'login' || config.url === '') &&
//         config.method === 'post'
//     ) {
//         config.baseURL = `${baseUrl}/user/${appKey}`;
//         config.headers = {
//             ...config.headers,
//             'Content-Type': 'application/json',
//             Authorization: 'Basic ' + btoa(`${appKey}:${appSecret}`)
//         };
//     } else {
//         const token = localStorage.getItem('token');
//         config.baseURL = config.url === '_logout' ? `${baseUrl}/user/${appKey}` : `${baseUrl}/appdata/${appKey}`;
//         config.headers = {
//             ...config.headers,
//             'Content-Type': 'application/json',
//             Authorization: 'Kinvey ' + token
//         };
//     }
//     return config;
// }, function (error) {
//   return Promise.reject(error);
// });



// axios.interceptors.response.use(function (error) {
//     if (error.response.status === 401) {
//        return  `${error.response.statusText}: ${error.response.data.description}`;
    
//     } else if (error.response.status === 500) {
//       return `${error.response.statusText}: Server Error`;

//     } else {
//       return `${error.response.statusText}`;

//     }

//     return Promise.reject(error);
// });


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuetify
}).$mount('#app')
