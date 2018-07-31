function mostrar()
{

	var contador=0;
	/*var maxima=-99999;
		var minimo=99999;
	*/
	var bandera=0;// esto sirve para determinar algo
					//hay varias manerad de hacerlo pero la otra es hacerlo con el contador
				  // depende de eso  la bandera depende de la cantidad que quiera		
	// declarar variables
	
	var respuesta="si";
	var numero;
	while(respuesta!='no')
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if (bandera==0) {
			maxima=numero
			minimo=numero
			bandera=1
		}else
		{
			if (numero>maxima) 
			{
				maxima=numero
			}
			if (numero<minimo) 
			{
				minimo=numero;
			}	
		}
		
		respuesta=prompt("coloque si para continuar o no para terminar");	
	}

	document.getElementById('maximo').value=maxima;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN