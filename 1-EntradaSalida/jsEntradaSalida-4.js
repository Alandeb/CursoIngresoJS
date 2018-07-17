/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;		
	nombre = prompt(" ingrese su nombre");
	document.getElementById('elNombre').value=nombre;//este id se usa `para mostrar el nombre (variable)
}
/*		lo que va dentro del id es lo que esta en el html como su nombre id = en este caso 
		el nombre 
*/
