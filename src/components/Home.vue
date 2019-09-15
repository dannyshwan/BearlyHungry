<template >
    <section id='home'>
        <div id='home_layer'>
            <p id='welcoming'>Hello!</p>
            <p>Welcome to Bearly Hungry! <img src='../assets/eating_pooh.png'></p>
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
}

#home_layer{
    font-family: 'Fredericka the Great', sans-serif;
    background-color: rgba(102, 102, 0, 0.7);
    color: whitesmoke;
    display: flex;
    font-size: 5em;
    justify-content: center;
    align-items: left;
    flex-flow: column;
    height: 100%;
}

#welcoming{
    font-size: 2em;
    margin-bottom: -15%;
}
</style>

