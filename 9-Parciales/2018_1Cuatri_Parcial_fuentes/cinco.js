function mostrar()
{
	var planeta;
	planeta=prompt("Ingrese un planeta ");
	switch(planeta){
		case "mercurio":
		case "venus":
			alert("acá hace más calor");
			break;
		case "tierra":
			alert("aca vivimos");
			break;
		case "marte":
		case "jupiter":
		case "saturno":// si no coloco las comillas no me toma la variable de los casos
		case "urano":
		case "neptuno":
			alert("acá hace más frio");
			break;
		default :
			alert("no es un planeta valido volver a intentarlo ");			
	}

}
