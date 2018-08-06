function mostrar()
{
	var numero;
	var letra;
	var contadorpares=0;
	var contadorimpares=0;
	var contadorceros=0;
	var contadorpositivos=0;
	var contador=0;
	var sumapositivo=0;
	var sumanegativo=0;
	var promediopositivo;
	var maximo;
	var minimo;
	var letraminimo;
	var letramaximo;

	while(true)
	{	
		contador++;
		letra=prompt("ingrese una letra cualquiera (ingrese no para terminar)");
		if (letra=="no") 
		{
			break;
		}
		numero=prompt("ingrese un numero entre -100 y 100 inclusive");
		numero=parseInt(numero);
		while(isNaN(numero)||numero<-100||numero>100) 
		{
			numero=prompt("ingrese un numero entre -100 y 100 inclusive");
			numero=parseInt(numero);
		}
		if (numero%2==0) 
		{
			contadorpares++;

		}else
		{
			contadorimpares++;
		}
		if(numero>0)
		{
			contadorpositivos++;
			sumapositivo=sumapositivo+numero;
			promediopositivo=sumapositivo/contadorpositivos;
		}else
		{
			sumanegativo=sumanegativo+numero;
		}
		if (contador==1) 
		{
			maximo=numero;
			minimo=numero;
			letramaximo=letra;
			letraminimo=letra;		
		}else
		{
			if (numero>maximo) 
			{
				maximo=numero;
				letramaximo=letra;
			}
			if (numero<minimo) 
			{
				minimo=numero;
				letraminimo=letra
			}
		}
		if (numero==0) 
		{
			contadorceros++;
		}




	}
	document.write("<BR>La cantidad de numeros pares es: "+contadorpares);
	document.write("<BR>La cantidad de numeros impares es: "+contadorimpares);
	document.write("<BR>La cantidad de ceros es: "+contadorceros);
	document.write("<BR>El promedio de los numeros ceros es: "+promediopositivo);
	document.write("<BR>La suma de numeros negativos: "+sumanegativo);
	document.write("<BR>El numero maximo es "+maximo+" y su letra es "+letramaximo);
	document.write("<BR>El numero minimo es "+minimo+" y su letra es "+letraminimo);




}
