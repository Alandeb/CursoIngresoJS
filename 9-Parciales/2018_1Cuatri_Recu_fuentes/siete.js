function mostrar()
{
	var nombre;
	var sexo; 
	var edad;
	var nota;





	while(true)
	{
		nombre=prompt("Ingrese nombre.(coloque 'no' para terminar)");
		if (nombre=="no")
		 {
		 	break;
		 }
		sexo=prompt("Ingrese sexo de la persona ('f' o 'm' en minuscula)");
		while(sexo!="f"&&sexo!="m")
		 {
			sexo=prompt("Ingrese sexo de la persona ('f' o 'm' en minuscula)");
		 }
		edad=prompt("Ingrese edad de la persona.(entre 1 y 100)");ç
		edad=parseInt(edad);
		while(isNaN(edad)||edad<1||edad>100)
		 {
		 	edad=prompt("Ingrese edad de la persona.(entre 1 y 100)");ç
			edad=parseInt(edad);
		 } 
		nota=prompt("Ingrese nota de la persona");
		nota=parseInt(nota);
		while(isNaN(nota)||nota<1||nota>10) 
		 {
		 	nota=prompt("Ingrese nota de la persona");
			nota=parseInt(nota);
		 } 
		 
	}
}
