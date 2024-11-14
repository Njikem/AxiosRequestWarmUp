

let button = document.getElementById('btnOne');

//success function
function success(response){
    let buton_click = document.getElementById('buton_click');
    console.log(response)
    
    for(let i = 0; i < response.data.length; i++){

        buton_click.insertAdjacentHTML('beforeend', `<div>
        
            <h4>Company Name:${response.data[i].name}</h4>
            <p>Address:${response.data[i].address_1}</p>
            
            
            </div>`)
    


    }

    
}

//failure function
function failure(error){
    console.log(error);
    document.body.innerHTML = 'Error has occur, please try again'
}


//Axios request and event listener
button.addEventListener('click', function(details) {

    axios.request({
        method: "GET",
        url: "https://api.openbrewerydb.org/breweries/random",
    }).then(success).catch(failure)
})




//success function

let buttonTwo = document.getElementById('btnTwo');


function successFunction(response){

    console.log(response)

    let button = document.getElementById('click');

    for(let i = 0; i < response.data.length; i++){

        button.insertAdjacentHTML('beforeend', `<div>
        
        <h5>Symbol: ${response.data[i].symbol}</h5>
        <p>Price: ${response.data[i].lastPrice}</p>
        
            </div>`)
    

    }

   
}


//failure function

function failureFunction(error){
    document.body.innerHTML = 'Something wrong has happen'
}



//Axios request and Event Listener

buttonTwo.addEventListener('click', function(details) {
    axios.request({
        method: "GET",
        url: "https://api2.binance.com/api/v3/ticker/24hr",
    }).then(successFunction).catch(failureFunction)
   

})