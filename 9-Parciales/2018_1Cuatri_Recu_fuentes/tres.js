function mostrar()
{	
	var precio;
	var descuento;
	var preciofinal;
	var preciodescuento;
	var descuentototal;
	var aumentoiva;
	precio=prompt("Coloque el precio");
	descuento=prompt("coloque el descuento");
	descuentototal=(precio*descuento)/100;
	preciodescuento=precio-descuentototal;
	preciofinal=preciodescuento*1.21;
	aumentoiva=preciofinal-preciodescuento;
	alert("su descuento es de "+descuentototal+"$ , su precio con descuento es "+preciodescuento+"$ su aumento con el 21% de IVA es "+aumentoiva);
	document.getElementById('elPrecioFinal').value=preciofinal;	
	
}
