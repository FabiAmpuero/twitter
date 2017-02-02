var boton=document.getElementById("boton");
boton.setAttribute("onclick","onButtonClick()");

var listaTareas = [];
listaTareas = [
    {nombre:"Texto Uno",isDone:false},
    {nombre:"Texto Dos",isDone:false}
];

function onButtonClick (_checked){
    var texto=document.getElementById("texto");
    listaTareas.push({nombre:texto.value,isDone:checkInput()});
    
    drawTasksList();
}

function drawTasksList (){
    var lista = document.getElementById("lista");
    lista.innerHTML="";
    for(var i in listaTareas){
        var html = "<li><input onclick='selectList(this)' type='checkbox' "+(listaTareas[i].isDone?"checked":"")+">"+"<span id='new'>"+listaTareas[i].nombre+"</span></li>";
        
        lista.innerHTML += html;
        
        //lista.childNodes[i]
    }
    
}

function selectList (){
    checkInput();
    for(var j in listaTareas){
        if(listaTareas[j].isDone==true){
            lista.childNodes[0].childNodes[1].style.textDecoration="line-through";
        }else{
            lista.childNodes[0].childNodes[1].style.textDecoration="none";
        }
    }
}

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

            
            
            
            
            
            