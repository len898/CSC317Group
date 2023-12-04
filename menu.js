var quantities = {
    add_Coffee: 0,
    add_Brew: 0,
    add_Nitro: 0,
    add_Bagel: 0,
    add_Muffin: 0
};

var orderButtons = document.querySelectorAll('.order-button');
orderButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        quantities[button.id]++;
        console.log(button.value + ' added to cart. Quantity: ' + quantities[button.id]);
    });
});

var checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', function() {
    window.alert('Checkout button clicked');
});