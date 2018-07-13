function mostrar()
{
 //Genero el número RANDOM entre 1 y 10 
 var nota;
 nota=Math.floor(Math.random() * (10))+1 ;
 if (nota>=9) {
 	alert("excelente");
 }else if (nota>=4) {
 	alert("aprobo");
 }else{
 	alert("vamos, la proxima se puede");
 }
	

}//FIN DE LA FUNCIÓN