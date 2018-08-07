function mostrar()
{
	var numerouno;
	var numerodos;
	var respuesta;
	numerouno=prompt("ingrese el primer numero");
	numerouno=parseInt(numerouno);
	numerodos=prompt("ingrese el segundo numero");
	numerodos=parseInt(numerodos);
	if (numerouno==numerodos) 
	 {
		alert(" ingreso el numero "+numerouno+" dos veces ");
	 }else if (numerouno>numerodos) {
	   	respuesta=numerouno/numerodos;
	   	alert("la division es "+respuesta);	
	   	
	} else if (numerouno<numerodos){
		respuesta=numerouno+numerodos;
		if (respuesta<50) 
		{
			alert("la suma es "+respuesta+" y menor que 50");
		}else
		 {
				alert("la suma es "+respuesta);	
		 }	
	}


}

