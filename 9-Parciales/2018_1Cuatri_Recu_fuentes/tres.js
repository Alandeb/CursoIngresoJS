function mostrar()
{	
	var	precio;
	var descuento;
	var	descdinero;
	var	precdesc;
	var	preciofinal;
	var iva;

	precio=prompt("ingrese precio ","0");
	precio=parseInt(precio);
	descuento=prompt("ingrese descuento ","0");
	descuento=parseInt(descuento);
	precdesc=(100-descuento)*precio/100;
	descdinero=precio-precdesc;
	iva=(121*precio)/100;
	alert("se le descontara "+descdinero+" ,el precio con descuento "+precdesc+" y el precio con iva "+iva); 
	preciofinal=(121*precdesc)/100;
	document.getElementById('elPrecioFinal').value=preciofinal;
	
}
