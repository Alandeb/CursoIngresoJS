/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var alambre;
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	alambre=(ancho*2+largo*2)*3;
	alert("Usted deberia comprar "+alambre+" metros de alambre.");
}
function Circulo () 
{
	var radio;
	var alambre;
	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	alambre=(2*3.14159*radio);
	alert("Usted deberia comprar "+alambre+" metros de alambre.");
}
function Materiales () 
{
	var largo;
	var ancho;
	var material;
	var cal;
	var cemento;
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	material=(ancho*2+largo*2)/4;
	cal=material*3;
	cemento=material*2;
	alert("Usted necesita "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");


}