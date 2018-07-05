
function mostrar()
{
	var a;	
	var b;
	var p;	
	var sup;
 	a = prompt("Ingrese la base del triangulo equilatero ","0");	
 	a = parseInt(a); 
 	b = prompt("Ingrese el largo del triangulo equilatero ","0");
 	b = parseInt(b);// el parseInt sirve para hace que la variable pase a numero si no es solo una letra 
	p = 3*a;//poner la p en mayus hizo que la variable cambien tener en cuenta 
	sup = (a*b)/2;
 	alert("Su perimetro es: "+p+" y su superficie es: "+sup);
}
