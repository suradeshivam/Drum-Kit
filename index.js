var numberOfDrum=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrum;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){
  switch (key) {
    case "w":
      var aud=new Audio("sounds/tom-1.mp3")
      aud.play();
      break;
    case "a":
      var aud=new Audio("sounds/tom-2.mp3")
      aud.play();
      break;
    case "s":
      var aud=new Audio("sounds/tom-3.mp3")
      aud.play();
      break;
    case "d":
      var aud=new Audio("sounds/tom-4.mp3")
      aud.play();
      break;

    case "j":
      var aud=new Audio("sounds/snare.mp3")
      aud.play();
      break;
    case "k":
      var aud=new Audio("sounds/crash.mp3")
      aud.play();
      break;
    case "l":
      var aud=new Audio("sounds/snare.mp3")
      aud.play();
      break;
    default:

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");

  setTimeout( function(){
    activeButton.classList.remove("pressed");
  },100)

}
