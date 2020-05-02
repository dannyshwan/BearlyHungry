<template>
    <section id="photoGallery">
        <div>
            <lottie id="coffee-cup" :options="defaultOptions" :height="225" :width="225" />
        </div>
        <div id="gallery">
            <div id="container">
                <v-photoswipe-gallery id="images" :isOpen="isOpenGallery" :options="optionsGallery" :items="items">
                    <img slot-scope="props" :src="props.item.src" alt="pictures"/>
                </v-photoswipe-gallery>
            </div>
        </div>
    </section>
</template>

<script>
import { PhotoSwipeGallery } from 'v-photoswipe';
import lottie from 'vue-lottie';
import * as animationData from '../assets/json/coffee.json';

export default {
    name: 'photoGallery',
    components: {
        'v-photoswipe-gallery': PhotoSwipeGallery,
        lottie
    },
    data () {
        return {
            defaultOptions: {animationData: animationData.default},
            animationSpeed: 1,
            isOpen: false,
            isOpenGallery: false,
            options: {
                index: 0
            },
            optionsGallery: {},
            items: [
                {
                    src: require("../assets/img/gallery1.jpg"),
                    w: 700,
                    h: 1066,
                },
                {
                    src: require("../assets/img/gallery2.jpg"),
                    w: 1600,
                    h: 1066,
                },
                {
                    src: require("../assets/img/gallery3.jpg"),
                    w: 1600,
                    h: 1066,
                },
                {
                    src: require("../assets/img/gallery4.jpg"),
                    w: 1600,
                    h: 1066,
                },
                {
                    src: require("../assets/img/gallery5.jpg"),
                    w: 1600,
                    h: 1066,
                },
                {
                    src: require("../assets/img/gallery6.jpg"),
                    w: 700,
                    h: 1066,
                },

            ]
        }
    },
    methods: {
        showPhotoSwipe (index) {
        this.isOpen = true
        this.$set(this.options, 'index', index)
        },
        hidePhotoSwipe () {
        this.isOpen = false
        },
    }
}
</script>

<style>

#photoGallery{
    background-color: rgba(250, 215, 73, 0.397);
    min-height: 50rem;
    height: auto;
}

#gallery{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

#container{
    height: auto;
    display: flexbox;
    flex-direction: row;
    text-align: center;
    width: 75vw;
}

#images{
    text-align: center;
}

#images img{
    margin: 1rem 1rem;
    height: 15rem;
    border-radius: 5%;
    box-shadow: 0 0 5px black;
    transition: box-shadow 0.3s ease;
}

#images img:hover{
    box-shadow: 0 0 5px #08979c;
}

@media screen and (max-width: 500px){
    #images img{
        height: 10rem;
    }
}
</style>