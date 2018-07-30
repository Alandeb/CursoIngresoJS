function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var	numero;
	var respuesta='si';
	
	/*while(respuesta=="si")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if (numero>=0) {
			positivo=positivo+numero;	
		} else{
			negativo=negativo*numero;
		}	
	respuesta=prompt("coloque si para continuar o no para terminar");


	}*/
	while(true){
	
		numero=prompt("ingrese numero y coloque si para terminar");		
		if (numero=="si"){
			break;
		}
		numero=parseInt(numero);
		if (numero>=0) {

			positivo=positivo+numero;	
		} else if (numero<0){
				
			negativo=negativo*numero;
			}
		
	}		
			
			

		


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN