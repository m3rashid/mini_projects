var input = document.getElementById("set-time");
var button = document.getElementById("submit");
var s = document.getElementById("second");
var ms = document.getElementById("milliseconds");


function sec(){
    if(s.innerText==0){
        clearInterval(id1);
        clearInterval(id2)
        ms.innerText = 000;
    }
    else{
        s.innerText--;
    }
}
function millisec(){
    if(ms.innerText<=0){
        ms.innerText = 999;
    }
    else{
        ms.innerText -= 10;
    }
}

button.addEventListener("click", function(){
    if(input.value>=1){
        s.innerText = input.value-1;
        ms.innerText = 999;
        id1 = setInterval(sec, 1000);
        id2 = setInterval(millisec, 10);
    }
})
