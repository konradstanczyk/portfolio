var lang = "pl";

var menu_pl = ["O mnie", "Projekty", "Kontakt",] ;
var menu_en = ["About me", "Projects", "Contact"];

window.onload = function(){
    

    var money = 1;
    var moneyTotal = 0;
    var persec = 0.0;

    var particle1 = 0.00;
    var particle1Cost = 0.1;

    var particle2 = 0.00;
    var particle2Cost = 1;

    var particle3 = 0.00;
    var particle3Cost = 10;

    var particle4 = 0.00;
    var particle4Cost = 100;

    var boost = 1000;
    var boostCost = 10;

    var prestige = 1;

    var gameFrameRate = 100;

    var gameSpeed = 1000/gameFrameRate;

    var moneyText = document.getElementById('money');
    var persecText = document.getElementById('persec');
    var prodboostText = document.getElementById('prodboost');

    var p1td1Text = document.getElementById('p1td1');
    var p1td2Text = document.getElementById('p1td2');

    var p2td1Text = document.getElementById('p2td1');
    var p2td2Text = document.getElementById('p2td2');

    var p3td1Text = document.getElementById('p3td1');
    var p3td2Text = document.getElementById('p3td2');

    var p4td1Text = document.getElementById('p4td1');
    var p4td2Text = document.getElementById('p4td2');
    
    var boostText = document.getElementById('boost');
    var prestigeText = document.getElementById('prestige');

    var colorChange1 = document.getElementById("particle1");
    var colorChange2 = document.getElementById("particle2");
    var colorChange3 = document.getElementById("particle3");
    var colorChange4 = document.getElementById("particle4");



    setInterval(function MoneyUp(){

        particle1 += ((0.01*particle2)/(gameFrameRate))*boost;
        particle2 += ((0.01*particle3)/(gameFrameRate*10))*boost;
        particle3 += ((0.01*particle4)/(gameFrameRate*100))*boost;

        persec = (particle1*0.01)*prestige;
        money+= persec/gameFrameRate;
        moneyTotal+= persec/gameFrameRate;

        moneyText.innerHTML = _.round(money, 3)+"<span class='goldText'> $</span>";
        persecText.innerHTML = _.round(persec, 3)+"<span class='goldText'> $</span>/sec";
        prodboostText.innerHTML = _.round(boost, 2)+' production';

        p1td1Text.innerHTML = _.round(particle1, 2);

        p2td1Text.innerHTML = _.round(particle2, 2);

        p3td1Text.innerHTML = _.round(particle3, 2);

        p4td1Text.innerHTML = _.round(particle4, 2);

        var preTxt = moneyTotal/100000;
        preTxt = preTxt/prestige;
        preTxt+=1;
        prestigeText.innerHTML = 'Prestige<br>Lose everything<br>Gain '+_.round(preTxt, 1)+'x $ boost';

    },gameSpeed)

    function change(){
        if (money >= particle1Cost)colorChange1.style.backgroundColor = '#03fc2c';
        else colorChange1.style.backgroundColor = '#fc4103';

        if (money >= particle2Cost)colorChange2.style.backgroundColor = '#03fc2c';
        else colorChange2.style.backgroundColor = '#fc4103';

        if (money >= particle3Cost)colorChange3.style.backgroundColor = '#03fc2c';
        else colorChange3.style.backgroundColor = '#fc4103';

        if (money >= particle4Cost)colorChange4.style.backgroundColor = '#03fc2c';
        else colorChange4.style.backgroundColor = '#fc4103';

        if (particle4 >= boostCost)boostText.style.backgroundColor = '#03fc2c';
        else boostText.style.backgroundColor = '#fc4103';

        if (moneyTotal >= 100000)prestigeText.style.backgroundColor = '#03fc2c';
        else prestigeText.style.backgroundColor = '#fc4103';

    };

    setInterval(change, gameSpeed)

    function colorLoad(){
        var button1Color = (money / particle1Cost)*100;
        if (button1Color > 100){
            button1Color = 100;
        }

        var button2Color = (money / particle2Cost)*100;
        if (button2Color > 100){
            button2Color = 100;
        }

        var button3Color = (money / particle3Cost)*100;
        if (button3Color > 100){
            button3Color = 100;
        }

        var button4Color = (money / particle4Cost)*100;
        if (button4Color > 100){
            button4Color = 100;
        }

        p1td2Text.style.background= 'linear-gradient(to right, #03fc2c '+button1Color+'%, transparent 0)';
        p2td2Text.style.background= 'linear-gradient(to right, #03fc2c '+button2Color+'%, transparent 0)';
        p3td2Text.style.background= 'linear-gradient(to right, #03fc2c '+button3Color+'%, transparent 0)';
        p4td2Text.style.background= 'linear-gradient(to right, #03fc2c '+button4Color+'%, transparent 0)';
    }

    setInterval(colorLoad, gameSpeed)

    function costChange(){
        p1td2Text.innerHTML = _.round(particle1Cost, 3)+' $';
        p2td2Text.innerHTML = _.round(particle2Cost, 3)+' $';
        p3td2Text.innerHTML = _.round(particle3Cost, 3)+' $';
        p4td2Text.innerHTML = _.round(particle4Cost, 3)+' $';
        boostText.innerHTML = 'Boost production count by 1.25<br>Price: '+boostCost+' Particle4';
    }

    setInterval(costChange, gameSpeed)

    function particle1Up(){
        if (money >= particle1Cost){
            money -= particle1Cost;
            particle1++;
            particle1Cost *= 1.21;
        }
    }

    document.getElementById('particle1').onclick = function(){
        particle1Up();
        colorChange.style.backgroundColor = 'black';
    }
    
    function particle2Up(){
        if (money >= particle2Cost){
            money -= particle2Cost;
            particle2++;
            particle2Cost *= 1.21;
        }
    }

    document.getElementById('particle2').onclick = function(){
        particle2Up();
    }

    function particle3Up(){
        if (money >= particle3Cost){
            money -= particle3Cost;
            particle3++;
            particle3Cost *= 1.21;
        }
    }

    document.getElementById('particle3').onclick = function(){
        particle3Up();
    }

    function particle4Up(){
        if (money >= particle4Cost){
            money -= particle4Cost;
            particle4++;
            particle4Cost *= 1.21;
        }
    }

    document.getElementById('particle4').onclick = function(){
        particle4Up();
    }

    function boostUp(){
        if (particle4 >= boostCost){

            boost *= 1.25;
            boostCost += 10;
        }
    }

    document.getElementById('boost').onclick = function(){
        boostUp();
    }

    function prestigeUp(){
        if (money >= 100000){
            prestige += moneyTotal/100000;

            money = 0.1;
            moneyTotal = 0;
            persec = 0.0;
            particle1 = 0.00;
            particle1Cost = 0.1;
            particle2 = 0.00;
            particle2Cost = 1;
            particle3 = 0.00;
            particle3Cost = 10;
            particle4 = 0.00;
            particle4Cost = 100;
            boost = 1;
            boostCost = 10;
        }
    }

    document.getElementById('prestige').onclick = function(){
        prestigeUp();
    }


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

}