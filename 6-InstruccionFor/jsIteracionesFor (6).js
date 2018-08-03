function mostrar()
{
	var contador;
	var acumuladorpar=0;
	var numero;
	numero=prompt("ingrese un numero");
	numero=parseInt(numero);
	for ( contador=1;contador<=numero ;contador++ )
	{
			if (contador%2==0) 
			{
				acumuladorpar++;
				console.log("los numeros pares son: "+contador);
			}
	}
	console.log("la cantidad de numeros pares son: "+acumuladorpar);	



}//FIN DE LA FUNCIÓN