let decreaseBtn = document.querySelector('#quantity-down')
let increaseBtn = document.querySelector('#quantity-up')

function updateQuantity(displayQuantity){
    let quantity=document.querySelector('.total-quantity')
    quantity.innerHTML=displayQuantity
}


let quantity = 1  //would like to pull ths as a string extraction 

decreaseBtn.addEventListener('click',function(e){
    if(quantity>0){
        quantity--
    }else {
        window.alert("It is already at zero, dummy! (luv you)")
    }
    updateQuantity(`Quantity: ${quantity}`)
})

increaseBtn.addEventListener('click',function(e){
            quantity++
    updateQuantity(`Quantity: ${quantity}`)
})


//let itemPrice=document.querySelector('.product-info','h3.p')
//str.substring(str.lastIndexOf("$") + 1, str.lastIndexOf(" "))
//console.log(itemPrice)