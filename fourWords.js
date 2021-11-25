const btn = document.getElementById("btn");
const list = document.getElementById("questionList");
var contents = document.getElementsByClassName("questions");

function draw(){
    var item = localStorage.getItem('fourWords');
    var usedItem = JSON.parse(item);
    clearQ();
    for(var i =0; i<10; i++){
        var index = Math.floor(Math.random()*usedItem.length);
        contents[i].innerHTML = usedItem[index];
    }
}

function clearQ(){
    for(let i = 0; i<10;i++)
    contents[i].innerHTML = "";
}

function init(){
    btn.addEventListener("click",draw);
    draw();
}
init();