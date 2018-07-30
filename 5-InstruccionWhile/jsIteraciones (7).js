function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	//while(respuesta=='si')//isnan(variable )
						//para cuando muestre una letra termine		
	//{
		/*
		numero=prompt("ingrese");
		numero=parseInt(numero);
		acumulador=acumulador+numero;
		contador++;
		respuesta=prompt("coloque si para continuar o no para terminar");
		*/
		//otra manera de hacer es poner
	
		while (true){
		contador++;
		numero=prompt("ingrese numeros y para terminar coloque si");
			if(numero=="si"){
				break;
			}
		numero=parseInt(numero);
	
		acumulador=acumulador+numero;
	

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN