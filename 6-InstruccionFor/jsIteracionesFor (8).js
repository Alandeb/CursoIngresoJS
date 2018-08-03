function mostrar()
{
		var divisores;
		var numeroingresado;
		var numeroanterior;
		var numerorecorridos;	

		divisores=0;
		numeroingresado=prompt("ingrese numero");
		numeroingresado=parseInt(numeroingresado);

		for(numerorecorridos=numeroingresado;numerorecorridos>1;numerorecorridos--)
		{
			divisores=0;
			for(numeroanterior=numerorecorridos-1;numeroanterior>1;numeroanterior--)
			{
					if (numerorecorridos%numeroanterior==0) 
					{
						divisores++;
						break;
					}
			}
			if (divisores==0) 
			{
			console.log("es primo" +numerorecorridos);
				
		    }

		}	









/*
		for(numeroanterior=numeroingresado-1;numeroanterior>1;numeroanterior--)
		{
				if (numeroingresado%numeroanterior==0) 
				{
					divisores++;
					break;
				}
		}	
		if (divisores==0) 
		{
			console.log("es primo");
		}else
		{
			console.log("NO es de los numeros primos");	
		}


*/
}//FIN DE LA FUNCIÓN