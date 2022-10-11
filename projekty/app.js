
var lang = "pl";

var menu_pl = ["O mnie", "Projekty", "Kontakt", "Certyfikaty:"] ;
var menu_en = ["About me", "Projects", "Contact", "Certificates:"];

var card_pl = ["Wizualne przedstawienie algorytmów sortowania takich jak: sortowanie bąbelkowe, szybkie sortwoanie", "Gra typu Incremental", "Todo - App"];

var card_en = ["Visualization of bubble sort algorithm and short sort algorithm", "Incremental game", "Todo - App"]
var link_pl = "Już wkrótce!";
var link_en = "Cooming soon!";

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
            document.getElementById("linkcs").innerHTML     = link_pl;
            for (var i = 0; i < card_pl.length; i++){
                document.getElementById("card" +i).innerHTML    = card_pl [i];
            } 
        }
        if (lang === "en"){
            document.getElementById("about").innerHTML      = menu_en[0];
            document.getElementById("projects").innerHTML   = menu_en[1];
            document.getElementById("contact").innerHTML    = menu_en[2];
            document.getElementById("linkcs").innerHTML     = link_en;
            for (var i = 0; i < card_en.length; i++){
                document.getElementById("card" +i).innerHTML    = card_en [i];
            } 
        }
    }
};