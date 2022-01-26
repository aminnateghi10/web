(function () {
	'use strict'
	const btnCloseMenu = document.querySelector('#close-menu');
	const menu = document.querySelector('#navbarsExampleDefault');
	document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
		document.querySelector('.offcanvas-collapse').classList.toggle('open')
	})

	btnCloseMenu.addEventListener('click', (e) => {
		menu.classList.remove('open');

	})

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	})


})()