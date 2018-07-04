
function mostrar()
{
	var a;	
	var b;
	var r;	
 	a = prompt("Ingrese ancho del rectangulo ","0");	
 	a = parseInt(a); 
 	b = prompt("Ingrese largo del rectangulo ","0");
 	b = parseInt(b);// el parseInt sirve para hace que la variable pase a numero si no es solo una letra 
	r = 2*a + 2*b;
 	alert("Su perimetro es: "+r);
}