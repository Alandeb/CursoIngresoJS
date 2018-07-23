var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

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
		ContadorDeEmpates=ContadorDeEmpates+1;//puedo hacer lo mismo si pongo ContadorDeEmpates++ 
	}else if (eleccionMaquina==2) {
		alert("perdio");
		ContadorDePerdidas=ContadorDePerdidas+1;

	}else
	{
		alert("gano");
		ContadorDeGanadas=ContadorDeGanadas+1;
	}

	comenzar();
	mostrarResultado();// esto hace que se pueda ejecutar la funcion y poder inciar sin reiniciar el programa  


}//FIN DE LA FUNCIÓN
function papel()
{
	var papel;
	papel=2;

	if (eleccionMaquina==1){
		alert("gano");
		ContadorDeGanadas=ContadorDeGanadas+1;
	}else if (eleccionMaquina==2) {
		alert("empato");
			ContadorDeEmpates=ContadorDeEmpates+1;

	}else 
	{
		alert("perdio");
		ContadorDePerdidas=ContadorDePerdidas+1;
	}
	comenzar();
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function tijera()
{
		var tijera;
	tijera=3;

	if (eleccionMaquina==1){
		alert("perdio");
		ContadorDePerdidas=ContadorDePerdidas+1;
	}else if (eleccionMaquina==2) {
		alert("gano");
		ContadorDeGanadas=ContadorDeGanadas+1;

	}else 
	{
		alert("empato");
			ContadorDeEmpates=ContadorDeEmpates+1;
	}
	comenzar();
	mostrarResultado();	
	

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('ganadas').value=ContadorDeGanadas
	document.getElementById('perdidas').value=ContadorDePerdidas
	document.getElementById('empatadas').value=ContadorDeEmpates


}