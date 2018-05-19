function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


var mode = document.querySelectorAll(".mode");
var sold = document.querySelectorAll(".soldListingContainer");
var active = document.querySelectorAll(".activeListingContainer");

init();

function init(){
  //mode buttons event listener
  for(var i=0; i<mode.length; i++){
    mode[i].addEventListener("click", function(){
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      for(var a=0; a<sold.length; a++){
        if(this.textContent === "Sold") {
          sold[a].classList.remove("hide");
        } else {
          sold[a].classList.add("hide");
        }
        for(var b=0; b<active.length; b++){
          active[b].classList.toggle("hide");
        }
      }
    });
  }
}
