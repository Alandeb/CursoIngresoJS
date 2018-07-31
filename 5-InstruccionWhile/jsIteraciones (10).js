function mostrar()
{

	var contadorpositivo=0;
	var contadornegativo=0;
	var contadorceros=0;
	var contadorpares=0;
	var sumapositivos=0;
	var sumanegativos=0;
	var sumadorcontador;
	var promedionegativo;
	var promediopositivo
	var numero;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("ingrese numero");
			numero=parseInt(numero);
		}		
		if (numero>0) 
		{
			sumapositivos+=numero;// es iguala a sumapso=sumapso+numero;
			contadorpositivo++;
		}else
			if (numero<0) 
			{
				sumanegativos+=numero;
				contadornegativo++;

			}else
			{
				contadorceros++;
			}
		if (numero%2==0) 
		{
			contadorpares++;
		}
		respuesta=prompt("coloque si para seguir y no para terminar");	
	}
	if (contadorpositivo>contadornegativo) 
	{
		sumadorcontador=contadorpositivo-contadornegativo;
	}else
		if (contadorpositivo<contadornegativo) 
		{
			sumadorcontador=contadornegativo-contadorpositivo;
		}else
		{
			sumadorcontador=0;
		}

	promediopositivo=sumapositivos/contadorpositivo;
	promedionegativo=sumanegativos/contadornegativo;
	document.write(sumanegativos+ "<BR>" +sumapositivos+"<BR>"+contadorpositivo+"<BR>"+contadornegativo+"<BR>"+contadorceros+"<BR>"+contadorpares+"<BR>"+promedionegativo+"<BR>"+promediopositivo+"<BR>"+promedionegativo+"<BR>"+sumadorcontador);


}//FIN DE LA FUNCIÓN