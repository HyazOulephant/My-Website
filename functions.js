
var state = false;
var page_actuelle = ["#", "MENU","_html"];

/*    ####################
      ##   JavaScript   ##
      ####################
*/
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

function closeMenuAfter() {
  if (state == true) {
    $('.menu_icon').toggleClass('change');
    closeMenu();
    state = false;
  }
}



/*    ####################
      ##     jQuery     ##
      ####################
*/


$(document).ready(function(){
//Clic en dehors de menu déroulé
  $('.page_wrapper').click(function(event){
    closeMenuAfter()
  });

//Changement de panneau |Résumer à une fonction pour chaque ne fonctionne pas

  //barre menu déroulant
  $('.menu').children().click(function(){
    //console.log(page_actuelle[0]+page_actuelle[1]+page_actuelle[2]);
    //check ancienne et nouvelle page
    if ($(this).attr('id') != page_actuelle[1]) {
      //recompose classe
      $(page_actuelle[0]+page_actuelle[1]+page_actuelle[2]).hide("Drop");
      $(page_actuelle[0]+$(this).attr('id')+page_actuelle[2]).show("Fade");
      //remplace ancien element
      page_actuelle[1] = $(this).attr('id');
      closeMenuAfter();

      //Bouton de retour menu
      if ($(this).attr('id') != "MENU") {
        $('.mini_menu').show();
      }
      else {
        $('.mini_menu').hide();
      }

    }
  });


  //mmini_menu
  $('.main_buttons').click(function(){
    //console.log(page_actuelle[0]+page_actuelle[1]+page_actuelle[2]);
    //check ancienne et nouvelle page
    if ($(this).attr('id') != page_actuelle[1]) {
      //recompose classe
      $(page_actuelle[0]+page_actuelle[1]+page_actuelle[2]).hide("Drop");
      $(page_actuelle[0]+$(this).attr('id')+page_actuelle[2]).show("Fade");
      //remplace ancien element
      page_actuelle[1] = $(this).attr('id');
      closeMenuAfter() //Meme si pas ouvert

      //Bouton de retour menu
      if ($(this).attr('id') != "MENU") {
        $('.mini_menu').show();
      }
      else {
        $('.mini_menu').hide();
      }
    }
  });

  $('.mini_menu').click(function(){
    if ($(this).attr('id') != page_actuelle[1]) {
      //recompose classe
      $(page_actuelle[0]+page_actuelle[1]+page_actuelle[2]).hide("Drop");
      $(page_actuelle[0]+$(this).attr('id')+page_actuelle[2]).show("Fade");
      //remplace ancien element
      page_actuelle[1] = $(this).attr('id');
      closeMenuAfter() //Meme si pas ouvert

      //Bouton de retour menu
      if ($(this).attr('id') != "MENU") {
        $('.mini_menu').show();
      }
      else {
        $('.mini_menu').hide();
      }
    }
  });

});
