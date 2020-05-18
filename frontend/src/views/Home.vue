<template>
	<div id="home">
		<b-navbar id='navbar' class='navbar navbar-default navbar-custom' variant="faded" type='dark'>
			<b-navbar-brand id='brand' class="section-link" href="#home">Bearly Hungry</b-navbar-brand>
			<b-nav-collapse class='ml-auto'>
				<b-navbar-nav style="margin-left: -10%;">
					<b-nav-item class='section-link' href="#about">About</b-nav-item>
					<b-nav-item class='section-link' href="#photoGallery">Photos</b-nav-item>
					<b-nav-item class='section-link' href="#sara-recommends">GW</b-nav-item>
				</b-navbar-nav>
			</b-nav-collapse>
		</b-navbar>
		<Title/>
		<About/>
		<PhotoGallery/>
		<Recommendations/>
		<div id='footer'>
			<p>© 2020, Sara Cheng. All Rights Reserved.</p>
		</div>
	</div>
</template>

<script>
import Title from './Title.vue';
import About from './About';
import PhotoGallery from './PhotoGallery.vue';
import Recommendations from './Recommendations.vue'
import { $ } from '../main';

export default {
	name: 'home',
	components: {
		Title,
		About,
		PhotoGallery,
		Recommendations
	},
	
	mounted() {

		$.extend( $.easing, 
		{
			easeInOutQuint: function (x, t, b, c, d) {
				if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
				return c/2*((t-=2)*t*t*t*t + 2) + b;
			}
		});

		$(document).ready(function(){
			$("a").on('click', function(event){
				var href = $(this).attr('href');
				if(href == '#home'|| href == '#about'|| href == '#photoGallery'| href == "#sara-recommends"){
			
					event.preventDefault();
					let hash = this.hash;

					let scrollSetting = $(hash).offset().top;

					if(href != "#home"){ 
						scrollSetting -= 85;
					}
							
					$('html, body').animate({
						scrollTop: scrollSetting
					}, 1000, "easeInOutQuint");
				}
			});
		});
		
		$(document).scroll(function () {
			let $nav = $(".navbar-custom");
			$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		});
	},
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat:L|Bebas+Neue&display=swap');

html, body, #home{
	font-family:'Montserrat', sans-serif;
	height: 100%;
}

section{
	background-color: whitesmoke;
	height:100%;
}


#navbar{
	position:fixed;
	font-family: 'Bebas Neue', sans-serif;
	top: 0;
	width: 100vw;
	z-index: 1;
	height: 15vh;
	transition: 300ms ease;
}

#navbar.scrolled{
	height: 10vh;
	background: #55b4b8;
}

#brand{
	font-size: 175%;
	margin:0 2.5vw;
	position: relative;
}

.section-link{
	opacity: 0.5;
	margin: 0 1vw;
	border: 0 10% solid;
	letter-spacing: 3px;
	font-size: 150%;
	transition-duration: 0.3s;
}

.section-link:hover{
	opacity: 1;
	transform: translateY(0%); 
}

.section-link::after {
	content: "";
	position: absolute;
	left: 50%;
	bottom: 10px;
	width: 0;
	height: 0.2em;
	opacity: 0;
	background: rgb(250, 215, 73);
	transition: all 400ms cubic-bezier(0.5, 1.6, 0.15, 0.9);
}

.section-link:hover::after {
	left: 0;
	width: 100%;
	opacity: 1;
}

#footer{
	text-align: center;
	font-family: 'Montserrat', sans-serif;
	color: whitesmoke;
	background-color: rgb(240, 98, 138);
	height: 5rem;
	display: flex;
	align-items: center;
	width: 100%;
}

#footer p{
	margin: 0;
	padding: 0;
	width: 100%;
}

@media screen and (max-width: 800px) {
	#navbar{
		display: none;
	}
}

</style>