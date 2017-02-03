var boton=document.getElementById("boton");
boton.setAttribute("onclick","onButtonClick()");

var listaTareas = [];
listaTareas = [
    {nombre:"Texto Uno",isDone:false},
    {nombre:"Texto Dos",isDone:false}
];

function onButtonClick (){
    var lista = document.getElementById("lista");
    var texto=document.getElementById("texto");
    
    listaTareas.push({nombre:texto.value,isDone:false});
    
    drawTasksList();
}

function drawTasksList (){
    var lista = document.getElementById("lista");
    lista.innerHTML="";
    for(var i in listaTareas){
        var html = "<li><input onclick='selectCheck("+i+")' type='checkbox' "+(listaTareas[i].isDone?"checked":"")+">"+"<span id='new'>"+listaTareas[i].nombre+"</span><i onclick='deleteSpan("+i+")' class='glyphicon glyphicon-trash tacho'></i></li>";
        
        lista.innerHTML += html;
    }
}

function selectCheck (_index){
    if(listaTareas[_index].isDone==false){
        listaTareas[_index].isDone=true;
        lista.childNodes[_index].childNodes[1].style.textDecoration="line-through";
    }else{
        listaTareas[_index].isDone=false;
        lista.childNodes[_index].childNodes[1].style.textDecoration="none";
    }
}

function deleteSpan(){
    
}
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

            
            
            
            
            
            