
var lang = "pl";

var menu_pl = ["O mnie", "Projekty", "Kontakt"] ;
var menu_en = ["About me", "Projects", "Contact"];

var sort_pl = ["Sortowanie bąbelkowe", "Sortowanie szybkie"];
var sort_en = ["Bubble sort", "Quick sort"];

var srtBtn_pl = ["Sortuj", "Losuj"];
var srtBtn_en = ["Sort", "Randomize"];



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
            document.getElementById("randomize").innerHTML  = srtBtn_pl[1];
            document.getElementById("sort").innerHTML       = srtBtn_pl[0];
            for (var i = 0; i < sort_pl.length; i++){
              document.getElementById("sort"+i).innerHTML   = sort_pl[i];
            }
        }
        if (lang === "en"){
            document.getElementById("about").innerHTML      = menu_en[0];
            document.getElementById("projects").innerHTML   = menu_en[1];
            document.getElementById("contact").innerHTML    = menu_en[2];
            document.getElementById("randomize").innerHTML  = srtBtn_en[1];
            document.getElementById("sort").innerHTML       = srtBtn_en[0];
            for (var i = 0; i < sort_pl.length; i++){
              document.getElementById("sort"+i).innerHTML   = sort_en[i];
            }
        }
    }

    let randomize_array = document.getElementById("randomize");
    let sort_btn = document.getElementById("sort");
    let bars_container = document.getElementById("bars_container");
    let select_algo = document.getElementById("algo");
    let slider = document.getElementById("slider");
    let minRange = 1;
    let maxRange = 100;
    let numOfBars = slider.value;
    let heightFactor = 4;
    let speedFactor = 20;
    let unsorted_array = new Array(numOfBars);
    
    slider.addEventListener("input", function () {
      numOfBars = slider.value;
      maxRange = slider.value;
      bars_container.innerHTML = "";
      unsorted_array = createRandomArray();
      renderBars(unsorted_array);
    });
    
    let algotouse = "";
    
    select_algo.addEventListener("change", function () {
      algotouse = select_algo.value;
    });
    
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function createRandomArray() {
      let array = new Array(numOfBars);
      for (let i = 0; i < numOfBars; i++) {
        array[i] = randomNum(minRange, maxRange);
      }
    
      return array;
    }
    
    document.addEventListener("DOMContentLoaded", function () {
      unsorted_array = createRandomArray();
      renderBars(unsorted_array);
    });
    
    function renderBars(array) {
      for (let i = 0; i < numOfBars; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] * heightFactor + "px";
        bars_container.appendChild(bar);
      }
    }
    
    randomize_array.addEventListener("click", function () {
      unsorted_array = createRandomArray();
      bars_container.innerHTML = "";
      renderBars(unsorted_array);
    });
    
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    async function bubbleSort(array) {
      let bars = document.getElementsByClassName("bar");
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            for (let k = 0; k < bars.length; k++) {
              if (k !== j && k !== j + 1) {
                bars[k].style.backgroundColor = "aqua";
              }
            }
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            bars[j].style.height = array[j] * heightFactor + "px";
            bars[j].style.backgroundColor = "lightgreen";
            bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
            bars[j + 1].style.backgroundColor = "lightgreen";
            await sleep(speedFactor);
          }
        }
        await sleep(speedFactor);
      }
      return array;
    }
    
    async function swap(items, leftIndex, rightIndex, bars) {
      var temp = items[leftIndex];
      items[leftIndex] = items[rightIndex];
      items[rightIndex] = temp;
      bars[leftIndex].style.height = items[leftIndex] * heightFactor + "px";
      bars[leftIndex].style.backgroundColor = "lightgreen";
      bars[rightIndex].style.height = items[rightIndex] * heightFactor + "px";
      bars[rightIndex].style.backgroundColor = "lightgreen";
      await sleep(speedFactor);
    }
    async function partition(items, left, right) {
      let bars = document.getElementsByClassName("bar");
      let pivotIndex = Math.floor((right + left) / 2);
      var pivot = items[pivotIndex];
      bars[pivotIndex].style.backgroundColor = "red";
    
      for (let i = 0; i < bars.length; i++) {
        if (i != pivotIndex) {
          bars[i].style.backgroundColor = "aqua";
        }
      }
    
      (i = left),
        (j = right);
      while (i <= j) {
        while (items[i] < pivot) {
          i++;
        }
        while (items[j] > pivot) {
          j--;
        }
        if (i <= j) {
          await swap(items, i, j, bars);
          i++;
          j--;
        }
      }
      return i;
    }
    
    async function quickSort(items, left, right) {
      var index;
      let bars = document.getElementsByClassName("bar");
      if (items.length > 1) {
        index = await partition(items, left, right);
        if (left < index - 1) {
          await quickSort(items, left, index - 1);
        }
        if (index < right) {
          await quickSort(items, index, right);
        }
      }
    
      for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "aqua";
      }
      return items;
    }
    
    sort_btn.addEventListener("click", function () {
      switch (algotouse) {
        case "bubble":
          bubbleSort(unsorted_array);
          break;
        case "quick":
          quickSort(unsorted_array, 0, unsorted_array.length - 1);
          break;
        default:
          bubbleSort(unsorted_array);
          break;
      }
    });
};