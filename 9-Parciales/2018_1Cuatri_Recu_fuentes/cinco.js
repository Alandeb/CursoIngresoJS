function mostrar()
{
	var dia;
	dia=prompt("Ingrese un dia");
	switch(dia){
		case "sabado":
		case "domingo":
			alert("buen finde");
			break;
		case "lunes":
		case "martes":
		case "miercoles":// si no coloco las comillas no me toma la variable de los casos
		case "jueves":
		case "viernes":
			alert("a trabajar");
			break;
		default :
			alert("no es un dia valido volver a intentar ");			
	}

}
