<template>
   <section id="sara-recommends">
      <div>
         <lottie id="pin" :options="defaultOptions" :height="350" :width="350" />
      </div>
      <div class="sections" style="margin: -100px 0 50px;">
         <h1 id="guess_where">Guess where? Anywhere!</h1>
      </div>
      <div class="sections" style="padding-bottom: 75px;">
         <b-button id="google_maps_button" class="sections" variant="outline-dark" target="_blank" href="https://bit.ly/2ylcMV4">
            <h3><span id="web">Click</span><span id="mobile">Tap</span> here to see places I recommend!</h3>
         </b-button>
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
   height: auto;
}

.sections{
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: 'Bebas Neue', sans-serif;
   letter-spacing: 2.5px;
}

#google_maps_button{
   padding-bottom: 0;
}

#mobile{
   display:none;
}

@media screen and (max-width: 1024px){
   #guess_where{
      font-size: 2rem;
   }
   #google_maps_button{
      width: 20rem;
   }
   #mobile{
      display:inline;
   }
   #web{
      display:none;
   }
}
</style>