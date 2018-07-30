/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var	sexo;
 	var	estadocivil;
 	var	sueldo;
 	var	legajo;
 	var	nacionalidad;
 	edad=prompt("coloque una edad entre 18 y 90 inclusive");
 	while(edad<18 || edad>90)
 	{
 		edad=prompt("coloque una edad entre 18 y 90 inclusive");

 	}
 	sexo=prompt("coloque su sexo 'f' para femenino o 'm' para masculino","use minusculas");
 	while(sexo!="f" &&	sexo!="m")
 	{
 		sexo=prompt("coloque su sexo 'f' para femenino o 'm' para masculino","use minusculas");
 	}
 	if (sexo=="f") 
 	{
 		sexo=="femenino";
 	}else
 		{
 			sexo="masculino";
 		}
 
	estadocivil=prompt("coloque su estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
	while(estadocivil<1||estadocivil>4)
	{
		estadocivil=prompt("coloque su estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos ");
		
	}
	if (estadocivil==1) 
		{
			estadocivil= "soltero";
	
		}else
			if (estadocivil==2) 
			{
				estadocivil="casados";
				
			}else
				if (estadocivil==3)
				{
					estadocivil="divorciado";
				
				}else
					if (estadocivil==4) 
					{
						estadocivil="viudo";
					}
	sueldo=prompt("ingrese el sueldo bruto debera ser mayor a 8000");				
	while(sueldo<8000)
	{
		sueldo=prompt("ingrese el sueldo bruto debera ser mayor a 8000");
	}			
	legajo=prompt("ingrese su numero de legajo");
	while(legajo<1000 || legajo>9999)
	{
		legajo=prompt("ingrese su numero de legajo");
	}
	nacionalidad=prompt("ingrese “a” para argentinos, “e” para extranjeros, “n” para nacionalizados en minusculas" );
	while(nacionalidad!=a && nacionalidad!=e && nacionalidad!=n)
	{
		nacionalidad=prompt("ingrese “a” para argentinos, “e” para extranjeros, “n” para nacionalizados en minusculas" );
	}
	if (nacionalidad=="a") 
	{
		nacionalidad="argentino/a";
	}else
		if (nacionalidad=="e") 
		{
			nacionalidad="extranjero/a"
		}else
			{
				nacionalidad="nacionalizado/a";	
			}

}
