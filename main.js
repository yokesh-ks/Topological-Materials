const search = document.querySelector(".search-btn")
const text = document.getElementById("filter-materials");

/* serach button clicks function happens*/
search.addEventListener("click", function () {
    let result = text.value;
    const split = result.split(" ");
    result= split.join("");
    console.log(result);
    $.ajax({url: "https://www.materialsproject.org/rest/v2/materials/FeO/vasp?API_KEY=arSoZc9MekEHUDuh",crossDomain: true, success: function(result){
        console.log(result);
      }});
   const url = "https://www.materialsproject.org/rest/v2/materials/FeO/vasp?API_KEY=arSoZc9MekEHUDuh";
    fetch(url, {
        method: "GET",
        mode: 'no-cors',
        credentials: 'same-origin',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    })
    .then(function(response){
        console.log(response.json());
    }).then(data => {
        console.log(data);
    })


    /*getData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });*/
})

/*async function getData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
}*/


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


