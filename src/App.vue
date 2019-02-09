<template>
  <div id="app" >
    
    <main style="margin-top: 20px;" >
      <b-container fluid>
        <!-- Content here -->
        <b-row auto>
            <b-col xl="12">
              <router-view></router-view>
            </b-col>
        </b-row>
      </b-container>
      
    </main>
    <!-- navbar-1.vue -->
  </div>
</template>



</style>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      variant:'outline-primary'
    }
  },

}
</script>

<style>
.bgDark{
  background : rgba(58, 128, 197, 0.48) !important
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 12px;
}
</style>
