
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.querySelector('[name="name1"]');
    const emailInput = document.querySelector('[name="email"]');
    const phoneInput = document.querySelector('[name="phone"]');
    const messageInput = document.querySelector('[name="message"]');

    // Function to update local storage with input values
    $(function() {
        $('[name="name1"]').on('keyup', function() {
            localStorage.setItem('nameInput', $(this).val());
        });

        $('[name="email"]').on('keyup', function() {
            localStorage.setItem('emailInput', $(this).val());
        });

        $('[name="phone"]').on('keyup', function() {
            localStorage.setItem('phoneInput', $(this).val());
        });

        $('[name="message"]').on('keyup', function() {
            localStorage.setItem('messageInput', $(this).val());
        });
    })

    const formSubmitBtn = document.querySelector('.hello2 .form-group button');

    formSubmitBtn.addEventListener('click', function() {
        localStorage.clear();
        console.log('submitted');
    });

    if (localStorage.getItem('nameInput')) {
        nameInput.value = localStorage.getItem('nameInput');
    }

    if (localStorage.getItem('emailInput')) {
        emailInput.value = localStorage.getItem('emailInput');
    }

    if (localStorage.getItem('phoneInput')) {
        phoneInput.value = localStorage.getItem('phoneInput');
    }

    if (localStorage.getItem('messageInput')) {
        messageInput.value = localStorage.getItem('messageInput');
    }

    nameInput.addEventListener('change', function() {
        localStorage.setItem('nameInput', nameInput.value);
    });

    emailInput.addEventListener('change', function() {
        localStorage.setItem('emailInput', emailInput.value);
    });

    phoneInput.addEventListener('change', function() {
        localStorage.setItem('phoneInput', phoneInput.value);
    });

    messageInput.addEventListener('change', function() {
        localStorage.setItem('messageInput', messageInput.value);
    });
});



function refreshBtn(){
    location.reload();
}





var cart=[];

function addToCart(coffeeType, size, price) {
    // Perform actions to add the item to the cart
    var item = {
        coffeeType: coffeeType,
        size: size,
        price: price
    };

    // Add the item to the cart array or perform any other necessary actions
    cart.push(item);
    
    
    var totalPrice = 0;
    for (var i = 0; i < cart.length; i++) {
        totalPrice += parseFloat(cart[i].price.replace('£ ', ''));
    }

    var totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = '£' + totalPrice.toFixed(2);

    var totalCount = document.getElementById('total-count');
    totalCount.textContent = '' + cart.length;


    // Optionally, you can display a message or update the UI to reflect the item being added to the cart
    alert(size+' '+coffeeType+' added to cart!');
}


function Purchased(){
    if (cart.length==0){
        alert('Sorry no item added to basket!');
        location.reload(); 
    }else{
        alert('Purchased!');
        location.reload();
    }
}