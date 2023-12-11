const variantId = 'your-variant-id';

// Function to add item to cart
const addItemToCart = () => {
  fetch(`https://${shopName}.myshopify.com/cart/add.js`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: variantId,
      quantity: 1,
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Item added to cart:', data);
    // You can redirect to the cart or update the UI as needed
  })
  .catch(error => {
    console.error('Error adding item to cart:', error);
  });
};

// Call the function to add item to cart
addItemToCart();
