$(document).ready(function(){

	//Activo Categorias para seleccionar peliculas
	$("ul.dropdown-menu li a").click(function() {
		var categoria = $(this).text();
		
		if(categoria == "Todas") {
			$("div.pelicula div").fadeIn("slow").removeClass("hidden");
			//Pero quiero que se ordenen de forma random sin respetar el orden del html...
		}
		else {
			$(".pelicula div").each(function() {
				if($(this).hasClass(categoria)) {
					$(this).fadeIn("slow").removeClass("hidden");
				}
				else {
					$(this).fadeOut("slow").addClass("hidden");
				}
			});
		}
	});



	//Agrego Contenido a peliculas.html al hacer click sobre caratula
	//$("div.video")
	//$(".titulo")
	//$("p")
	//$(".actores img")
	//$("h5")

	
	    
	$(".titulo").text("300");
	$("p").text("La ultima batalla de los 300 es una pelicula épica-de acción de 2007 dirigida por Zack Snyder. Es la adaptación cinematográfica de la serie limitada de cómics del mismo nombre de Frank Miller, la cual relata la Batalla de las Termópilas.");
	$(".video").attr("src", "https://www.youtube.com/embed/4_c0_znpbDQ");  

	

});//Document.ready


	
	


/*
function contenido(){
		var pelicula = $("div.pelicula div a");};
	$(".pelicula div a").on("click",function(){
      	if(hasClass($(".accion1"))){
      		$(".titulo").text("300");
			$("p").text("La ultima batalla de los 300 es una pelicula épica-de acción de 2007 dirigida por Zack Snyder. Es la adaptación cinematográfica de la serie limitada de cómics del mismo nombre de Frank Miller, la cual relata la Batalla de las Termópilas.");
        	$(".video").attr("src", "https://www.youtube.com/embed/4_c0_znpbDQ");  

      	};
	      
	});

		


$('a.infantil4').attr({
	   'href': 'peliculas.html',
	   'target': '_blank',  
	}); 
	$(".titulo").text("pruieba");
	$("p").text("test.");


	
$(".pelicula div a").on('click', function() {
		window.open("peliculas.html", "_blank");
	});


var $titulo = $(".titulo");
	var $video = $(".video");
	var $sinopsis = $(".sinopsis");

	$("a.accion1").click(function(){
        $.post("peliculas.html", {
        	$titulo: $(".titulo").text("300"), 
        	$video: $(".video"), 
        	$sinopsis: $(".sinopsis").text("La ultima batalla de los 300 es una pelicula épica-de acción de 2007 dirigida por Zack Snyder. Es la adaptación cinematográfica de la serie limitada de cómics del mismo nombre de Frank Miller, la cual relata la Batalla de las Termópilas.")}, function(htmlexterno){
   $("#cargaexterna").html(htmlexterno);
    		});
	});



	$(".pelicula div a").on('click', function() {



		window.open("peliculas.html", "_blank");
	});

	$("a.accion1").click(function () {
        $(".titulo").text("300");
		$("p").text("La ultima batalla de los 300 es una pelicula épica-de acción de 2007 dirigida por Zack Snyder. Es la adaptación cinematográfica de la serie limitada de cómics del mismo nombre de Frank Miller, la cual relata la Batalla de las Termópilas.")
    });
*/
//300
//video <iframe width="560" height="315" src="https://www.youtube.com/embed/4_c0_znpbDQ" frameborder="0" allowfullscreen></iframe>

//Monsters University
//<iframe width="560" height="315" src="https://www.youtube.com/embed/DpQlsaTiVT0" frameborder="0" allowfullscreen></iframe>
//Mike Wazowski (Billy Crystal) y James P. Sullivan (John Goodman) son amigos inseparables, pero no fue siempre así. Cuando se conocieron en la Universidad, no se podían soportar, pero acabaron superando sus diferencias y se convirtieron en los mejores amigos. Precuela de la exitosa "Monstruos, S.A.".

//Toy Sory 3
// Cuando su dueño Andy se prepara para ir a la universidad, el vaquero Woody, el astronauta Buzz y el resto de sus amigos juguetes comienzan a preocuparse por su incierto futuro. Efectivamente todos acaban en una guardería, donde por ejemplo la muñeca Barbie conocerá al guapo Ken. Esta reunión de nuestros amigos con otros nuevos juguetes no será sino el principio de una serie de trepidantes y divertidas aventuras.
// <iframe width="560" height="315" src="https://www.youtube.com/embed/xkPhZHt5TKM" frameborder="0" allowfullscreen></iframe>

// Big Hero 6
// En la metrópolis de San Fransokyo (cruce de San Francisco y Tokio), vive Hiro Hamada, quien aprende a sacar provecho de su capacidad gracias a su brillante hermano Tadashi y sus también brillantes amigos: la buscadora de adrenalina GoGo Tamago, el meticuloso de la limpieza Wasabi-No-Ginger, la genia de la química Honey Lemon y el fanático de los cómics Fred. Cuando tras un devastador giro de los acontecimientos, se ven envueltos en una peligrosa conspiración que tiene lugar en las calles de San Fransokyo, Hiro recurre a su amigo más íntimo: un robot llamado Baymax, y transforma al grupo en una banda de héroes de última tecnología decididos a resolver el misterio.
// <iframe width="560" height="315" src="https://www.youtube.com/embed/boO2nQ3RJFs" frameborder="0" allowfullscreen></iframe>

// Lego Movie
// Cuenta la historia de Emmet, una figurita LEGO absolutamente normal y fiel a las normas que es identificada por error como la persona más extraordinaria y la clave para salvar al mundo. Se ve entonces inmerso en una búsqueda épica para detener a un malvado tirano junto a un grupo de desconocidos, una aventura para la que Emmet no está preparado en absoluto.
// <iframe width="560" height="315" src="https://www.youtube.com/embed/a0dgofxMyik" frameborder="0" allowfullscreen></iframe>

/*
$(".pelicula div a").on('click', function() {
		window.open("peliculas.html", "_blank");
		contenido();
	});


	function contenido () {
		$("a.accion1").clicked {
			$(".titulo").text("300");
			$("p").text("La ultima batalla de los 300 es una pelicula épica-de acción de 2007 dirigida por Zack Snyder. Es la adaptación cinematográfica de la serie limitada de cómics del mismo nombre de Frank Miller, la cual relata la Batalla de las Termópilas.")
		}
	};




function modificar () {
		if 
	}


 $('button').on('click', function() {
      // código
    });


	$(".pelicula div.Acción").click(function() {
		window.open("peliculas.html", "_blank");
	});


	var content = new Array ("video","titulo", "descripcion");
	var video = $(".video");




		if ($(this) == $("a.accion1")) {
			
		}
		
		


		url = $(this).attr("href");
	    


		*/
