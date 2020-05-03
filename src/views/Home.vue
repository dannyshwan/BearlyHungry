<template>
    <section id='home'>
        <div class='home-title'>
            <div id="highlight">
                <p id="bearly">Bearly</p>
                <img src="../assets/img/brush-stroke.png">
                <p id="hungry">Hungry</p>
            </div>
            <vue-typed-js
                id="typewriter"
                :strings="[
                    'Welcome to the bear hub', 
                    'Come join me to eat and hibernate',
                    'Eat. Pray. Love'
                ]"
                :typeSpeed="50"
                :loop="true"
                :backSpeed="50"
                :backDelay="5000"
            >  
                <span class="typing"></span>
            </vue-typed-js>
        </div>
    </section>
</template>

<script>
import { $ } from '../main';
export default {
    name: 'home',
    mounted(){
        $(document).ready(function(){
            
            $('#highlight').delay(500).fadeTo(100, 1);
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

@font-face {
  font-family: "aaleyah";
  src: url('../assets/fonts/aaleyah.normal.otf');
}

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
    float: left;
    left: 25vw;
    opacity: 0;
    animation: brushstroke 0.5s cubic-bezier(0.5,0.62,0.36,0.99);
    animation-delay: 0.3s;
}

#highlight p{
    padding: 0;
    text-shadow: 0 0 2.5px black;
}

#highlight img{
    width: 50vw;
}

#bearly{
    font-family: 'aaleyah', sans-serif; 
    font-size: 10rem; 
    opacity: 0;
    margin-bottom: -12.5rem;
    color: #ffdc68;
    -webkit-transform: translateY(50px);
    -ms-transform: translateY(50px);
    transform: translateY(50px);
    transition: transform 0.4s ease-out, opacity 0.4s ease-in-out;
}

#hungry{
    font-family: 'Bebas Neue', sans-serif; 
    font-size: 5rem; 
    opacity: 0; 
    margin-top: -5.5rem;
    letter-spacing: 10px;
    color:#ffd591;
}

#typewriter{
    display: inline-block;
    transform: translateY(125px);
    letter-spacing: 5px;
    opacity: 0;
    width: 100%;
    font-size: 1.5rem;
    color: rgb(26, 26, 26);
    text-shadow: 0 0 5px rgb(241, 241, 241);
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

@media screen and (max-width: 1400px){

    #bearly{
        margin-bottom: -10.5rem;
    }
    #hungry{
        margin-top: -4.5rem;
    }
}

@media screen and (max-width: 1024px){
    #bearly{
        margin-bottom: -11.5rem;
    }
    #highlight{
        left: 15vw;
        animation: brushstroke_1024 0.5s cubic-bezier(0.5,0.62,0.36,0.99);
        animation-delay: 0.3s;
    }
    #highlight img{
        width: 70vw;
    }

    @keyframes brushstroke_1024{
        0% { 
            width: 0; 
            opacity: 0;
        }
        75% { opacity: 1; }
        100% { width: 70vw; }
    }

}
@media screen and (max-width: 850px){
    #bearly{
        font-size: 9rem;
        margin-bottom: -8.5rem;
    }
    #hungry{
        font-size: 4rem;
        margin-top: -4rem;
    }
}

@media screen and (max-width: 750px){

    #bearly{
        font-size: 7rem;
        margin-bottom: -7.5rem;
    }
    #hungry{
        font-size: 3rem;
        margin-top: -3rem;
        letter-spacing: 12.5px;
    }
    #typewriter{
        transform: translateY(25px);
    }
}

@media screen and (max-width: 600px){

    #bearly{
        font-size: 6rem;
        margin-bottom: -6rem;
    }
    #hungry{
        font-size: 2.5rem;
        margin-top: -2.5rem;
        letter-spacing: 10px;
    }

    #highlight{
        left: 5vw;
        animation: brushstroke_500 0.5s cubic-bezier(0.5,0.62,0.36,0.99);
        animation-delay: 0.3s;
    }
    
    #highlight img{
        width: 90vw;
    }

    #typewriter{
        font-size: 1rem;
    }

    @keyframes brushstroke_500{
        0% { 
            width: 0; 
            opacity: 0;
        }
        75% { opacity: 1; }
        100% { width: 90vw; }
    }
}

@media screen and (max-width: 400px){
    #bearly{
        font-size: 5.5rem;
        margin-bottom: -5.5rem;
    }
    #hungry{
        font-size: 2rem;
        margin-top: -2rem;
    }
}
</style>