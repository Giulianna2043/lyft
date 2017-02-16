function init(){
    //console.log(init);
    var bandera=document.getElementById("bandera");
    var codigopais=document.getElementById("codigopais");
    
    var banderaC= localStorage.getItem('srcimg');
    var codeC = localStorage.getItem('code');
    
    bandera.src=banderaC;
    codigopais.textContent=codeC;
}






































/*function init()
{
    var button =document.getElementById("button");
    button.addEventListener("clic",OnButtonClick)
}

function OnButtonClick(){
    var input=document.getElementById("");
    localStorage.getItem("nombre",input.value);
    alert(olii);
}*/
