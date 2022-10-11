
var lang = "pl";

var menu_pl = ["O mnie", "Projekty", "Kontakt", "Certyfikaty:"] ;
var menu_en = ["About me", "Projects", "Contact", "Certificates:"];

var org_pl = ["Organizator certyfikatu", "strefakursow.pl", "strefakursow.pl"];
var org_en = ["Certificate organizer", "strefakursow.pl", "strefakursow.pl"];

var tra_pl = ["Szkolenie", "Ekosystem JavaScript - wprowadzenie", "ES6 nowa generacja JavaScript"];
var tra_en = ["Training", "The JavaScript ecosystem - introduction", "ES6 new generation of JavaScript"];

var date_pl = ["Data ukończenia", "09.09.2022", "-"];
var date_en = ["Date of acquiring", "09.09.2022", "-"];

var textBox_pl = "<span class='whitetext'>Cześć</span>, mam na imię <span class='whitetext'>Konrad</span>, od dłuższego czasu pasjonuję się programowaniem stron internetowych oraz aplikacji mobilnych. Obecnie jestem studentem 3 roku Informatyki Stosowanej na Uniwersytecie Łódzkim i aktywnie poszukuję pracy jako Junior JavaScript Developer.";
var textBox_en = "<span class='whitetext'>Hi</span>, my name is <span class='whitetext'>Konrad</span>, I have been passionate about web and mobile application programming for a long time. I am currently a 3rd year student of Applied Informatics at the University of Lodz and am actively looking for a job as a Junior JavaScript Developer.";

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
            document.getElementById("certTxt").innerHTML    = menu_pl[3];
            if (org0){
                document.getElementById("textBox").innerHTML    = textBox_pl;
                for (var i = 0; i < org_pl.length; i++){
                    document.getElementById("org" +i).innerHTML    = org_pl [i];
                    document.getElementById("tra" +i).innerHTML    = tra_pl [i];
                    document.getElementById("date"+i).innerHTML    = date_pl[i]; 
                }
            }
        }
        if (lang === "en"){
            document.getElementById("about").innerHTML      = menu_en[0];
            document.getElementById("projects").innerHTML   = menu_en[1];
            document.getElementById("contact").innerHTML    = menu_en[2];
            document.getElementById("certTxt").innerHTML    = menu_en[3];
            if (org0){
                document.getElementById("textBox").innerHTML    = textBox_en;
                for (var i = 0; i < org_pl.length; i++){
                    document.getElementById("date"+i).innerHTML    = date_en[i];
                    document.getElementById("org" +i).innerHTML    = org_en [i];
                    document.getElementById("tra" +i).innerHTML    = tra_en [i];
                }
            }
        }
    }
};