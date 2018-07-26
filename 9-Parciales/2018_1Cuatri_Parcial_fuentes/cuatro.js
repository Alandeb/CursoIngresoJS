function mostrar()
{
	var numerouno;
	var numerodos;
	var resultado;
	numerouno=prompt("Coleque numero uno");
	numerouno=parseInt(numerouno);
	numerodos=prompt("Coleque numero dos");
	numerodos=parseInt(numerodos);
	if (numerouno==numerodos) {
		alert("Su numero uno es "+numerouno+" y su numero dos es "+numerodos+" son iguales");
	 }else{
	 	if (numerouno>numerodos) {
	 		resultado=numerouno-numerodos;
	 		alert("El resultado es "+resultado);
	 	}else{
	 		resultado=numerouno+numerodos
	 		alert("El resultado es "+resultado);
	 		}
	 	}
	if (resultado>10 && (numerouno<numerodos)) {
		alert("la suma es "+resultado+" y supero el 10");
	 			
	}else{}		 
}
