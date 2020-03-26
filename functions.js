
var state = false;

//JavaScript
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


//jQuery
$(document).ready(function(){

  $('.page_wrapper').click(function(event){
    if (state == true) {
      $('.menu_icon').toggleClass('change');
      closeMenu();
      state = false;
    }
  });

});
