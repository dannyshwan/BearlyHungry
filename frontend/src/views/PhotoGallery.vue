<template>
    <section id="photoGallery">
        <div>
            <lottie :options="defaultOptions" :height="200" :width="200" />
        </div>
        <div class="sections" style="margin: -50px 0 0">
            <h1>Photo Gallery</h1>
        </div>
        <div id="gallery">
            <div id="container">
                <img class="preview-img-item" v-for="(item, index) in items" v-bind:key="item.id" :src="item.src" @click="$photoswipe.open(index, items)">
            </div>
        </div>
    </section>
</template>

<script>
import lottie from 'vue-lottie';
import * as animationData from '../assets/json/coffee.json';

export default {
    name: 'photoGallery',
    components: {
        lottie
    },
    data () {
        return {
            defaultOptions: {animationData: animationData.default},
            animationSpeed: 1,
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
    }
}
</script>

<style scoped>

#photoGallery{
    background-color: rgba(250, 215, 73, 0.397);
    min-height: 90vh;
    height: auto;
}

#gallery{
    display: flex;
    justify-content: center;
    align-items: center;
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

.preview-img-item:hover {
    cursor: pointer;
}

@media screen and (max-width: 500px){
    .preview-img-item{
        height: 10rem;
    }
}
</style>