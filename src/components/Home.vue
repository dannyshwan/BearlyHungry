<template >
    <section id='home'>
        <div id='home_layer'>
            <h1 id='welcoming'>Hello!</h1>
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
    align-items: center;
    flex-flow: column;
    height: 100%;
}

#welcoming{
    font-size: 2em;
    transform: translateX(-115%) translateY(115%);
}
</style>

