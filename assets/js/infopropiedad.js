$(document).ready(function(){
	$(".button-collapse").sideNav();
	
	$(".copia").hide();
	$(".copia2").hide();

	setTimeout(function(){
		cambio();
	}, 3000);

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
	}


	$("#btn-comentario").on("click", function(val){
		var coment = $("#textarea1").val();
		var post = $(".copia").clone().show();
		$(".posteos").append(post);
		$(".habla").empty();
		$(".habla").text(coment);
		setTimeout(function(){
		ejecutivo();
	}, 3000);
	});

	function ejecutivo(){
		var post2 = $(".copia2").clone().show();
		$(".posteos").append(post2);
		$(".habla2").empty();
		$(".habla2").text("Estamos trabajando para usted");
	}
});
