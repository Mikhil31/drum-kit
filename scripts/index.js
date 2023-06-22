for(var i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click", function (){
    makeSound(this.innerHTML);
    ani(this.innerHTML);
    
});
}
document.addEventListener("keypress", function(event){
   makeSound(event.key);
   ani(event.key);
});
function makeSound(objSound){
  switch (objSound) {
    case 'w':
        var audio = new Audio("sounds/drums/tom-1.mp3");
        audio.play();
        break;
        case "a":
        var audio = new Audio("sounds/drums/tom-2.mp3");
        audio.play();
        break;
        case "s":
        var audio = new Audio("sounds/drums/tom-3.mp3");
        audio.play();
        break;
        case "d":
        var audio = new Audio("sounds/drums/tom-4.mp3");
        audio.play();
        break;
        case "j":
        var audio = new Audio("sounds/drums/tom-5.mp3");
        audio.play();
        break;
        case "k":
        var audio = new Audio("sounds/drums/tom-6.mp3");
        audio.play();
        break;
        case "l":
        var audio = new Audio("sounds/drums/tom-7.mp3");
        audio.play();
        break;    
      default:
        break;
   }
}

function ani(key){
  //key returns the button text htat is being pressed or the value of the keypress
  document.querySelector("."+key).classList.add("pressed");
  setTimeout( function(){
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);
}