<template>
   <section id="sara-recommends">
      <div>
         <lottie id="pin" :options="defaultOptions" :height="350" :width="350" />
      </div>
      <div id="guess_where" class="recomendations_sections">
         <h1>Guess where? Anywhere!</h1>
      </div>
      <div class="recomendations_sections">
         <a target="_blank" href="https://bit.ly/2ylcMV4">
            <a-button id="button" type="primary">
               Check out what I recommend!
            </a-button>
         </a>
      </div>
   </section>
</template>

<script>
import lottie from 'vue-lottie';
import * as animationData from '../assets/json/location_pin.json';
export default {
   name:'sara-recommends',
   components: {
      lottie
   },
   data(){
      return {
         defaultOptions: {animationData: animationData.default},
         animationSpeed: 1,
      }
   }
}
</script>

<style>
#sara-recommends{
   background-color: rgb(145, 248, 241);
   min-height: 48rem;
   height: auto;
}

.recomendations_sections{
   display: flex;
   justify-content: center;
   align-items: center;
}

#guess_where{
   font-family: 'Bebas Neue', sans-serif;
   margin: -100px 0 50px;
}

#button{
   width: 25rem;
   height: 10rem;
}
</style>