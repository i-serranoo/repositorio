


 //ACCORDION
 let acc = document.getElementsByClassName("accordion");
 let i;
 
 for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     this.classList.toggle("active");
     let panel = this.nextElementSibling;
     if (panel.style.display === "block") {
       panel.style.display = "none";
     } else {
       panel.style.display = "block";
     }
   });
 }

  

//TABS
function openCity(evt, cityName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//INCRIPCION
let caja = document.getElementById('id01');
// si apretas en cualquier lugar fuera de la caja,  sale de la inscripcion
window.onclick = function(event) {
  if (event.target == caja) {
    caja.style.display = "none";
  }
}



