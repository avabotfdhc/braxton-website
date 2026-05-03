/**
 * B's Wild And Wonder - Stripe Checkout Integration
 * Secure payment processing
 */

// Stripe configuration - Replace with your actual publishable key
const STRIPE_PUBLISHABLE_KEY = 'pk_test_YOUR_STRIPE_PUBLISHABLE_KEY_HERE';

// Initialize Stripe
let stripe;
let elements;
let cardElement;

// Initialize checkout when page loads
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('checkout-form')) {
    initStripeCheckout();
  }
});

function initStripeCheckout() {
  // Load Stripe.js
  loadStripeJS().then(() => {
    stripe = Stripe(STRIPE_PUBLISHABLE_KEY);
    
    // Create card element
    elements = stripe.elements();
    cardElement = elements.create('card', {
      style: {
        base: {
          fontSize: '16px',
          color: '#2A2A2A',
          '::placeholder': {
            color: '#737373',
          },
        },
        invalid: {
          color: '#EF4444',
        },
      },
    });
    
    // Mount card element
    const cardContainer = document.getElementById('card-element');
    if (cardContainer) {
      cardElement.mount('#card-element');
    }
    
    // Handle form submission
    const form = document.getElementById('checkout-form');
    form.addEventListener('submit', handleCheckoutSubmit);
  });
}

// Load Stripe.js dynamically
function loadStripeJS() {
  return new Promise((resolve, reject) => {
    if (window.Stripe) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Handle checkout form submission
async function handleCheckoutSubmit(e) {
  e.preventDefault();
  
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const errorContainer = document.getElementById('card-errors');
  
  // Disable submit button
  submitBtn.disabled = true;
  submitBtn.textContent = 'Processing...';
  
  try {
    // Get form data
    const formData = new FormData(e.target);
    const email = formData.get('email');
    
    // Create payment method
    const {paymentMethod, error} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: formData.get('cardName'),
        email: email,
        address: {
          line1: formData.get('address'),
          line2: formData.get('address2'),
          city: formData.get('city'),
          state: formData.get('state'),
          postal_code: formData.get('zip'),
          country: formData.get('country'),
        },
      },
    });
    
    if (error) {
      throw error;
    }
    
    // Get cart data
    const cart = getCartForCheckout();
    
    // Create order on backend (you'll need to implement this)
    const orderData = {
      paymentMethodId: paymentMethod.id,
      email: email,
      items: cart.items,
      subtotal: cart.subtotal,
      shipping: cart.shipping,
      total: cart.total,
      shippingAddress: {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        address: formData.get('address'),
        address2: formData.get('address2'),
        city: formData.get('city'),
        state: formData.get('state'),
        zip: formData.get('zip'),
        country: formData.get('country'),
        phone: formData.get('phone'),
      },
    };
    
    // For now, simulate successful order
    // In production, send orderData to your backend
    console.log('Order data:', orderData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart
    clearCart();
    
    // Show success
    document.getElementById('checkout-content').style.display = 'none';
    document.getElementById('order-success').style.display = 'block';
    window.scrollTo(0, 0);
    
  } catch (error) {
    console.error('Checkout error:', error);
    if (errorContainer) {
      errorContainer.textContent = error.message || 'An error occurred. Please try again.';
    }
    submitBtn.disabled = false;
    submitBtn.textContent = 'Complete Order';
  }
}

// Calculate shipping based on cart total and destination
function calculateShipping(subtotal, country) {
  const freeShippingThreshold = country === 'CA' ? 75 : 50;
  const baseShipping = country === 'CA' ? 9.99 : 5.99;
  
  return subtotal >= freeShippingThreshold ? 0 : baseShipping;
}

// Validate checkout form
function validateCheckoutForm() {
  const requiredFields = document.querySelectorAll('#checkout-form [required]');
  let isValid = true;
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
  });
  
  // Validate email
  const email = document.getElementById('email');
  if (email && email.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      isValid = false;
      email.classList.add('error');
    }
  }
  
  if (!isValid) {
    showNotification('Please fill in all required fields correctly');
  }
  
  return isValid;
}
