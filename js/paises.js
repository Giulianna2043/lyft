function init()
{
   //console.log(init);
    var paisesJson =
  '[{"nombre": "Australia","imagen": "paises/au.png","phone_code": 297},{"nombre": "Canada","imagen": "paises/ca.png","phone_code": 297},'+
  '{"nombre": "China","imagen": "paises/cn.png","phone_code": 297},{"nombre": "Francia","imagen": "paises/fr.png","phone_code": 297},'+
  '{"nombre": "India","imagen": "paises/in.png","phone_code": 297}]';
    var paises=JSON.parse(paisesJson);
    //console.log(paises[0].nombre);
    

    var listaPaises= document.getElementById("lista-paises");
    //console.log(listaPaises);
        for(var i  in paises)
        {
		
        var html='<a href="signup.html"> <li><img class="imagen"  src="'+paises[i].imagen+'" alt="">'+paises[i].nombre+'<span class="codigo">'+paises[i].phone_code+'</span></li></a>';
    
		listaPaises.innerHTML+=html;
	}
    
    var link =document.getElementsByTagName("li");
    //console.log(link);
    
    for (var i=0 ;i<link.length;i++){
		link[i].addEventListener('click', onLinkClick);
    }
}


function onLinkClick(evt)
{   
    var imgSrc=evt.currentTarget.getElementsByClassName("imagen")[0].src;
    //console.log(imgSrc);
    var codigo=evt.currentTarget.getElementsByClassName("codigo")[0].textContent;
    localStorage.setItem('srcimg',imgSrc);
    localStorage.setItem('code',codigo);
    

}














