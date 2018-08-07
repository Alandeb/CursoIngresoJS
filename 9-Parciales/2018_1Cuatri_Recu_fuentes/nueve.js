function mostrar()
{
	var nombre;
	var temperatura;
	var peso;
	var contadoranimales=0;
	var contadorpesospar=0;


	while(true)
	{
		contadoranimales++1;
		nombre=prompt("ingrese el nombre del animal (y coloque 'no' si desea terminar) ");
		if(nombre==no)
		{
			break;
		}
		temperatura=prompt("ingrese la temperatura de habitat (entre -30 y 30 grados)");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)||temperatura<-30||temperatura>30)
		{
			temperatura=prompt("ingrese la temperatura de habitat (entre -30 y 30 grados)");
			temperatura=parseInt(temperatura);
		}
		peso=prompt("ingrese un peso entre 1 y 1000 inclusive");
		peso=parseInt(peso);
		while(isNaN(peso)||peso<1||peso>1000)
		{
			
			peso=prompt("ingrese un peso entre 1 y 1000 inclusive");
			peso=parseInt(peso);
		}
		if (peso%2==0)
		 {
		 	contadorpesospar++;
		 }
		if (contadoranimales==1)
		 {
		 	
		 } 





	}


}
