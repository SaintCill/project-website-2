var menuBtn = document.getElementById("menuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-400px"

menuBtn.onclick = function() {
    if(sideNav.style.right == "-400px"){
        sideNav.style.right = "0";
        menu.src = "images/close.png"
    }
    else{
        sideNav.style.right = "-400px";
        menu.src = "images/menu.png"
    }
}

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);
