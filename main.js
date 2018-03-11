window.addEventListener("load",init);

var nam;
var price;
var add;
var list;
var list_items;
var dele;
var update;
var edit;
var save;
var load;
var so;
var search;

function init(){
    nam = document.getElementsByClassName("nam");
    price = document.getElementsByClassName("pri");
    add = document.getElementsByClassName("add");
    add[0].addEventListener("click",create);
    lis = document.getElementsByTagName("ul");
    dele = document.getElementsByClassName("del");
    dele[0].addEventListener("click",delet);
    edit = document.getElementsByClassName("edi");
    edit[0].addEventListener("click",chang);
    update = document.getElementsByClassName("upd");
    update[0].addEventListener("click",updat);
    save = document.getElementsByClassName("sav");
    save[0].addEventListener("click",saveit);
    load = document.getElementsByClassName("loa");
    load[0].addEventListener("click",loadit);
    so = document.getElementsByClassName("sor");
    so[0].addEventListener("click",getsort);
    search = document.getElementsByClassName("sea");
    search[0].addEventListener("click",gosearch);
}

function create(){
    
    var li = document.createElement("li");
    li.textContent =nam[0].value + " " + price[0].value;
    lis[0].appendChild(li);
   list_items = document.getElementsByTagName("li");
    selectli();
}

function selectli(){
    for(var i=0;i<list_items.length;i++){
        list_items[i].addEventListener("click",select);
    }
}

function select(){
    
//    for(var i=0;i<list_items.length;i++){
//        list_items[i].classList.remove("change");
//    }
    event.srcElement.classList.toggle("change");
}

function delet(){
    if(lis[0].children.length == 0){
        alert("Please add a product");
    }
    for(var i=0;i<list_items.length;i++){
        if(lis[0].childNodes[i+1].classList.contains("change")){
            lis[0].removeChild(lis[0].childNodes[i+1]);
        }
    }
}


function chang(){
    if(lis[0].children.length == 0){
        alert("Please add a product");
    }
var x=0;
    for(var i=0;i<list_items.length;i++){
        if(!lis[0].childNodes[i+1].classList.contains("change")){
        x++;
            if(x==list_items.length){
            alert("Please select a product");
            break;
            }
        }
        if(lis[0].childNodes[i+1].classList.contains("change")){
            nam[0].value = lis[0].childNodes[i+1].textContent.split(" ")[0];
            price[0].value = lis[0].childNodes[i+1].textContent.split(" ")[1];
        }
    }
}

function updat(){
    if(lis[0].children.length == 0){
        alert("Please add a product");
    }
    for(var i=list_items.length;i>0;i--){
        if(lis[0].childNodes[i].classList.contains("change")){
            lis[0].childNodes[i].textContent = nam[0].value + " " +price[0].value ;
            break;
        }
    }
}


function saveit(){
    if(window.localStorage){
        for(var i =0;i<list_items.length;i++){
        localStorage["Item" + i] = list_items[i].textContent;
        }    }
        
}

function loadit(){
    var l=0;
    while(1){          
    var li = document.createElement("li");
    li.textContent = localStorage["Item"+l];
        if(li.textContent == ""){
        break;
    }
    lis[0].appendChild(li);
   list_items = document.getElementsByTagName("li");
    l++;
    
        selectli();
    }
}

function getsort(){
    var game = {};
    
    for(var i=0;i<list_items.length-1;i++){
        for(var j=i+1;j<list_items.length;j++){
            if(parseInt(lis[0].childNodes[i+1].textContent.split(" ")[1]) > parseInt(lis[0].childNodes[j+1].textContent.split(" ")[1]))
               {
                
                   var nu1 = lis[0].childNodes[i+1].textContent.split(" ")[1];
                   var pna1 = lis[0].childNodes[i+1].textContent.split(" ")[0];
                   var nu2 = lis[0].childNodes[j+1].textContent.split(" ")[1];
                   var pna2 = lis[0].childNodes[j+1].textContent.split(" ")[0];
                   
                
                   var temp = nu1;
                   nu1 = nu2;
                   nu2 = temp;
                               
                    temp = pna1;
                   pna1 = pna2;
                   pna2 = temp;
                
                   lis[0].childNodes[i+1].textContent = pna1 + " " + nu1;
                   lis[0].childNodes[j+1].textContent = pna2 + " " + nu2;
                   
    
          }
      }
    
    
    
}
}


function gosearch(){
    var ans = prompt('What product do you wanna store');
    for(var i=0;i<list_items.length;i++){
        if(lis[0].childNodes[i+1].textContent.split(" ")[0] == ans){
            lis[0].childNodes[i+1].classList.add("highlight");
        }
    }
}