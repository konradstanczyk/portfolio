
var lang = "pl";

var menu_pl = ["O mnie", "Projekty", "Kontakt"] ;
var menu_en = ["About me", "Projects", "Contact"];

window.onload = function(){
    chooseLang();
    

    document.getElementById('pl').onclick = function(){
        lang = "pl";
        chooseLang();
    }

    document.getElementById('en').onclick = function(){
        lang = "en";
        chooseLang();
    }

    function chooseLang(){
        if (lang === "pl"){
            document.getElementById("about").innerHTML      = menu_pl[0];
            document.getElementById("projects").innerHTML   = menu_pl[1];
            document.getElementById("contact").innerHTML    = menu_pl[2];
        }
        if (lang === "en"){
            document.getElementById("about").innerHTML      = menu_en[0];
            document.getElementById("projects").innerHTML   = menu_en[1];
            document.getElementById("contact").innerHTML    = menu_en[2];
        }
    }
};