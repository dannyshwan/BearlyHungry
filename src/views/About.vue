<template>
    <section id='about'>
        <img id='sara' src='../assets/img/sara.jpg'>
        <div id='about_section'>
            <img src="../assets/img/poohtsumtsum.png" style="width: 5rem;"/>
            <div id='about_me'>
                <p>Hey there, I'm Sara ✌️! I think cooking is really cool and I like bears (To be updated)</p>
            </div>
            <div id='contact'> 
                <div style="padding: 5% 0">
                    <a class="links" href="https://www.instagram.com/bearly_hungry/"><a-icon type="instagram" theme="outlined" /></a>
                    <a class="links" href="mailto:bearlyhungry@gmail.com"><a-icon type="mail" theme="outlined" /></a>
                </div>
                <!--<div id="brand-image"><img src="../assets/img/brand.png" alt="brand-image"></div>-->
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
    display: inline-flex;
    width: 100%;
    height: 48rem;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#sara{
    height: auto;
    width: 22.5%;
    margin-right: 5%;
    box-shadow: 0.85vw 0.85vw 0 rgb(245, 201, 225);
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
    display: inline-block;

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
    height: 6rem;
}

.links{
    margin: 0 10%;
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

@media screen and (max-width: 500px){
}
</style>
