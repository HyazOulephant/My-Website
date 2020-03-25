
var state = false;

function switchto(x) {
  x.classList.toggle("change");
  if (state == false) {
    openMenu();
    state = true;
  }
  else {
    closeMenu();
    state = false;
  }
}

function openMenu() {
  document.getElementById("monmenu").style.width = "250px";
}

function closeMenu() {
  document.getElementById("monmenu").style.width = "0";
}

//TODO plus tard
//https://www.w3schools.com/jquery/jquery_intro.asp
$(document).click(function(event) {
  if(event.target.id != 'menu' || event.target.id != 'monmenu' ) {closeMenu();}
});
