<template>
<nav class="site-header sticky-top py-1">
   <div class="topnav"> 
      <router-link to="/" class="py-2" exact>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          role="img"
          viewBox="0 0 24 24"
          focusable="false"
        >
          <title>UniEnt Home</title>
          <circle cx="12" cy="12" r="10"></circle>
          <path
            d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"
          ></path>
        </svg>
      </router-link>
      <router-link to="/create" class="py-2 d-none d-md-inline-block">Organize Event</router-link>
      <router-link to="/profile" class="py-2 d-none d-md-inline-block" >USERNAME</router-link>
      <a class="py-2 d-none d-md-inline-block" href="#">Logout</a>
      <router-link to="/login" class="py-2 d-none d-md-inline-block">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-navigation',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 960px;
}


a {
  display: inline-block;
  text-decoration: none;
  font-size: 15px;
  padding: 14px;
  cursor: pointer;
}
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #999;
  text-align: center;
  padding: 16px 20px;
  text-decoration: none;
  font-size: 20px;
}
.topnav a:hover {
     color: #fff;;
}


.topnav-right {
  float: right;
}
</style>
