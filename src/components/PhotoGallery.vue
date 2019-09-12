<template>
    <div id='photoGallery'>
        <agile :nav-buttons="false" fade="fade" :autoplay-speed="5000" :speed="2500" autoplay="autoplay" pause-on-photo-hover="pause-on-photo-hover" pause-on-dots-hover="pause-on-dots-hover">
            <img class='slide' src="../assets/bear2.jpg">
            <img class='slide' src="../assets/bear3.jpg">
            <img class='slide' src="../assets/bear1.jpg">
            <img class='slide' src="../assets/bear5.jpg">
            <img class='slide' src="../assets/bear6.jpg">
        </agile>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile';
export default {
    name: 'photoGallery',
    components: {
        agile:VueAgile
    }
}
</script>

<style>
#photoGallery{
    background-color: rgba(250, 215, 73, 0.397);
}

.agile__dots{
    bottom: 10px;
    left: 50%;
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    
}
.agile__dot{
    margin: 0 10px;
    text-align: center;
}

.agile__dot button{
    background-color: transparent;
    height: 15px;
    width: 15px;
    border: 1px solid whitesmoke;
    transition-duration: 0.3s;
    box-shadow: 0 0 5px black;
    border-radius: 50%;
}

.agile__dot--current button {
    background-color:whitesmoke;
}

.agile__dot:hover button{
    background-color:whitesmoke;
}

.slide{
    display: block;
    object-fit: cover;
    height: 59em;
    width: 75%;
}
</style>