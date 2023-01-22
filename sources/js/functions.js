var day
var hour
var minut
var second
function setGramme(x) {
   if(document.getElementById("gramme").value !== "") {
    localStorage.setItem('qteCons', document.getElementById("gramme").value);
   }
}

function setPrix(x) {
    if(document.getElementById("prix").value !== "") {
     localStorage.setItem('prixCons', document.getElementById("prix").value);
    }
 }

 function setDate(x) {
    if(document.getElementById("date").value !== "") {
     localStorage.setItem('dateArret', document.getElementById("date").value);
    }
 }

 function setHeure(x) {
    if(document.getElementById("heure").value !== "") {
     localStorage.setItem('heureArret', document.getElementById("heure").value);
    }
 }

 

 function heureEcouler(date, heure) {

    let now = new Date();
    let dateHeure = new Date(date + ' ' + heure);
    let diff = now - dateHeure;
  
    let jours = Math.floor(diff / 86400000);
    let heures = Math.floor((diff % 86400000) / 3600000);
    let minutes = Math.floor((diff % 3600000) / 60000);
    let secondes = Math.floor((diff % 60000) / 1000);
    
    document.getElementById('tempsSans').innerHTML = jours + ' jours, ' + heures + ' heures, ' + minutes + ' minutes et ' + secondes + ' secondes'
    day = jours
    hour = heures
    minut = minutes
    second = secondes

    setInterval(function(){
            heureEcouler(date, heure);
        }, 1000);
}

function argentEconomise() {
    jour = day + (hour / 24) + (minut/24/60) + (second / 24 / 60 / 60)
    prixConsomationSemaine = localStorage.getItem("prixCons")
    result = prixConsomationSemaine * jour / 7
    document.getElementById('argentEconomise').innerHTML = Math.round(result * 10000) / 10000 + "€"

    setInterval(function(){
        argentEconomise();
    }, 1000);
}

function grammeEconomise() {
    jour = day + (hour / 24) + (minut/24/60) + (second / 24 / 60 / 60)
    qteConsomationSemaine = localStorage.getItem("qteCons")
    result = qteConsomationSemaine * jour / 7
    document.getElementById('grammeEconomise').innerHTML = Math.round(result * 10000) / 10000 + "g"

    setInterval(function(){
        grammeEconomise();
    }, 1000);
}

function showProfile() {
    document.getElementById("app").style.display="none"
    document.getElementById("profile").style.display="block"
    document.getElementById("return").style.display = "block"

    document.getElementById("grammeProf").value = localStorage.getItem("qteCons")
    document.getElementById("prixProf").value = localStorage.getItem("prixCons")
    document.getElementById("dateProf").value = localStorage.getItem("dateArret")
    document.getElementById("heureProf").value = localStorage.getItem("heureArret")
}

function showHelp() {
    document.getElementById("app").style.display="none"
    document.getElementById("help").style.display="block"
    document.getElementById("return").style.display = "block"


    document.getElementById("grammeProf").value = localStorage.getItem("qteCons")
    document.getElementById("prixProf").value = localStorage.getItem("prixCons")
    document.getElementById("dateProf").value = localStorage.getItem("dateArret")
    document.getElementById("heureProf").value = localStorage.getItem("heureArret")
}


function setAll() {
    if(document.getElementById("grammeProf").value !== "") {
        localStorage.setItem('qteCons', document.getElementById("grammeProf").value);
    }

    if(document.getElementById("prixProf").value !== "") {
    localStorage.setItem('prixCons', document.getElementById("prixProf").value);
    }

    if(document.getElementById("dateProf").value !== "") {
        localStorage.setItem('dateArret', document.getElementById("dateProf").value);
    }

    if(document.getElementById("heureProf").value !== "") {
        localStorage.setItem('heureArret', document.getElementById("heureProf").value);
    }
 }






