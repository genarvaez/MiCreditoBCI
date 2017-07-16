$(document).ready(function(){
	$(".button-collapse").sideNav();
	$(".copia").hide();
	$(".copia2").hide();

	setTimeout(function(){
		cambio();
	}, 3000);

	if($(".upFile").change(function cambio(){
		$("#tasa1").empty();
		$("#tasa1").css("background-color", "#007cc6");
		$("#tasa1").text("Enviado");
		setTimeout(function(){cambio2();}, 3000);

	}))
	
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
/******************************************inicio de sesion*****************************************/
/*$(".password").on("keydown", function(){
	console.log($(this).val())
	for(var i = 0; i< $(this).val(); i++){
		
	}
})*/



$(".iniciar-sesion").click(function(event){
	var rut = $(".rut").val();
	var password = $(".password").val();
	var rutOk = false;
	


	 var usuario = data.filter(function(element){
		if(rut == element.user.rut){
	        rutOk = true;
			return element;
		}
	});
	
	if(rutOk == false){
		$(".rt").removeClass('hide');
	}
	else if(rutOk == true){
		$(".rt").addClass('hide');
		if(usuario[0].user.password != password){
	 		event.preventDefault();
	 		$(".pw").removeClass('hide');
		}
		else{
			console.log(usuario[0]);
			$(".pw").addClass('hide');
			if(usuario[0].cliente.status.aproved == true){
				$(".irAEtapa").attr("href", "enviodocumentos.html");
			}
			else if(usuario[0].cliente.status.aproved != true){
				$(".irAEtapa").attr("href", "etapas.html");
			}
		}
	}
})
