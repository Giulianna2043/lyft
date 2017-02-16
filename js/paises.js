var paises = '[
    {"nombre": "Brasil", "codigo": "065"},
    {"nombre": "Brasil", "codigo": "065"},
    {"nombre": "Brasil", "codigo": "065"}, 
    {"nombre": "Brasil", "codigo": "065"}, 
    {"nombre": "Brasil", "codigo": "065"},
    {"nombre": "Brasil", "codigo": "065"}, 
    {"nombre": "Brasil", "codigo": "065"},
    {"nombre": "Brasil", "codigo": "065"}, 
]';

var paisess = JSON.parse(paises);

for(var i = 0; i < libros.paisess; i++ )
 // alert('El libro: ' + libros[i].Titulo + ' es del autor: ' + libros[i].Autor);





function init()
{
	var lista=document.getElementById("lista-paises");
	var links=lista.getElementsByTagName("a");
	
	for (var i=0; i<links.length; i++)
	{
		links[i].addEventListener("click", onLinkClic)
	}
}

function onLinkClic(evt)
{
	var localStorage.setItem("pais",this.testContent)
}

