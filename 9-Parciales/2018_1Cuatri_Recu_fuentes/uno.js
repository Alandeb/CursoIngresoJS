
function mostrar()
{
	var base;	
	var altura;
	var perimetro;	
	var superficie;
 	base = prompt("Ingrese la base del triangulo equilatero ","0");	
 	base = parseInt(base); 
 	altura = prompt("Ingrese el largo del triangulo equilatero ","0");
 	altura = parseInt(altura);// el parseInt sirve para hace que la variable pase a numero si no es solo una letra 
	perimetro = 3*base;//poner la p en mayus hizo que la variable cambien tener en cuenta 
	superficie = (base*altura)/2;
 	alert("Su perimetro es: "+perimetro+" y su superficie es: "+superficie);
}
