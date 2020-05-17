<template>
   <div id="auth" v-bind:style="{ height: authHeight }">
      <h1>Bearly Hungry Admin Console</h1>
      <b-form-input id="password" v-model="inputPassword" :state="formState" placeholder="Password" @keyup.enter="auth(inputPassword)"></b-form-input>
      <b-button variant="outline-dark" v-on:click="auth(inputPassword)">
         Submit
      </b-button>
   </div>
</template>
<style scoped>
   #auth{
      position: fixed;
      display: inherit;
      justify-content: inherit;
      align-items: inherit;
      flex-direction: column;
      background: whitesmoke;
      top:0;
      left:0;
      width: 100%;
      overflow: hidden;
      transition: height 0.5s cubic-bezier(.79,.01,.36,.99);
   }
</style>