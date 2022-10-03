// JavaScript Document

// JavaScript Document

//Script para dejar fijo algún elemento  
$(document).ready(function(){
    $(window).scroll(function() {
      if ($(document).scrollTop() >= 50) {
        $("nav").addClass("nuevaclase");
      } else {
        $("nav").removeClass("nuevaclase");
      }
    });
  });
  
  //Script para mostrar u ocultar la lista de menú  
  
  function myFunction() {
    var x = document.getElementById("mibarra");
    if (x.className === "barratop ") {
      x.className += " responsive";
    } else {
      x.className = "barratop ";
    }
  }
  
  
  // agregado para esconder y ver elementos ID
      function caja_visibility(id) {
         var e = document.getElementById(id);
            if (e.style.display == 'none')  {
                e.style.display = 'block';
                e.style.display = 'auto';
               } else {
            e.style.display = 'none';
            e.style.display = '0';
            }
      }
  
  // agregado para esconder elemento ID
      function caja_noloveo(id) {
         var e = document.getElementById(id);
            e.style.display = 'none';
      }
  // agregado para mostrar elemento ID
  function caja_siloveo(id) {
         var e = document.getElementById(id);
            e.style.display = 'block';
      }