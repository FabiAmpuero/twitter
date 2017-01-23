var boton=document.getElementById("boton");
var texto=document.getElementById("texto");
var lista=document.getElementById("lista");

boton.addEventListener("click",onButtonClick);

function onButtonClick(evento){
    agregarMensaje();
}

function agregarMensaje(){
    var mensaje=texto.value;
    
    /*------------------------variables globales*/
    check=document.createElement("input");
    span=document.createElement("span");
    item=document.createElement("li");
    item.className="tarea";
    
    var icon=document.createElement("i");
    icon.style.cursor="pointer";
    check.setAttribute("type","checkbox");
    check.className="check";
    icon.className="glyphicon glyphicon-trash tacho";
    
    span.innerHTML=mensaje;
    item.appendChild(check);
    item.appendChild(span);
    item.appendChild(icon);
    lista.appendChild(item);
    
    texto.value="";
    texto.focus();
    
    icon.addEventListener("click", onIconClick);
    check.addEventListener("click", onChange);   
}

function onIconClick(evento){
    console.log(evento.target.parentNode);
    lista.removeChild(evento.target.parentNode);
}

function onChange(evento){
    console.log(evento.target);
    if(evento.target.checked){
        evento.target.nextSibling.style.textDecoration="line-through";
    } else{
        evento.target.nextSibling.style.textDecoration="none";
    }
}