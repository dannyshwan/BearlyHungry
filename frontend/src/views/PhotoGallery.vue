<template>
   <section id="photoGallery">
      <div>
         <lottie :options="defaultOptions" :height="200" :width="200" />
      </div>
      <div class="sections" style="margin: -50px 0 0">
         <h1>Photo Gallery</h1>
      </div>
      <div>
         <div id="container">
            <img class="preview-img-item" v-for="(item, index) in items" v-bind:key="item.id" :src="item.src" @click="$photoswipe.open(index, items)">
         </div>
      </div>
      <br>
      <br>
      <div id="feature" class="sections">
         <h1>Feature of the month</h1>
         <instagram-embed
            v-if="feature"
            :url="feature"
            :max-width=425
            :hide-caption=true
            :class-name="'instagram-embed'"
         />
      </div>
   </section>
</template>

<script>
import lottie from 'vue-lottie';
import axios from 'axios';
import * as animationData from '../assets/json/coffee.json';
import InstagramEmbed from 'vue-instagram-embed';

export default {
   name: 'photoGallery',
   components: {
      lottie,
      InstagramEmbed
   },
   data(){
      return {
         defaultOptions: {animationData: animationData.default},
         animationSpeed: 1,
         feature: null,
         items: [
            {
                src: require("../assets/img/gallery/gallery1.jpg"),
                w: 700,
                h: 1066,
            },
            {
                src: require("../assets/img/gallery/gallery2.jpg"),
                w: 1600,
                h: 1066,
            },
            {
                src: require("../assets/img/gallery/gallery3.jpg"),
                w: 1600,
                h: 1066,
            },
            {
                src: require("../assets/img/gallery/gallery4.jpg"),
                w: 1600,
                h: 1066,
            },
            {
                src: require("../assets/img/gallery/gallery5.jpg"),
                w: 1600,
                h: 1066,
            },
            {
                src: require("../assets/img/gallery/gallery6.jpg"),
                w: 700,
                h: 1066,
            },
         ]
       }
   },
   created(){
      axios.get(`${process.env.VUE_APP_API_URL}/api/feature`)
      .then( res => {
         this.feature = res.data.current_feature
      })
   }
}
</script>

<style scoped>

#photoGallery{
   background-color: rgba(250, 215, 73, 0.397);
   min-height: 90vh;
   height: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

#feature{
   width: 100%;
   display: inherit;
   flex-direction: column;
   padding-bottom: 50px;
}

#container{
   height: auto;
   display: flexbox;
   flex-direction: row;
   text-align: center;
   width: 75vw;
}

.preview-img-item{
   margin: 1rem 1rem;
   height: 15rem;
   border-radius: 1%;
   box-shadow: 0 0 5px black;
}

.instagram-embed{
   width: 25vw;
   min-width: 25rem;
   display: inherit;
   justify-content: inherit;
}

.preview-img-item:hover {
   cursor: pointer;
}

@media screen and (max-width: 500px){
   .preview-img-item{
      height: 10rem;
   }
   .instagram-embed{
      min-width: 20.5rem;
   }
}
</style>