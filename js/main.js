var boton=document.getElementById("btn-add");
boton.onclick=function(){
    var tarea=document.getElementById("texto");
    if (tarea.value == null || tarea.value.length == 0 || /^\s*$/.test(tarea.value)){
        alert (tarea.name+ ' no puede estar vacía o contener sólo espacios en blanco');
    }
    else{
        var lista=document.getElementById("lista");
        lista.style.display="block";
        var nuevaTarea=document.getElementById("new");
        nuevaTarea.innerHTML=tarea.value;
        tarea.value="";
        /*crear elementos al vuelo*/
    }
}