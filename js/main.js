$(document).ready(function(){

	//Activo Categorias para seleccionar peliculas
	$("ul.dropdown-menu li a").click(function(evt) {
		evt.preventDefault();
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

	cargar();

});//Document.ready


function cargar () {
	var peliculas = [
		{
			titulo: "simios",
			descripcion: "Diez años después de que Cesar (Andy Serkis) liderara una revolución de simios hiperinteligentes (debido una evolución genética) por las calles de San Francisco, y que un virus mortal aniquilara casi toda la humanidad, un grupo de supervivientes inmunes al virus encabezados por Dreyfus (Gary Oldman) se enfrentan a una nueva civilización y a un planeta completamente diferente. Ambas razas consiguen vivir en paz por un tiempo… sin embargo, la paz acaba por romperse y ambas partes se sitúan al borde de una guerra que determinará quién será la especie dominante de la Tierra.",
			video: "https://www.youtube.com/embed/Pnps3h2azi0",
		},
		{
			titulo: "gravedad",
			descripcion: "Durante un paseo espacial rutinario, dos astronautas sufren un grave accidente y quedan flotando en el espacio. Una es la doctora Ryan Stone, una brillante ingeniera en su primera misión espacial en la Shuttle. Su acompañante es el veterano astronauta Matt Kowalsky. Durante el paseo algo sale mal y ocurre el desastre: el shuttle queda destrozado, dejando a Ryan y Matt completamente solos, momento a partir del cual intentarán por todos los medios volver a la Tierra.",
			video: "https://www.youtube.com/embed/w6ek8RjRe9o",
		},
		{
			titulo: "mib",
			descripcion: "Cuando el MIB recibe la información de que el Agente K podría morir a manos de un alienígena, lo que cambiaría la historia para siempre, el Agente J es enviado a los los años 60 para evitarlo. Tercera entrega de la popular saga Men in Black.",
			video: "https://www.youtube.com/embed/w1LNzAiZsEw",
		},
		{
			titulo: "matrix",
			descripcion: "Un programador pirata recibe un día una misteriosa visita… Nada más se debe contar de la sinopsis de Matrix. Es más, si todavía no la ha visto, no deje que nadie le cuente qué es Matrix. Porque gran parte del éxito mundial de esta fascinante y entretenidísima película se basa en su original guión, asombrosa idea producto de la era tecnológica en la que vivimos. Si a ello le unimos su revolucionaria estética -con espectaculares y trepidantes escenas de acción nunca vistas en el género-, tendremos el porqué de la consagración de esta deslumbrante cinta fantástica como el mayor film de culto de final de siglo. Puede que en unos años quede obsoleta, pero para entonces ya nada nos hará olvidar el día que descubrimos qué es Matrix…. y a aquella Carrie-Anne Moss embutida en cuero, auténtico hielo -que de frío quema-, la más sexy heroína de estos tiempos cibernéticos.",
			video: "https://www.youtube.com/embed/oZ1-M8O70zk",
		},
		{
			titulo: "300",
			descripcion: "Adaptación del cómic de Frank Miller (autor del cómic de “Sin City”) sobre la famosa batalla de las Termópilas (480 a. C.). El objetivo de Jerjes, emperador de Persia, era la conquista de Grecia, lo que desencadenó las Guerras Médicas. Dada la gravedad de la situación, Atenas consiguió convencer a Leónidas I, rey de Esparta, para que participase con los atenienses en la guerra contra los persas. Así, el rey Leonidas (Gerard Butler) y 300 espartanos se enfrentaron a un ejército persa que era inmensamente superior. ",
			video: "https://www.youtube.com/embed/4_c0_znpbDQ", 
		},
		{
			titulo: "pointbreak",
			descripcion: "Johnny es un joven que decide dejar atrás su pasado rebelde para unirse al FBI. Un día, le asignan un caso sobre robos para el que se tendrá que desplazar hasta California, donde los atracadores se dedican al surf. Allí, conoce a Bodhi, un chico que le hará ver la vida de otra manera y Tyler, una joven muy atractiva de la que se enamora.",
			video: "https://www.youtube.com/embed/XfdM7nS7eks", 
		},
		{
			titulo: "speed",
			descripcion: "Tobey Marshall (Aaron Paul) es un mecánico que pilota muscle cars (coches clásicos de gran cilindrada) en un circuito de carreras ilegal callejero. Necesitado de medios para mantener a flote su taller familiar, acepta a regañadientes asociarse con el adinerado y arrogante ex piloto de NASCAR Dino Brewster (Dominic Cooper). Pero justo cuando está a punto de salvar su taller mediante un gran trato con la vendedora de automóviles Julia Bonet (Imogen Poots), una desastrosa carrera permite a Dino meter a Tobey en la cárcel por un crimen que no ha cometido, lo que deja a Brewster libre para ampliar sus negocios hacia el oeste. Dos años más tarde, Tobey sale de la cárcel dispuesto a vengarse, pero sabe que su única oportunidad para acabar con Dino es derrotarle en la arriesgada carrera conocida como De Leon, la Liga de Campeones de las carreras clandestinas. Sin embargo, para llegar allí a tiempo, Tobey deberá poner toda la carne en el asador en una frenética carrera de costa a costa en la que deberá dar esquinazo a la policía y lidiar con la exorbitante recompensa que Dino ha puesto por su coche. Con la ayuda de su leal equipo y de la sorprendente baza que resulta ser Julia, Tobey desafía el peligro en cada recodo para demostrar que incluso en el deslumbrante mundo de los supercoches exóticos, el que lleva las de perder también puede llegar primero.",
			video: "https://www.youtube.com/embed/_Z-4LBVzuqY", 
		},
		{
			titulo: "expendables",
			descripcion: "Después de años de corrupción y asesinatos de rehenes, además de traiciones y mentiras en su política exterior, Estados Unidos, con la ayuda de otras naciones, arma en secreto un equipo con su personal militar más capacitado para derrocar a un dictador que ha causado estragos en un país de América latina durante más de 20 años. La misión principal del equipo es terminar con la vida del dictador, pero recibiendo poca ayuda de las naciones, que tratan de mantener en secreto la misión.",
			video: "https://www.youtube.com/embed/Z1rhjERTBb8", 
		},
		{
			titulo: "monsters",
			descripcion: "Mike Wazowski (Billy Crystal) y James P. Sullivan (John Goodman) son amigos inseparables, pero no fue siempre así. Cuando se conocieron en la Universidad, no se podían soportar, pero acabaron superando sus diferencias y se convirtieron en los mejores amigos",
			video: "https://www.youtube.com/embed/QxrQ6BaijAY",
		},
		{
			titulo: "toystory3",
			descripcion: "Cuando su dueño Andy se prepara para ir a la universidad, el vaquero Woody, el astronauta Buzz y el resto de sus amigos juguetes comienzan a preocuparse por su incierto futuro. Efectivamente todos acaban en una guardería, donde por ejemplo la muñeca Barbie conocerá al guapo Ken. Esta reunión de nuestros amigos con otros nuevos juguetes no será sino el principio de una serie de trepidantes y divertidas aventuras.",
			video: "https://www.youtube.com/embed/xkPhZHt5TKM", 
		},
		{
			titulo: "bighero",
			descripcion: "En la metrópolis de San Fransokyo (cruce de San Francisco y Tokio), vive Hiro Hamada, quien aprende a sacar provecho de su capacidad gracias a su brillante hermano Tadashi y sus también brillantes amigos: la buscadora de adrenalina GoGo Tamago, el meticuloso de la limpieza Wasabi-No-Ginger, la genia de la química Honey Lemon y el fanático de los cómics Fred. Cuando tras un devastador giro de los acontecimientos, se ven envueltos en una peligrosa conspiración que tiene lugar en las calles de San Fransokyo, Hiro recurre a su amigo más íntimo: un robot llamado Baymax, y transforma al grupo en una banda de héroes de última tecnología decididos a resolver el misterio.",
			video: "https://www.youtube.com/embed/boO2nQ3RJFs", 
		},
		{
			titulo: "legomovie",
			descripcion: "Cuenta la historia de Emmet, una figurita LEGO absolutamente normal y fiel a las normas que es identificada por error como la persona más extraordinaria y la clave para salvar al mundo. Se ve entonces inmerso en una búsqueda épica para detener a un malvado tirano junto a un grupo de desconocidos, una aventura para la que Emmet no está preparado en absoluto.",
			video: "https://www.youtube.com/embed/fZ_JOBCLF-I",
		}
	]

	var movie = window.location.hash.split("=")[1];
	var data = peliculas.filter(function(pelicula) {
		return pelicula.titulo === movie;
	})[0]

	//Verificar si el objeto tiene los valores 
	//Agrego Contenido a peliculas.html al hacer click sobre caratula
	//$(".video iframe")
	//$(".titulo")
	//$("p")
	//$(".actores img")
	//$("h5")

	if (data && data.hasOwnProperty('titulo')) {
		$(".titulo").text(data.titulo);
		$("p").text(data.descripcion);
		$(".video iframe").attr("src", data.video); 
	}

	 
}
