
$(function(){

	
		$('a#botonpublicar').click(function(){
			$('#formulario').slideToggle('slow');
		});	

		//$('form').on(submit, function(){}))
	//$('#enviar').click(function(){
		$(function procesadatos(){  //})
		var titulo = $("input[name=titulo]").val();
		var autor = $("input[name=Autor]").val();
		var tag = $("input[name=tag]").val();
		var tiempo = $("input[name=tiempo]").val();

				//$('.posts').prepend(

	var template ='<article = class="post">' +
						'<div class="descripcion">' +
			'				<figure class="imagen">' +
			'					<img src="imagenes/foto.jpg" alt="imagen" />' +
			'				</figure>' +
			'				<div class="detalles">' +
			'					<h2 class="titulo">'+ titulo +'</h2>' +
			'				<p class="autor">' +
			'					<a href="#">'+ autor +
			'					</a>' +
			'				</p>' +
			'				<a href="#" class="tag">'+tag+'</a>	' +
			'				<p class="fecha">hace <strong>'+tiempo+'</strong> min</p>' +
			'				</div>' +
			'			</div>' +

			'			<div class="acciones">' +
			'				<div class="votos">' +
			'					<a href="U" class="up"></a>' +
			'					<span class="total">155</span>' +
			'					<a href="D" class="down"></a>' +
			'				</div>' +
			'				<div class="datos">' +

			'					<a href="#" class="comentarios">' +
			'						10' +
			'					</a>' +
			'					<a href="#" class="estrellita">' +

			'					</a>' +

			'				</div>' +
			'			</div>' +
			'		</article>';





				


	});

$('.posts').prepend($(template).fadeIn);


});












