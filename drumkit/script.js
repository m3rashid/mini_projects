for(var i=0; i<document.querySelectorAll(".drum").length; i++){

   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      var buttonclicked = this.innerHTML;
      makesound(buttonclicked);

   });
}

document.querySelector("#copyright").style.left = `${(window.innerWidth-170)/2}px`;


document.addEventListener("keypress", function(event){
   makesound(event.key);
});


function makesound(key){
   
   switch (key) {
      case "a":
         var audio1 = new Audio('sounds/1.mp3');
         audio1.play();
      break;

      case "s":
         var audio2 = new Audio('sounds/2.mp3');
         audio2.play();
      break;

      case "d":
         var audio3 = new Audio('sounds/3.mp3');
         audio3.play();
      break;

      case "f":
         var audio4 = new Audio('sounds/4.mp3');
         audio4.play();
      break;

      case "g":
         var audio5 = new Audio('sounds/5.mp3');
         audio5.play();
      break;

      case "h":
         var audio6 = new Audio('sounds/6.mp3');
         audio6.play();
      break;

      case "j":
         var audio7 = new Audio('sounds/7.mp3');
         audio7.play();
      break;

      case "k":
         var audio8 = new Audio('sounds/8.mp3');
         audio8.play();
      break;

      case "l":
         var audio9 = new Audio('sounds/9.mp3');
         audio9.play();
      break;

      default:
         console.log(clickedButton);
   };
};

