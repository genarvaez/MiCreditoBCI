var data = [{
	user: {
		nombre: "Juanito",
		apellido: "López", 
		rut: "19123456-7",
		fechaNacimiento: "19/10/1980",
		id: 123456789,
		renta: "730.000",
		password: "miClavesecreta123"
		},
	contacto: {
		telefono: "+561221211",
		email: "notengocorreo@gmail.com",
		address: "Av. calle sin número. Santiago, Región Metropolitana"
		},
	cliente: {
		cuenta: false,
		tarjetas: false,
		credito: {
			tipo: "Hipotecario",
			tasa: "tasa fija",
			valorCredito: 37142846,
			valorPropiedad: 30000000,
			pie: 5000000,
			porcentajePie: "17%",
			credito: 24999989,
			añosPrestamo: "20 años",
			cuotas: 240,
			pagadas: 0,
		},
		status:{
			aproved: true,
		}
	}
},{
	user: {
		nombre: "María",
		apellido: "Pérez", 
		rut: "20123456-7",
		fechaNacimiento: "19/10/1970",
		id: 123456789,
		renta: "1730000",
		password: "miClavesecreta321"
		},
	contacto: {
		telefono: "+561221211",
		email: "notengocorreo@hotmail.com",
		address: "Av. calle sin número. Santiago, Región Metropolitana"
		},
	cliente: {
		cuenta: false,
		tarjetas: false,
		credito: {
			tipo: "Hipotecario",
			tasa: "tasa fija",
			valorCredito: 37142846,
			valorPropiedad: 30000000,
			pie: 5000000,
			porcentajePie: "17%",
			credito: 24999989,
			añosPrestamo: "20 años",
			cuotas: 240,
			pagadas: 0,
		},
		status:{
			aproved: false,
			steps: [["true", "true", "true"],["true", "procesando", "pendiente"],["pendiente", "pendiente", "pendiente"],["pendiente", "pendiente", "pendiente"],["pendiente", "pendiente", "pendiente"] ]
			
		}
	}
}]