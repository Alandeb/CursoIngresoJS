function mostrar()
{
	var nota;
	var contador=0;
	var sexo;
	var edad;
	var sumanota=0;
	var promedionota;
	var notamasbaja;
	var sexonotabaja;
	var contadorvaronesaprovadosmayores=0;
	var edadmasjoven;
	var sexomasjoven;
	var notamasjoven;
	var contadorfemenino=0;
	var edadprimeramujer;
	var notaprimeramujer;
	while(contador<5)
	{
		contador++;
		sexo=prompt("Ingrese sexo (f o m en miniscula)");
		while(sexo!="f"&&sexo!="m")
		 	{
		 		sexo=prompt("Ingrese sexo (f o m en miniscula)");	
		 	}
		edad=prompt("ingrese la edad entre");
		edad=parseInt(edad);
		while(isNaN(edad)||edad<1||edad>100)
		 	{
		 		edad=prompt("ingrese la edad entre");
				edad=parseInt(edad);
		 	}	
		nota=prompt("ingrese nota entre 0 y 10");
		nota=parseInt(nota);
		while(isNaN(nota)||nota<0 ||nota>10)
		 	{
		 		nota=prompt("ingrese nota entre 0 y 10");
				nota=parseInt(nota);	
		 	}
		sumanota=sumanota+nota;
		
		if(contador==1)
			{
				notamasbaja=nota;
				edadmasjoven=edad;
				notamasjoven=nota;
			 	sexomasjoven=sexo;
			 	sexonotabaja=sexo; 	
			}else
			 {
			 	if (nota<notamasbaja) 
			 	 {
			 	 	notamasbaja=nota;
			 	 	sexonotabaja=sexo;
			 	 }
			 	if (edad<edadmasjoven)
			 	 {
			 	 	edadmasjoven=edad;
			 	 	notamasjoven=nota;
			 	 	sexomasjoven=sexo;
			 	 } 
			 }
		if (sexo=="m"&&edad>=18&&nota>=6)
		 {
		 	contadorvaronesaprovadosmayores++;
		 }
		if (sexo=="f"&&contadorfemenino==0)
		 {
		 	notaprimeramujer=nota;
		 	edadprimeramujer=edad;
		 	contadorfemenino++;	
		 }
		 	

		 

	}
	promedionota=sumanota/contador;
	if(contadorfemenino==0)
	{
		alert("no hubo mujeres");
		edadprimeramujer="no hay mujeres";
		notaprimeramujer="no hay mujeres";
	}

	alert("el promedio de todas las notas es "+promedionota+ 
		" ,la nota mas baja es de "+notamasbaja+" es de sexo "+sexonotabaja+
		" ,cantidad de hombres mayores a 18 que aprobaron con 6 o mas "+contadorvaronesaprovadosmayores+
		" ,el mas joven tiene "+edadmasjoven+" es de sexo "+sexomasjoven+"y saco "+notamasjoven+
		" ,y la primera mujer ingresada tiene "+edadprimeramujer+" y saco"+notaprimeramujer);
}
















































































	/*var nombre;
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
*/
