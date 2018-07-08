/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  
  	var numeroUno;
	var	numeroDos;
	var resultado;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos; // el signo mas sirve para concatenar  y sumar
	alert(resultado);
/*	
	numeroUno=parseInt(numero1);
	numeroDos=parseInt(numeroDos);
	resultado=numero1+numero2;
	alert("La suma es "+resultado);




	*/
	
}

