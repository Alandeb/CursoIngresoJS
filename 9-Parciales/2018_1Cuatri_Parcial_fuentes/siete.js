/*
jose m 24
maria f 16
jesus maria	33
fer f 81	

*/
function mostrar()
{
	var	nombre;
	var edad;
	var sexo;
	var cantidadmujeres=0;
	var cantidadhombres=0;
	var cantidadmayores=0;
	var cantidadmenores=0;
	var edadmaxima;
	var edadminima;
	var contador=0;
	while(contador<4)
	{
		contador++;
		nombre=prompt("ingrese nombre");
		sexo=prompt("ingrese sexo");
		while(sexo!="f" && sexo!="m")
		{
			sexo=promtp("ingrese sexo");
		}
		edad=prompt("ingrese edad");
		edad=parseInt(edad);
		while(isNaN(edad)|| edad<0||edad>100)
		{
			edad=prompt("ingrese edad");
			edad=parseInt(edad);
		}
		if (sexo=="f") 
		{
			cantidadmujeres++;
		}else
		{
			cantidadhombres++;
		}
		if (edad>=18) 
		{
			cantidadmayores++;
		}else
		{
			cantidadmenores++;
		}
		if (contador==1) 
		{
			edadminima=edad;
			edadmaxima=edad;

		}else
			if (edad>edadmaxima) 
			{
				edadmaxima=edad;
			}
			if (edad<edadminima) 
			{
				edadminima=edad;
			}
	}
	document.write("<BR>Cantidad de hombres es: "+cantidadhombres+"<BR>Cantidad de mujeres es: "+cantidadmujeres);
	document.write("<BR>Cantidad de mayores es: "+cantidadmayores+"<BR>Cantidad de menores es: "+cantidadmenores);
	document.write("<BR>")
}
