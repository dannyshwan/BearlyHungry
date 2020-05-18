<template>
    <section id='about'>
        <div>
            <img id='sara' src='../assets/img/sara.jpg'>
        </div>
        <div id='about_section'>
            <img id="tsumtsum" src="../assets/img/poohtsumtsum.png" style="width: 5rem;"/>
            <div id='about_me'>
                <p>
                    Hello! My name is Sara, and I am a food and media blogger on @bearly_hungry. 
                    I love to eat (of course), cook, and find hidden gems locally and around the world! 
                    I enjoy trying varieties of different foods, and I'm always down to have cup of cafe with you! 
                    Come connect with me, and join me on the beary fun adventure!
                </p>
            </div>
            <div id='contact'> 
                <div style="padding: 5% 0">
                    <a class="links" href="https://www.instagram.com/bearly_hungry/"><a-icon type="instagram" theme="outlined" /></a>
                    <a class="links" href="mailto:bearlyhungry@gmail.com"><a-icon type="mail" theme="outlined" /></a>
                </div>
                <div id="brand-image"><img src="../assets/img/brand.png" alt="brand-image"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'about',
}
</script>

<style>
#about{
    display: flex;
    min-height: 90vh;
    height: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#sara{
    width: 22.5vw;
    margin-right: 5%;
    box-shadow: 10px 10px 0 rgb(245, 201, 225);
    transition: 0.3s;
    border-radius: 5%;
}

#sara:hover{
    box-shadow: 0.5vw 0.5vw 0 rgb(245, 201, 225); 
}

#about_section{
    font-family:'Montserrat', sans-serif;
    width: 40%;
    margin-left: 5%;

}

#about_me{
    background-color: rgba(240, 198, 31, 0.5);
    border-radius: 20px;
    font-size: 120%;
    margin: 5% auto;
}

#contact{
    background-color: rgba(245, 245, 201);
    border-radius: 20px;
    font-size: 120%;
    width: 100%;
    margin-top: 5%;
}

#brand-image{
    padding-bottom: 5%;
    margin-top: -5%;
}

#brand-image img{
    width: 20rem;
}

.links{
    margin: 0 7.5%;
    font-size: 5rem;
    display: inline-block;
    color: #006d75;
    opacity: 0.5;
    transition-duration: 0.3s;
}

.links:hover{
    opacity: 1;
    color: #006d75;
    transform: translateY(-5%);
}

p, h3{
    padding: 3% 2%;
    margin: auto;
    width: 90%;
}

@media screen and (max-width: 1024px){

    #sara{
        width: 35.5vw;
    }
    #brand-image img{
        width: 17.5rem;
    }
}

@media screen and (max-width: 750px){
    #sara{
        width: 55.5vw;
        margin-top: 2rem;
        margin-right: 0;
    }
    #about{
        flex-direction: column;
    }
    #about_section{
        width: auto;
        margin-left: 0;
        padding: 2.5rem;
    }
    #tsumtsum{
        display: none;
    } 
}
@media screen and (max-width: 400px){
    #brand-image img{
        width: 15rem;
    }
}
</style>
