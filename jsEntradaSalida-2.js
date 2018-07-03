/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;		
	//nombre = "Alan";
	//alert(nombre);
	nombre = prompt("Ingrese su nombre", "natalia natalia");
	alert("Su nombre es: "+nombre);			
	//var person = prompt("Please enter your name", "Harry Potter"); // sacado de 23school
}
/* 
	prompt se usa para poder ingresar una o pedir algo  siempre se pone un igual = 
		adelante suele ir una variable , pero siemopre va algo antes
	esto se usa para saber donde va a guardar dicha inf en este caso la variable nombre 
	
	VAR es variable  siempre que tengo que agregar informacion se usa var y como se va a llamar dicha inf
		(siempre se pone primero las variables despues se el programa  )
*/				  