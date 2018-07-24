/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 
	var marca;
	var	preciofinal;
	var	cantidadlamparas;
	var	preciolampara;
	cantidadlamparas=document.getElementById('Cantidad').value;
 	cantidadlamparas=parseInt(cantidadlamparas);
 	preciolampara=cantidadlamparas*35;
 	marca=document.getElementById('Marca').value;

 	switch(cantidadlamparas){
 		case 1:
 			preciofinal=preciolampara
 			break;
 		case 2:
 			preciofinal=preciolampara
 			break;
 		case 3:
 			if (marca=="ArgentinaLuz"){
 				preciofinal=preciolampara*0.85;
 			}else {
 				if (marca=="FelipeLamparas") {
 					preciofinal=preciolampara*0.90;
 				}else{
 					preciofinal=preciolampara*0.95;
 			    }
 			}    
 			break;	
 		case 4:
 			if (marca=="ArgentinaLuz"||marca=="FelipeLamparas") {
 				preciofinal=preciolampara*0.75;
 			}else{
 				preciofinal=preciolampara*0.80;
 			}
 			break;
 		case 5:
 			if (marca!="ArgentinaLuz") {
 				preciofinal=preciolampara*0.70;
 			}else{
 				preciofinal=preciolampara*0.60;
 			}
 		break;
 		default:
 			preciofinal=preciolampara*0.50;
 						
 	}	
 	document.getElementById('precioDescuento').value=preciofinal;
 	if (preciofinal>=120)
	{
		precioaumentoIIBB=(preciofinal*110)/100;
		document.getElementById('precioDescuento').value=precioaumentoIIBB;
		IIBB=((preciofinal*110)/100-preciofinal);
		alert("IIBB Usted pago "+IIBB);
	}
	







































 /*




 	var cantidadlamparas;
 	var	marca;
 	var preciodescuento;
 	var	preciolampara;
 	var precioaumentoIIBB;
 	var IIBB;
 	cantidadlamparas=document.getElementById('Cantidad').value;
 	cantidadlamparas=parseInt(cantidadlamparas);
 	preciolampara=cantidadlamparas*35;
 	marca=document.getElementById('Marca').value;
 	if (cantidadlamparas>=6) 
 	{
 	preciodescuento=(preciolampara*50)/100;
	}else if (cantidadlamparas==5 && marca=='ArgentinaLuz') 
	{
		preciodescuento=(preciolampara*60)/100;
	}else if (cantidadlamparas==5	&&	marca!='ArgentinaLuz') 
	{
		preciodescuento=(preciolampara*70)/100;
	}else if (cantidadlamparas==4 && (marca=='ArgentinaLuz' || marca=='FelipeLamparas'))
	{
		preciodescuento=(preciolampara*75)/100;
	}else if (cantidadlamparas==4 && (marca!='ArgentinaLuz' || marca!='FelipeLamparas'))
	{
		preciodescuento=(preciolampara*80)/100;
	}else if (cantidadlamparas==3 && marca=='ArgentinaLuz')
	{
		preciodescuento=(preciolampara*85)/100;
	}else if (cantidadlamparas==3 && marca=='FelipeLamparas')
	{
		preciodescuento=(preciolampara*90)/100;
	}else if (cantidadlamparas==3 && (marca!='ArgentinaLuz'|| marca!='FelipeLamparas'))
	{
		preciodescuento=(preciolampara*95)/100;
	}else	if 	(cantidadlamparas<3)
	{
		preciodescuento=cantidadlamparas*35;
	}else 
	{
		alert("coloque la cantidad de lamparas");
	}
	document.getElementById('precioDescuento').value=preciodescuento;
	if (preciodescuento>=120)
	{
		precioaumentoIIBB=(preciodescuento*110)/100;
		document.getElementById('precioDescuento').value=precioaumentoIIBB;
		IIBB=((preciodescuento*110)/100-preciodescuento);
		alert("IIBB Usted pago "+IIBB);
	}
	
*/	

}
