<template >
    <section id='home'>
        <div id='home_filter'>
            <div style='position:absolute; top: 25%; width: 100%;'>
                <div id='welcoming'>
                    <p style='font-size: 200%; margin-bottom: -9%;'>Hello!</p>
                    <p>Welcome to Bearly Hungry!</p>
                </div>
                
                <img src='../assets/eating_pooh.png'>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'home',
}
</script>

<style>
#home{
    background: url(../assets/bear4.jpg) no-repeat center center fixed;
    width: 100%;
    height: 100%;
}

#home_filter{
    font-family: 'Fredericka the Great', sans-serif;
    background-color: rgba(102, 102, 0, 0.7);
    color: whitesmoke;
    font-size: 5vw;
    height: 100%;
    width: 100%;
    text-align: center;
    position: relative;
}

#home_filter img{
    display: inline-block;
    margin-left: -5%;
    width: 20%;
    vertical-align: middle;
    
}

#welcoming{
    vertical-align: middle;
    text-align: left;
    display: inline-block; 
    width: 75%;
}
</style>

