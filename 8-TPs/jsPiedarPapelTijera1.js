/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina=Math.floor(Math.random()*(3))+1;



}//FIN DE LA FUNCIÓN
function piedra()
{
	var piedra;
	piedra=1;

	if (eleccionMaquina==1){
		alert("empate");
	}else if (eleccionMaquina==2) {
		alert("perdio");

	}else
	{
		alert("gano");
	}



}//FIN DE LA FUNCIÓN
function papel()
{
	var papel;
	papel=2;

	if (eleccionMaquina==1){
		alert("gano");
	}else if (eleccionMaquina==2) {
		alert("empato");

	}else 
	{
		alert("perdio");
	}


}//FIN DE LA FUNCIÓN
function tijera()
{
		var tijera;
	tijera=3;

	if (eleccionMaquina==1){
		alert("perdio");
	}else if (eleccionMaquina==2) {
		alert("gano");

	}else 
	{
		alert("empato");
	}

	

}//FIN DE LA FUNCIÓN