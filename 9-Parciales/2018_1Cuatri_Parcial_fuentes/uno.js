
function mostrar()
{
/*	var ancho;	
	var base;
	var r;	
 	ancho = prompt("Ingrese ancho del rectangulo ","0");	
 	ancho = parseInt(ancho); 
 	base = prompt("Ingrese largo del rectangulo ","0");
 	base = parseInt(base);// el parseInt sirve para hace que la variable pase a numero si no es solo una letra 
	r = 2*ancho + 2*base;
 	alert("Su perimetro es: "+r);
 */	
 	var numerouno;
 	var numerodos;
 	var numerotres;
 	var suma;
 	var promedio;
 	var resta;

 	numerouno=prompt("ingrese numero uno ","0");
 	numerouno=parseInt(numerouno);
 	numerodos=prompt("ingrese numero dos ","0");
 	numerodos=parseInt(numerodos);
 	numerotres=prompt("ingrese numero tres ","0");
 	numerotres=parseInt(numerotres);
 	suma=numerouno+numerodos+numerotres;
 	promedio=suma/3;
 	resta=numerouno-numerodos-numerotres;
 	alert(" la suma es: "+suma+" ,el promedio es: "+promedio+" y la resta es: "+resta); 

}
/*
se ingresa 3 numeros inf en una sola consola (alert) la suma ,
el promedio , y la resta de los numeros tal cual fueron ingresados 
*/