var buttonPressed = document.querySelectorAll(".drum").length;

for(var i = 0 ; i<buttonPressed ; i++)
{
      document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
          var buttonInnerHTML =  this.innerHTML;
          makeSound(buttonInnerHTML);

      });
}


document.addEventListener("keypress",function(e){
      makeSound(e.key);
});

function makeSound(key){
  switch(key){
    case "w":
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
          break;

    case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

    case "s":
          var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
          break;

    case "d":
          var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
          break;

    case "j":
          var audio = new Audio('sounds/snare.mp3');
          audio.play();
          break;

    case "k":
          var audio = new Audio('sounds/kick-bass.mp3');
          audio.play();
          break;

    case "l":
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
          break;

    default:
          alert("Please enter a valid key w,a,s,d,j,k,l only to make your music");
  }
}
