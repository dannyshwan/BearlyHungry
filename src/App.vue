<template>
	<div id="app">
		<b-navbar id='navbar' class='navbar navbar-default navbar-custom' variant="faded" type='dark'>
			<b-navbar-brand id='brand' href="#home">Bearly Hungry</b-navbar-brand>
			<b-nav-collapse class='ml-auto'>
				<b-navbar-nav>
					<b-nav-item class='section-link' href="#about_section">About</b-nav-item>
					<b-nav-item class='section-link' href="#photoGallery">Samples</b-nav-item>
				</b-navbar-nav>
			</b-nav-collapse>
		</b-navbar>
    	<Home/>
    	<About/>
    	<PhotoGallery/>
    	<div id='footer'>
      		<p id='copyright'>Copyright © Sara Cheng 2019</p>
			<a id='source-code' href="https://github.com/dannyshwan/BearlyHungry">Source Code</a>
    	</div>
  	</div>
</template>

<script>
import Home from './components/Home.vue';
import About from './components/About.vue';
import PhotoGallery from './components/PhotoGallery.vue';


export default {
	name: 'app',
	components: {
		Home,
		About,
		PhotoGallery
	},
	
	mounted() {

		$(document).ready(function(){
			$('a').on('click', function(event){
				
				var href = $(this).attr('href');
				if(href == '#home'|| href == '#about_section'|| href == '#photoGallery'){
			
					event.preventDefault();
					var hash = this.hash;
							
					$('html').animate({
						scrollTop: $(hash).offset().top
					}, 1250, "swing", function(){
						
						window.location.hash = hash;
					});
				}
			});
		});

		$(document).ready(function(){
    
			$('body').css('display', 'none');
			$('body').delay(10).fadeIn(600, "swing");
		});
		
		$(document).scroll(function () {
			var $nav = $(".navbar-custom");
			$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		});
	},
}

</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Montserrat|Catamaran:Extra-bold|Fredericka+the+Great&display=swap');
	html, body, #app, section{
		font-family:'Montserrat', sans-serif;
		background-color: whitesmoke;
		height: 100%;
	}

	#navbar{
		position:fixed;
		font-family: 'Catamaran', sans-serif;
		top: 0;
		width: 100vw;    
  		z-index: 1;
		height: 100px;
		transition: 300ms ease;
	}

	#navbar.scrolled{
		height: 70px;
		background: rgb(216, 98, 79);
	}

	#brand{
		font-size: 1.75vw;
		margin:0 2.5%;
		position: relative;
	}

	#brand::after {
		content: "";
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 0;
		height: 0.2em;
		opacity: 0;
		background:rgb(49, 215, 132);
		transition: all 400ms cubic-bezier(0.5, 1.6, 0.15, 0.9);
	}
	#brand:hover::after {
		left: 0;
		width: 100%;
		opacity: 1;
	}

	.section-link{
		opacity: 0.5;
		margin: 0 50px;
		border: 0 10% solid;
		font-size: 1.5vw;
		transition-duration: 0.3s;
	}

	.section-link:hover{
		opacity: 1;
		transform: translateY(-10%); 
	}

	#footer{
		text-align: center;
		font-family: 'Montserrat', sans-serif;
		color: whitesmoke;
		background-color: rgba(222, 36, 8, 0.7);
		height: 6.5em;
		width: 100%;
	}

	#copyright{
		padding: 2% 0 0;
		margin-bottom: -2.5px;
	}

	#source-code{
		text-decoration: none;
		color: whitesmoke;
		opacity: 0.5;
		transition: 300ms;
	}
	
	#source-code:hover{
		opacity: 1;
	}

</style>