const searchArea = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('#search');
const currentInput = document.querySelector('#currency');


// let coinsName = searchArea.value;
let result = document.querySelector('#result');
let currentCurrency = '';


searchButton.addEventListener('click',async(Event)=>{

    let request = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${searchArea.value}&tsyms=${currentInput.value}&api_key=fa8202be47f253f4310dd72040066ab2b218e1b7a8361e514273a48a22ee16de`);
    console.log(request);
    let data = await request.json();
    console.log(data);
    
    for(key in data){
        currentCurrency = key;
        // console.log(key);
        // console.log(data[key]);
        result.innerHTML +=`
        <div class = "coin">
         <h3>${searchArea.value}</h3>
         <span> ${data[key]}</span> <span>${key}</span>
        </div>`;
    }
   
    

});


