var buttons = document.querySelectorAll("button");
var display = document.getElementById("input-box");
var op1, op2, operator;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", doAsDirected);
}

function doAsDirected(event) {
    var e = this.getAttribute("key");
    if (e == "AC") {
        location.reload();
    }


    else if (e == "+/-") {
        display.innerText = Number(display.innerText) * (-1);
    }

    else if (e == "+" || e == "-" || e == "*" || e == "/" || e == "%") {
        op1 = display.innerText;
        operator = e;
        display.innerText = "";
    }

    else if (e == "=") {
        op2 = display.innerText;
        if (op2 == "0" && operator == "/") {
            display.innerText = "-----Error-----";
    
            setTimeout(function(){
                location.reload();
            }, 1000);
        }

        else {
            result = eval(op1 + "" + operator + " " + op2);
            // display.innerText = (Math.round(result)).toFixed(3);
            display.innerText = Number(result).toLocaleString(undefined, {maximumFractionDigits: 6, minimumFractionDigits: 0});
        }

    }
    else if (e == "del") {
        var i = Number(display.innerText)/10;
        display.innerText = Math.floor(i);
    }

    else {
        display.innerText += e;
    }

}


