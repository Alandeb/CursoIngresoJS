function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño){
	case "Marzo":
	case "Enero":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
		alert("Este mes tiene 31 dias");
		break;
	case "Septiembre":
	case "Junio":
	case "Abril":
	case "Noviembre":
		alert("Este mes tiene 30 días");
		break;
	case "Febrero":
		alert("Este mes tiene 28 días");
		break;		
}



}//FIN DE LA FUNCIÓN