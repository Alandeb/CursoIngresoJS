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
	var edadmujeres=0;
	var edadhombres=0;
	var edadtotal=0;
	var contador=0;
	var	sexomayor;
	var	nombremayor;
	var nombremenor;	 	
	var promediototal;
	var	edadmaximafem;
	var nombremayorfem;	
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
			edadmujeres=(edadmujeres+edad)/cantidadmujeres;
		}else
		{
			cantidadhombres++;
			edadhombres=(edadhombres+edad)/cantidadhombres;
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
			nombremayor=nombre;
			sexomayor=sexo;

		}else
			if (edad>edadmaxima) 
			{
				edadmaxima=edad;
				nombremayor=nombre;
				sexomayor=sexo;
			}
			if (edad<edadminima) 
			{
				edadminima=edad;
				nombremenor=nombre;
			}
			
		edadtotal=edadtotal+edad;	
		promediototal=edadtotal/contador;	
	}
	document.write("<BR>Cantidad de hombres es: "+cantidadhombres+"<BR>Cantidad de mujeres es: "+cantidadmujeres);
	document.write("<BR>Cantidad de mayores es: "+cantidadmayores+"<BR>Cantidad de menores es: "+cantidadmenores);
	document.write("<BR>Edad de la persona mas grande: "+edadmaxima+"<BR>Edad de la persona mas joven: "+edadminima);
	document.write("<BR>Promedio edad mujeres: "+edadmujeres+"<BR>Promedio edad hombres: "+edadhombres+"<BR>Promedio de edad total: "+promediototal);
	document.write("<BR>Nombre del mas viejo: "+nombremayor+"<BR>Nombre mas viejo femenino: "+nombremayorfem);
	document.write("<BR>Nombre del mas joven: "+nombremenor+"<BR>sexo del mas viejo: "+sexomayor);	
}
