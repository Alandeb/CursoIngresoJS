function mostrar()
{
	var p;	
	var	d;
	var	r;
	var resta;
	p=prompt("Ingrese precio ","0");
	p=parseInt(p);	
	d=prompt("Ingrese descuento ","0");
	d=parseInt(d);
	resta=100-d;// se agrego otra variable por que no se podia hacer con %
	r= resta*p/100;
	document.getElementById('elPrecioFinal').value=r;//si coloco algo entre comillas despues del var no funciona el programa   
}

