class Order{
    constructor(coffee,type){
        this.coffee = coffee;
        this.type = type;
    }
}
class Coffee extends Order{
    constructor(coffee, type){
        super(coffee, type)
    }
    getPrice(){
        const coffeePrice ={
            espresso:[{
            milk: 60,
            cream: 75,
            latte: 100
        }],
            cappuccino : [{
            milk: 80,
            cream: 90,
            latte: 125
        }],
            latte : [{
            milk: 100,
            cream: 125,
            latte: 150
        }],
    }
    function getValue(object, dataToRetrive){
        dataToRetrive.split('.').forEach(function(token){
            if(object) object = object[token];
        })
        return object;
    }
    
    let array = [coffeeTypeHandle(),addOnHandle()]
    let array1 = array.join('.0.')
    return getValue(coffeePrice,array1)
    
}

addOrder(coffee, type){
    return `coffee: ${coffee}, add-on: ${type}, price: ${this.getPrice()}`
    displayReceipt(coffee,type,this.getPrice())
    }
}
const displayReceipt=(coffee,type,getPrice)=>{

    const receipt = document.getElementById('receipt')
    // const items = addOrder()
    receipt.innerHTML=''
    const receiptHtml = `
    <li>${coffee} ${type} ${this.getPrice()}</li>
    `
    receipt.innerHtml += receiptHtml;
}


// console.log(coffeePrice.espresso.milk)
// Getting from HTML
    const esp = document.getElementById('espresso');
    const capp = document.getElementById('cappuccino')
    const lat = document.getElementById('latte')
    
    const mil = document.getElementById('milk')
    const cre = document.getElementById('cream')
    const latt = document.getElementById('latt')
    
    
// condition for the inputs
function coffeeTypeHandle(){
    if(esp.checked==true) return esp.value
    else if(capp.checked == true) return capp.value
    else if(lat.checked == true) return lat.value
}
function addOnHandle(){
    if(mil.checked==true) return mil.value
    else if(cre.checked==true) return cre.value
    else if(latt.checked == true) return latt.value
}

function eventFire(){
    
    // Initiating the constructor
    const coffeeOrder = new Coffee()
    console.log(coffeeOrder.addOrder(coffeeTypeHandle(), addOnHandle()))
  
}

    addToCart = document.getElementById('addToCart')
    addToCart.addEventListener('click', (e)=>{
    e.preventDefault()
    eventFire()
    displayReceipt()

})

// Show the receipt
// const receipt = document.getElementById('receipt')
// const displayReceipt = (coffee,type)=>{
    // receipt.innerHTML='';
//     receipt.innerHTML+= addOrder(coffee, type)
//     console.log(type)
// }
