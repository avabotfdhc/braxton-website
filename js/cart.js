/**
 * B's Wild And Wonder - Shopping Cart
 * Full cart functionality with localStorage persistence
 */

// Cart state
let cart = [];

// Initialize cart from localStorage
document.addEventListener('DOMContentLoaded', function() {
  loadCart();
  updateCartUI();
});

// Load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem('bwaw_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('bwaw_cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(productId, size, quantity = 1) {
  const product = getProductById(productId);
  if (!product) return false;

  // Check if item already in cart
  const existingItem = cart.find(item => 
    item.id === productId && item.size === size
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      quantity: quantity
    });
  }

  saveCart();
  updateCartUI();
  showNotification(`${product.name} added to cart!`);
  return true;
}

// Remove item from cart
function removeFromCart(productId, size) {
  cart = cart.filter(item => !(item.id === productId && item.size === size));
  saveCart();
  updateCartUI();
  
  // If on cart page, refresh display
  if (document.getElementById('cart-items')) {
    displayCartItems();
  }
}

// Update item quantity
function updateQuantity(productId, size, newQuantity) {
  if (newQuantity < 1) {
    removeFromCart(productId, size);
    return;
  }

  const item = cart.find(item => item.id === productId && item.size === size);
  if (item) {
    item.quantity = newQuantity;
    saveCart();
    updateCartUI();
    
    // If on cart page, refresh display
    if (document.getElementById('cart-items')) {
      displayCartItems();
    }
  }
}

// Get cart total
function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
function getCartCount() {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Update cart UI (icon badge, etc.)
function updateCartUI() {
  const cartCountElements = document.querySelectorAll('.cart-count');
  const count = getCartCount();
  
  cartCountElements.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// Display cart items on cart page
function displayCartItems() {
  const cartContainer = document.getElementById('cart-items');
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added any adventures yet!</p>
        <a href="shop.html" class="btn btn-primary">Start Shopping</a>
      </div>
    `;
    updateCartSummary();
    return;
  }

  let html = '<div class="cart-items-list">';
  
  cart.forEach(item => {
    html += `
      <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.jpg'">
        </div>
        <div class="cart-item-details">
          <h3 class="cart-item-name">${item.name}</h3>
          <p class="cart-item-size">Size: ${item.size}</p>
          <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        </div>
        <div class="cart-item-quantity">
          <button class="qty-btn minus" onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity - 1})">−</button>
          <input type="number" class="qty-input" value="${item.quantity}" min="1" 
                 onchange="updateQuantity(${item.id}, '${item.size}', parseInt(this.value))">
          <button class="qty-btn plus" onclick="updateQuantity(${item.id}, '${item.size}', ${item.quantity + 1})">+</button>
        </div>
        <div class="cart-item-total">
          $${(item.price * item.quantity).toFixed(2)}
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id}, '${item.size}')" aria-label="Remove item">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    `;
  });
  
  html += '</div>';
  cartContainer.innerHTML = html;
  
  updateCartSummary();
}

// Update cart summary (subtotal, shipping, total)
function updateCartSummary() {
  const subtotalEl = document.getElementById('cart-subtotal');
  const shippingEl = document.getElementById('cart-shipping');
  const totalEl = document.getElementById('cart-total');
  
  if (!subtotalEl) return;

  const subtotal = getCartTotal();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

  // Update shipping message
  const shippingMessage = document.getElementById('shipping-message');
  if (shippingMessage) {
    if (subtotal >= 50) {
      shippingMessage.textContent = '🎉 You qualify for FREE shipping!';
      shippingMessage.className = 'shipping-message success';
    } else {
      const remaining = (50 - subtotal).toFixed(2);
      shippingMessage.textContent = `Add $${remaining} more for FREE shipping!`;
      shippingMessage.className = 'shipping-message';
    }
  }
}

// Clear entire cart
function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  if (document.getElementById('cart-items')) {
    displayCartItems();
  }
}

// Show notification
function showNotification(message) {
  // Remove existing notification
  const existing = document.querySelector('.cart-notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.innerHTML = `
    <span class="notification-icon">✓</span>
    <span class="notification-message">${message}</span>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => notification.classList.add('show'), 10);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Get cart for checkout
function getCartForCheckout() {
  return {
    items: cart,
    subtotal: getCartTotal(),
    shipping: getCartTotal() >= 50 ? 0 : 5.99,
    total: getCartTotal() + (getCartTotal() >= 50 ? 0 : 5.99)
  };
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    getCartCount,
    getCartForCheckout,
    clearCart,
    displayCartItems
  };
}
