$(document).ready(function(){

	//Activo Categorias para seleccionar peliculas
	$('ul.dropdown-menu li a').click(function() {
		var categoria = $(this).text();
		
		if(categoria == 'Todas') {
			$('div.pelicula div').fadeIn('slow').removeClass('hidden');
		}
		else {
			$('.pelicula div').each(function() {
				if(!$(this).hasClass(categoria)) {
					$(this).fadeOut('normal').addClass('hidden');
				}
				else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		return false;
	});

	//Quiero que se ordenen de forma random



	//Agrego Contenido a peliculas.html al hacer click sobre caratula
	//$("div.video")
	//$(".titulo")
	//$("p")
	//$(".actores img")
	//$("h5")



	$(".pelicula div.Acción").click(function() {
		$("a.accion1").attr("href", "peliculas.html");
		$(".titulo").text("300");
		$("p").text("La ultima batalla de los 300 es una pelicula épica-de acción de 2007 dirigida por Zack Snyder. Es la adaptación cinematográfica de la serie limitada de cómics del mismo nombre de Frank Miller, la cual relata la Batalla de las Termópilas.")
	});

});


/*

		url = $(this).attr("href");
	    window.open(url, '_blank');


		*/
