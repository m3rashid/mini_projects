var number1 = Math.random()*6;
var num1 = Math.floor(number1)+1;

var number2 = Math.random()*6;
var num2 = Math.floor(number2)+1;

document.getElementsByClassName("go")[0].onclick = function go(){

   document.getElementById("headline").style="display:none";

   document.getElementById("leftBox").innerHTML = (num1);
   document.getElementById("rightBox").innerHTML = (num2);

   if(num1 > num2){
      document.getElementById("player1").style="display:block";
   }
   else if(num1 < num2){
      document.getElementById("player2").style="display:block";
   }
   else{
      document.getElementById("draw").style="display:block";
   }
   document.getElementsByClassName("reset")[0].style="display:inline-block";
   return;
}

document.getElementsByClassName("reset")[0].onclick = function load() {location.reload();}


