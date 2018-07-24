function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
	switch(mesDelAño){
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("a clases!!!");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
		
	}


}//FIN DE LA FUNCIÓN
/* switch(una variable ){es una funcion que compara
	case 1:


	break ; la palabra break me termina el case 
	default: siemppre va al final de todo los case
el switch usa una igualdad estrictac por que lo primero que 
evalua es el tipo de valor 	
}
*/