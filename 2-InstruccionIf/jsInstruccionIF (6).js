function mostrar()
{
//tomo la edad  
var edad
edad=document.getElementById('edad').value;
if (edad>=18) { 
alert("la persona es mayor de edad");
}else if (edad<13) {// manera de poner otro if
alert("la persona es menor de edad");	
}else{
	alert("Es adolecente");
}

}//FIN DE LA FUNCIÓN
