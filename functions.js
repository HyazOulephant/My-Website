
var state = false;
var page_actuelle = ["#", "MENU","_html"];
var tab_upper = [];
var clicked;
var clic;
var delai = 50;

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
    if ($(this).attr('class') != page_actuelle[1]) {
      //recompose classe
      $(page_actuelle[0]+page_actuelle[1]+page_actuelle[2]).hide("Drop");
      $(page_actuelle[0]+$(this).attr('class')+page_actuelle[2]).delay(delai).show("Fade");
      //remplace ancien element
      page_actuelle[1] = $(this).attr('class');
      closeMenuAfter();

      //Bouton de retour menu
      if ($(this).attr('class') != "MENU") {
        $('#mini_menu').show();
      }
      else {
        $('#mini_menu').hide();
      }

    }
  });


  //boutons main menu
  $('.main_buttons').click(function(){
    //Recuperer clic
    clic = $(this).attr('class');
    //Recuperer les elements majuscules
    for (i in clic) {
      if (clic[i] == clic[i].toUpperCase() && clic[i] != "_" && clic[i] != " ") {
        //Stocker
        tab_upper.push(clic[i]);
      }
    }
    //Convertion format string
    clicked = tab_upper.join("");

    //check ancienne et nouvelle page
    if (clicked != page_actuelle[1]) {
      //recompose classe
      $(page_actuelle[0]+page_actuelle[1]+page_actuelle[2]).hide("Drop");
      $(page_actuelle[0]+clicked+page_actuelle[2]).delay(delai).show("Fade");
      //remplace ancien element
      page_actuelle[1] = clicked;
      //Efface contenu
      tab_upper=[];

      closeMenuAfter() //Meme si pas ouvert

      //Bouton de retour menu
      if ($(this).attr('class') != "MENU") {
        $('#mini_menu').show();
      }
      else {
        $('#mini_menu').hide();
      }
    }
  });


//bouton mini menu
  $('#mini_menu').click(function(){
    if ($(this).attr('class') != page_actuelle[1]) {
      //recompose classe
      $(page_actuelle[0]+page_actuelle[1]+page_actuelle[2]).hide("Drop");
      $(page_actuelle[0]+$(this).attr('class')+page_actuelle[2]).delay(delai).show("Fade");
      //remplace ancien element
      page_actuelle[1] = $(this).attr('class');
      closeMenuAfter() //Meme si pas ouvert

      //Bouton de retour menu
      if ($(this).attr('class') != "MENU") {
        $('#mini_menu').show();
      }
      else {
        $('#mini_menu').hide();
      }
    }
  });

});
