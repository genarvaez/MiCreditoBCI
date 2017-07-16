$(document).ready(function(){
	$(".name").text("Sr(a)" + data[1].user.nombre + data[1].user.apellido);
	$(".contactos").append("Teléfono: " + data[1].contacto.telefono +'<br>E-mail: '+ data[1].contacto.email +'<br>Dirección: '+ data[1].contacto.address);
	$(".user").append("Tipo de crédito: " + data[1].cliente.credito.tipo+ '<br>Valor del Crédito: ' + data[1].cliente.credito.valorCredito);

	

})