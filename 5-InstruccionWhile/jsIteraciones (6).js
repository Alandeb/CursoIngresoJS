function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	while(contador<5)
	{
		contador++;
		numero=prompt("Ingrese sus numeros ");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
/*acumular es una manera de acumular variables 
2 variables entonces me permite guardar una variable y sumarla a una ya guardad
*/