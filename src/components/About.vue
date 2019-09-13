<template>
    <section id='about_section'>
        <div id='sara'>
            <img src='../assets/sara.jpg'>
        </div>
        <div id='about'>
            <div id='about_me'>
                <p>Hey there, I'm Sara ✌️! I think cooking is really cool and I like bears (To be updated)</p>
            </div>
            <div id='contact'> 
                <h3 style="font-size: 45px; font-family: 'Fredericka the Great', sans-serif"> WANNA COLLAB? <hr style="width: 250px; margin:auto;"></h3>
                <div style="padding: 0 0 5%">
                    <a class="links" href="https://www.instagram.com/bearly_hungry/">INSTAGRAM</a>
                    <a class="links" href="mailto:bearlyhungry@gmail.com">EMAIL</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'about'
}
</script>

<style>
#about_section{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#sara{
    height: 75%;
    margin-right: 5%;
}

#sara img{
    height: 100%;
    box-shadow: 15px 15px 0 rgb(242, 118, 126);
    transition: 0.3s;
    border-radius: 5%;
}

#sara img:hover{
    box-shadow: 5px 5px 0 rgb(242, 118, 126); 
}

#about{
    font-family:'Montserrat', sans-serif;
    width: 40%;
    margin-left: 5%;
    display: inline-block;
    vertical-align: middle;

}

#about_me{
    background-color: rgba(240, 198, 31, 0.5);
    border-radius: 20px;
    font-size: 20px;
    margin-bottom: 15px;
}

#contact{
    background-color: rgba(255, 188, 110, 0.75);
    border-radius: 20px;
    font-size: 20px;
    width: 100%;
    margin-top: 15px;
}

.links{
    margin: 0 5%;
    font-size: 30px;
    color:rgb(29, 29, 29);
    font-family: 'Catamaran', sans-serif;
    position: relative;
    user-select: none;
    outline: none;
}
.links:hover{
    text-decoration: none;
    color:rgb(29, 29, 29);
}

.links::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 0.2em;
  opacity: 0;
  background:rgb(242, 118, 126);
  transition: all 400ms cubic-bezier(0.5, 1.6, 0.15, 0.9);
}
.links:hover::after {
  left: 0;
  width: 100%;
  opacity: 1;
}

p, h3{
    padding: 3% 2%;
    margin: auto;
    width: 90%;
}
</style>
