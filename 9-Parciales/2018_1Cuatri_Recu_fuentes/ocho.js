function mostrar()
{
	var nombrelibro;
	var tema;
	var cantidaddepaginas;
	var contadorlibros=0;
	var cantidaddeventas;
	var contadorpares=0;
	var contadorimpares=0;
	var sumaventas=0;
	var promedioventas;
	var contadorceros=0;
	var sumapaginasprogramcion=0;


	while(true)
	{
		contadorlibros++;
		nombrelibro=prompt("ingrese el nombre del libro (coloque 'no' para terminar");
		if (nombrelibro=="no")
		 {
		 	break;
		 }
		cantidaddepaginas=prompt("ingrese cantidad de paginas del libro");
		cantidaddepaginas=parseInt(cantidaddepaginas);
		while(isNaN(cantidaddepaginas)||cantidaddepaginas>=1)
		 	{
		 		cantidaddepaginas=prompt("ingrese cantidad de paginas del libro");
				cantidaddepaginas=parseInt(cantidaddepaginas);	
		 	}	
		cantidaddeventas=prompt("cantidad de ventas ");
		cantidaddeventas=parseInt(cantidaddeventas);
		while(isNaN(cantidaddeventas)||cantidaddeventas>0)
		 {
		 	cantidaddeventas=prompt("cantidad de ventas ");
			cantidaddeventas=parseInt(cantidaddeventas);
		 }
		tema=prompt("ingrese tema del libro entre los 4 correspondientes");
		while(tema!="robotica"&&tema!="programacion"&&tema!="patrones"&&tema!="base de datos") 
			{
				tema=prompt("ingrese tema del libro entre los 4 correspondientes");
			}		
		if (cantidaddeventas%2==0)
		 {
		 	contadorpares++;
		 }else
		 {
		 	contadorimpares++;
		 }	
		if(cantidaddeventas==0)
		 {
		 	contadorceros++;
		 }
		sumaventas+=cantidaddeventas;
		if (tema=="programacion")
		 {
		 	sumapaginasprogramcion+=cantidaddepaginas;
		 } 





	}	
		if (contadorceros==contadorlibros)
		 {
		 	promedioventas=0;
		 }else
		 {
		 	promedioventas=sumaventas/contadorlibros;
		 }

		document.write("<BR>Cantidad de libros con paginas pares "+contadorpares);
		document.write("<BR>cantidad de libros con paginas impares "+contadorimpares);
		document.write("<BR>Cantidad de libros con cero ventas "+contadorceros);
		document.write("<BR>Promedio de todas las ventas "+promedioventas);
		document.write("<BR>Cantidad de paginas que tienen los libros de programacion "+sumapaginasprogramcion);

}
