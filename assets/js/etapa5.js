$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(".copia").hide();
	$(".copia2").hide();

	//setTimeout(function(){cambio();}, 3000);

	setTimeout(function(){cambio();}, 3000);

	function cambio(){
		$("#tasa1").empty();
		$("#tasa1").css("background-color", "#007cc6");
		$("#tasa1").text("Enviado");
		setTimeout(function(){cambio2();}, 3000);

	}
	function cambio2(){
		$("#tasa1").empty();
		$("#tasa1").css("background-color", "#00a94a");
		$("#tasa1").text("Aprobado");
		setTimeout(function(){cambios();}, 2000);
		
	}
	
	function cambios(){
		$("#tasa4").empty();
		$("#tasa4").css("background-color", "#00a94a");
		$("#tasa4").text("Aprobado");
		

	}

	$("#btn-comentario").on("click", function(val){
		var coment = $("#textarea1").val();
		
		$(".posteos").append('<div class="row copia"><div class="col s12 m6"><div class="card"><div class="card-content"><span class="card-title">Tu Comentario</span><p class="habla">'+coment +'</p></div><div class="card-action"><a href="#">Borrar</a></div></div></div></div>');
		setTimeout(function(){
		ejecutivo();
	}, 3000);
	});

	function ejecutivo(){
		var post2 = $(".copia2").clone().show();
		$(".posteos").append('<div class="row copia2"><div class="col s12 m6"><div class="card blue"><div class="card-content white-text"><span class="card-title">Tu Ejecutivo</span><p class="habla2">Estamos Trabajando para Usted.</p></div><div class="card-action"></div></div></div></div>');

	}

	
});
