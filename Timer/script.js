var s = document.getElementById("second");
var ms = document.getElementById("milliseconds");
var id1, id2;

function start(){
    id1 = setInterval(seconds, 1000);
    id2 = setInterval(milliseconds, 10);
}

function seconds(){
    s.innerText++;
}

function milliseconds(){
    if(ms.innerText > 999){
        ms.innerText = 0;
    }
    else{
        ms.innerText = Number(ms.innerText) + 10;
    }
}


document.getElementById("start").addEventListener("click", start);

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(id1);
    clearInterval(id2);
});

document.getElementById("reset").addEventListener("click", function(){
    location.reload();
})
