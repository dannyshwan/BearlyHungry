<template>
   <div id="admin">
      <b-button class="options" variant="outline-dark">
         Add/Remove Restaurant Locations
      </b-button>
      <b-button class="options" variant="outline-dark" disabled>
         View Analytics
      </b-button>
   </div>
</template>
<script>
export default {
   name:"admin",
   data() {
      return{
         height: "100%",
         inputPassword: "",
         formState: null
      }
   },
   computed: {
      authHeight: function () {
         return this.height;
      }
   },
   methods:{
      auth: function(password) {
         
         if(password == "admin"){
            this.formState = true;
            this.height = 0;
         }
         else{
            this.formState = false;
         }
      }
   }
}
</script>

<style scoped>
   #admin{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      z-index: -1;
   }
   #password{
      width: 50vw;
      margin: 50px;
   }
   .options{
      margin: 5rem;
      font-size: 2.5rem;
      padding: 50px;

   }
</style>