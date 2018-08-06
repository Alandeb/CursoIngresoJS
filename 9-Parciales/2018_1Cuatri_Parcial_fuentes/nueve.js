function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var contador=0;
	var contadorpar=0;
	var sumapeso=0;
	var promediopeso;
	var contadormarcascerogrados=0;
	var pesomaximo;
	var pesominimo;
	var marcapesado;



	while(true)
	{
		contador++;
		marca=prompt("Ingrese la marca del producto.(coloque no para terminar)");
		if (marca=="no")
		 {
		 	break;
		 }
		peso=prompt("Ingrese el peso del producto  debera estar entre 1 kg y los 100kg.");
		peso=parseInt(peso);
		while(isNaN(peso)||peso<1||peso>100)
		 {
		 	peso=prompt("Ingrese el peso del producto  debera estar entre 1 kg y los 100kg.");
			peso=parseInt(peso);
		 }
		temperatura=prompt("Ingrese la temperatura en la que se guarda el producto entre -30 y 30 grados"),
		temperatura=parseInt(temperatura);  
		while(isNaN(temperatura)||temperatura<-30||temperatura>30) 
		 {
		 	temperatura=prompt("Ingrese la temperatura en la que se guarda el producto entre -30 y 30 grados"),
			temperatura=parseInt(temperatura);  
		 }
		if (temperatura%2==0)
		 {
		 	contadorpar++;
		 } else
		    {
		  	 if (temperatura<1)
		 	  {
		 		contadormarcascerogrados++;
		 	  } 
		    }	  
		sumapeso=sumapeso+peso;
		promediopeso=sumapeso/contador;
		if (contador==1)
		 {
		 	pesomaximo=peso;
		 	pesominimo=peso;
		 }else
		  {
		  	if (peso>pesomaximo)
		  	 {
		  	 	pesomaximo=peso;
		  	 	marcapesado=marca;

		  	 }
		  	if (peso<pesominimo)
		  	 {
		  	 	pesominimo=peso;
		  	 } 
		  }




	}

	document.write("<BR>Las temperaturas pares son: "+contadorpar);
	document.write("<BR>El producto mas pesado es "+marcapesado+" y pesa "+pesomaximo+" kg");
	document.write("<BR>El peso menor es "+pesominimo+" kg");
	document.write("<BR>El promedio de los pesos totales es "+promediopeso+" kg");
	document.write("<BR>La cantidad de productos que se mantiene a menos de ceros grados es "+contadormarcascerogrados);


}
