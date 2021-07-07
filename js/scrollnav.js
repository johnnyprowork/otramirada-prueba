var menuscroll = document.getElementById('menu__scroll');
var altura = menuscroll.offsetTop;
var fondo = document.getElementById('menu__special__shape');
window.addEventListener('scroll', function(){
	if(window.pageYOffset > altura) {
		menuscroll.classList.add('nav___background___scroll')
		fondo.classList.add('special__shape')
		fondo.classList.remove('special__shape__delect')
	}else {
		menuscroll.classList.remove('nav___background___scroll')
		fondo.classList.remove('special__shape')
		fondo.classList.add('special__shape__delect')
	}

});



