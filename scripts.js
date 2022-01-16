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



})()