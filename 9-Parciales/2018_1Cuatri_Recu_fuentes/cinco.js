function mostrar()
{
	var dia;
	dia=prompt("ingrese un dia de la semana ");
	switch(dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			alert("A trabajar");
			break;	
		case "sabado":
		case "domingo":
		   	alert("buen fin de semana ");
		   	break;
		default:
			alert("no es un dia valido");	   		
	}
}