function mostrar()
{
	var precio;	
	var	descuento;
	var	resultado;
	precio=prompt("Ingrese precio ","0");
	precio=parseInt(precio);	
	descuento=prompt("Ingrese descuento ","0");
	descuento=parseInt(descuento);
	resultado=(100-descuento)*precio/100;
	document.getElementById('elPrecioFinal').value=resultado;//si coloco algo entre comillas despues del var no funciona el programa   
}

