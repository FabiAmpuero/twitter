var boton=document.getElementById("boton");
boton.setAttribute("onclick","onButtonClick()");

var listaTareas = [];

function onButtonClick (){
    var lista = document.getElementById("lista");
    var texto=document.getElementById("texto");
    if(texto.value.length!=0){
    listaTareas.push({nombre:texto.value,isDone:false});
    texto.focus();
    texto.value=""
    drawTasksList();
    }else{
        alert("ingresa una tarea");
    }
}

function drawTasksList (){
    var lista = document.getElementById("lista");
    lista.innerHTML="";
    for(var i in listaTareas){
        var html = "<li class='tarea'><input class='check' onclick='selectCheck("+i+")' type='checkbox' "+(listaTareas[i].isDone?"checked":"")+">"+"<span "+(listaTareas[i].isDone?"style='text-decoration:line-through'":"style='text-decoration:none'")+" id='new'>"+listaTareas[i].nombre+"</span><i onclick='removeSpan("+i+")' class='glyphicon glyphicon-trash tacho'></i></li>";
        
        lista.innerHTML += html;
    }
}

function selectCheck (_index){
    if(listaTareas[_index].isDone==false){
        listaTareas[_index].isDone=true;
    }else{
        listaTareas[_index].isDone=false;
    }
    drawTasksList();
}

function removeSpan(_value){
    listaTareas.splice(_value, 1);
    drawTasksList();
}


// tareas[pos].check = !tareas[pos].check; crearElementos();
/*
>>>>>>> master
function isMayus (){
    var text=document.getElementById("texto");
    var array=text.value.split("");
    var first=array[0];
    var upper=first.toUpperCase();
    
    for(var i=1; i<array.length; i++) {
        upper += array[i].toLowerCase();
        text.value = upper;
    }
}
/*
function sendTask(){
    console.log("oli");
    var textoo=document.getElementById("texto");
    if(textoo.keyCode==13 && textoo.value.length!=0){
        onButtonClick();
        console.log("nopoi");
    }
}
/*
function removeSpan(_value){
    console.log("oli");
    var lista = document.getElementById("lista");
    
    lista.removeChild(lista.childNodes[_value]);
    drawTasksList();
}
*/

/*
function selectCheck (){
    listaTareas[i].isDone==true;
    
    
    var lista = document.getElementById("lista");
    for(var i=0; i<listaTareas.length;i++){
        // checkInput(lista.childNodes[i].getElementsByTagName("input")[0]);
        if(listaTareas[i].isDone==true){
            lista.childNodes[i].childNodes[1].style.textDecoration="line-through";
        }else{
            lista.childNodes[i].childNodes[1].style.textDecoration="none";
        }
    }
}*/
/*
function checkInput(){
    var _checked=false;
    for(var i=0;i<lista.childNodes.length;i++){
        //console.log(lista.childNodes[i]);
        if(lista.childNodes[i].getElementsByTagName("input")[0].checked){
            _checked=true;
        }else{
            _checked=false;
        }
    }
    return _checked;
}

function checkInput(_value){
    if(lista.childNodes[_value].getElementsByTagName("input")[0].checked){
        return true;
    }else{
        return false;
    }
}*/

            
            
            
            
            
            