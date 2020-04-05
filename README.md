# The is the "UniEnt" project

## Idea of the project:
The project "UniEnt" is created with the help of the Vue Cli-js front-end framework. This is an application for presenting and creating of events, editing and deleteing of the old ones. There is separation of the access to a component - the not-logged users can only access the home, register and login page, and the athenticated users possess the whole rights to create, see, edit and delete them.

## Integrated libraries:
Into the project has been integrated different help libraries: Vue 2 Editor. It has been installed also the Vuetify library, which gives access to ready, right to use styled components. In this project with its help is made the footer. Vue Router made possible the navigation through the project's components and sites, to define the routes. The validation of the fields in the forms is made with Vuelidate.

## Structure:
It has been made separation of the structure of the project: folder for authentication module, core and shared module. There are different components for the different features for listing, creating, editing and deleting of events.It has the node modules folder for npm.

## Axios:
For the requests has been installed Axios, which with its API made easy to make calls to the backend server. By the creation of the instances of Axios(auxios-auth.js module) are used interceptors, which to hold the needed information for every request on one place.



# unient

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
