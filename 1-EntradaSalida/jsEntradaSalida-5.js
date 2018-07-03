/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var edad;
	var nombre;	
	nombre=document.getElementById('elNombre').value;	
	edad=document.getElementById('laEdad').value;
	alert(" Usted se llama "+nombre+" y tiene "+edad+" años. ");// cuando ponia la coma me tiraba un error como si faltara un paretensis 
}
/* me salta un problema en el navegador averiguar despues 
*/
/*
	problema resuelte pasa que puse nombre y una coma eso hacia que me 
	la variable y no funcionara , aparte en JS  si quiere agregar una variablwe
	tengo que poner mas al inicio y al final para que funcione 
*/ 	
