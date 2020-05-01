<template>
    <section id='home'>
        <div class='home-title'>
            <div id="highlight">
                <p id="bearly">Bearly</p>
                <img src="../assets/img/brush-stroke.png" style="width: 50vw;">
                <p id="hungry" style="color:#ffd591">HUNGRY</p>
            </div>
            <!--
            <vue-typed-js
                id="typewriter"
                :strings="[
                    'This is the first sentence', 
                    'I am the second sentence'
                ]"
                :typeSpeed="50"
                :loop="true"
                :backSpeed="50"
                :backDelay="5000"
            >  
                <span class="typing"></span>
            </vue-typed-js>-->
        </div>
    </section>
</template>

<script>
import { $ } from '../main';
export default {
    name: 'home',
    mounted(){
        $(document).ready(function(){
            
            $('#highlight').delay(500).fadeTo(500, 1);
            setTimeout( revealTitle, 800 );
            $('#typewriter').delay(2000).fadeTo(500, 1);
        });
        function revealTitle(){
            $('#bearly').css({
                "-webkit-transform":"translateY(0)",
                "-ms-transform":"translateY(0)",
                transform: "translateY(0)",
                opacity: "1"
            });
            $('#hungry').delay(400).fadeTo(500, 1);
        }

    }
}

</script>

<style>

/* Components */
#home{
    background: url(../assets/img/homebackground.jpg) no-repeat center center;
    background-size: cover;
    color: whitesmoke;
    width: 100%;
    display: table;
}


.home-title{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}

#highlight {
    position: relative;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
    float: left;
    left: 25vw;
    opacity: 0;
    animation: brushstroke 0.5s cubic-bezier(0.5,0.62,0.36,0.99);
    animation-delay: 0.3s;
}

#highlight p{
    padding: 0;
    text-shadow: 0 0 5px black;
    color: #ffe58f;
}

#bearly{
    font-family: 'Dancing Script', sans-serif; 
    font-size: 11rem; 
    opacity: 0;
    margin-bottom: -12.5rem;
    -webkit-transform: translateY(50px);
    -ms-transform: translateY(50px);
    transform: translateY(50px);
    transition: transform 0.4s ease-out, opacity 0.4s ease-in-out;
}

#hungry{
    font-family: 'Bebas Neue', sans-serif; 
    font-size: 5rem; 
    opacity: 0; 
    margin-top: -6rem;
    letter-spacing: 15px;
}

#typewriter{
    display: inline-block;
    transform: translateY(75px);
    letter-spacing: 5px;
    opacity: 0;
    width: 100%;
    font-size: 1.5rem;
}

/* Animation & media resizing */

@keyframes brushstroke {
    0% { 
        width: 0; 
        opacity: 0;
    }
    75% { opacity: 1; }
    100% { width: 50vw; }
}
@media screen and (max-width: 1024px){
}

@media screen and (max-width: 500px){
    
}
</style>

