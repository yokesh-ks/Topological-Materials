const search = document.querySelector(".search-btn")
const text = document.getElementById("filter-materials");

/* serach button clicks function happens*/
search.addEventListener("click", function () {
    let result = text.value;
    const split = result.split(" ");
    result= split.join("");
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'no-cors',
      };
      
      fetch("https://www.materialsproject.org/rest/v2/materials/FeO/vasp?API_KEY=arSoZc9MekEHUDuh", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
})

/* input display*/
function searchResult(elementList){
    text.value = elementList;
}

/* periodic click hover */
const btns = document.querySelectorAll(".symbol");
let elementList = "";
btns.forEach(function(btn){
    
    btn.addEventListener("click", function(e){
        
        const dis = e.currentTarget;
        if(dis.className === "symbol active"){
            dis.classList.remove("active");
            letter = dis.textContent;
            const myArr = elementList.split(" ");  // word to array
            var res = myArr.filter(item => item !== letter); //remove  from list
            elementList = res.join(" ");  // array to word
            searchResult(elementList);
        }
        else{
            dis.classList.add("active");
            elementList = dis.textContent+" "+elementList;
            searchResult(elementList);
        }
    })
})

/* Display elements */
/*
function display(data){
    let main = document.querySelector(".main");
    let element = "";
    data.forEach(value => {
        element = element + `<div class="element ${value.name}">
        <span class="atomic-number">${value.id}</span>
        <abbr class="symbol" title="${value.name}">${value.symbol}</abbr>
    </div>`;
    })
    main.innerHTML = element;
}


window.addEventListener("DOMContentLoaded", function(){
    fetch("periodic.json").then(response => response.json()).then(json => {
        this.users = json;
        display(this.users);
    })
})
*/


