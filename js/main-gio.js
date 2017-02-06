var boton=document.getElementById("boton");
boton.setAttribute("onclick","onButtonClick()");

var tareas=[];
// texto
// check

function onButtonClick(){
    var textArea=document.getElementById("texto");
    tareas.push({texto:textArea.value,check:false});
    textArea.value="";
    textArea.focus();
        crearElementos();
}

function crearElementos(){
    var lista= document.getElementById("lista");
    lista.innerHTML="";
    for (var i in tareas){
        var html= "<li class='tarea'><input onclick='onChecked("+i+")' class='check' type='checkbox' "+(tareas[i].check?"checked":"")+"><span "+(tareas[i].check?"style='text-decoration:line-through'":"style='text-decoration:none")+" id='new'>"+tareas[i].texto+"</span><i onclick class='glyphicon glyphicon-trash tacho'></i></li>";
        lista.innerHTML += html;
    }
}

function onChecked(pos){
    tareas[pos].check = !tareas[pos].check;
    crearElementos();
    /*if( tareas[pos].check==false){
        tareas[pos].check=true;
    }else{
        tareas[pos].check=false;
    }*/
}
set