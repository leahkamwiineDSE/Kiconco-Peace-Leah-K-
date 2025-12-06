let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
li.textContent = `${item.product} - ${item.price} UGX`;
    cartItems.appendChild(li);
  });
  document.getElementById('cart-total').textContent = total;
}

document.getElementById('name').addEventListener('input', function() {
  document.getElementById('preview-name').textContent = "Name: " + this.value;
});
document.getElementById('address').addEventListener('input', function() {
  document.getElementById('preview-address').textContent = "Address: " + this.value;
});
document.getElementById('email').addEventListener('input', function() {
  document.getElementById('preview-email').textContent = "Email: " + this.value;
});

function showConfirmation() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const email = document.getElementById('email').value;
  const payment = document.getElementById('payment').value;

  if (!name || !address || !email || !payment) {
    alert("Please fill in all details and select a payment method.");
    return;
  }

  document.getElementById('confirmation-message').textContent =
  `✅ Thank you, ${name}! Your order has been placed successfully. 
  It will be shipped to ${address}. A confirmation email will be sent to ${email}. 
  Payment method: ${payment}. Total: ${total} UGX`;

}
