/**
 * B's Wild And Wonder - Main JavaScript
 * Shared functionality across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize mobile navigation
  initMobileNav();
  
  // Initialize newsletter forms
  initNewsletterForms();
  
  // Initialize search functionality
  initSearch();
  
  // Initialize cart display if on cart page
  if (document.getElementById('cart-items')) {
    displayCartItems();
  }
  
  // Initialize checkout if on checkout page
  if (document.getElementById('checkout-form')) {
    initCheckout();
  }
  
  // Initialize product page if on product page
  if (document.getElementById('product-details')) {
    initProductPage();
  }
  
  // Initialize shop page if on shop page
  if (document.getElementById('product-grid')) {
    initShopPage();
  }
});

// Mobile Navigation
function initMobileNav() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-nav-close');
  
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  
  // Close mobile nav when clicking a link
  const mobileLinks = mobileNav?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Newsletter Forms
function initNewsletterForms() {
  const forms = document.querySelectorAll('.newsletter-form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      
      if (email) {
        showNotification('Thanks for subscribing! 🎉');
        this.reset();
      }
    });
  });
}

// Search functionality
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (!searchInput) return;
  
  let searchTimeout;
  
  searchInput.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    const query = this.value.trim();
    
    if (query.length < 2) {
      if (searchResults) searchResults.style.display = 'none';
      return;
    }
    
    searchTimeout = setTimeout(() => {
      performSearch(query);
    }, 300);
  });
  
  // Close search results when clicking outside
  document.addEventListener('click', function(e) {
    if (searchResults && !e.target.closest('.search-container')) {
      searchResults.style.display = 'none';
    }
  });
}

function performSearch(query) {
  const results = searchProducts(query);
  const searchResults = document.getElementById('search-results');
  
  if (!searchResults) return;
  
  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-no-results">No products found</div>';
    searchResults.style.display = 'block';
    return;
  }
  
  let html = '<div class="search-results-list">';
  results.slice(0, 5).forEach(product => {
    html += `
      <a href="product.html?id=${product.id}" class="search-result-item">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
        <div class="search-result-info">
          <span class="search-result-name">${product.name}</span>
          <span class="search-result-price">$${product.price.toFixed(2)}</span>
        </div>
      </a>
    `;
  });
  
  if (results.length > 5) {
    html += `<a href="shop.html?search=${encodeURIComponent(query)}" class="search-view-all">View all ${results.length} results</a>`;
  }
  
  html += '</div>';
  searchResults.innerHTML = html;
  searchResults.style.display = 'block';
}

// Shop Page Initialization
function initShopPage() {
  const productGrid = document.getElementById('product-grid');
  const categoryFilters = document.querySelectorAll('.category-filter');
  
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  const categoryParam = urlParams.get('category');
  
  let currentProducts = products;
  
  // Handle search
  if (searchQuery) {
    currentProducts = searchProducts(searchQuery);
    document.getElementById('search-input').value = searchQuery;
    document.getElementById('page-title').textContent = `Search: "${searchQuery}"`;
  }
  
  // Handle category filter
  if (categoryParam) {
    currentProducts = getProductsByCategory(categoryParam);
    const filterBtn = document.querySelector(`[data-category="${categoryParam}"]`);
    if (filterBtn) {
      categoryFilters.forEach(f => f.classList.remove('active'));
      filterBtn.classList.add('active');
    }
    const categoryNames = {
      'all': 'All Products',
      'clothing': 'Clothing',
      'hats': 'Hats & Headwear',
      'plush': 'Plush Toys',
      'accessories': 'Accessories'
    };
    document.getElementById('page-title').textContent = categoryNames[categoryParam] || 'Products';
  }
  
  displayProducts(currentProducts);
  
  // Category filter click handlers
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      const category = this.dataset.category;
      
      categoryFilters.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      
      const filtered = getProductsByCategory(category);
      displayProducts(filtered);
      
      // Update URL without reloading
      const newUrl = category === 'all' ? 'shop.html' : `shop.html?category=${category}`;
      window.history.pushState({}, '', newUrl);
      
      // Update title
      const categoryNames = {
        'all': 'All Products',
        'clothing': 'Clothing',
        'hats': 'Hats & Headwear',
        'plush': 'Plush Toys',
        'accessories': 'Accessories'
      };
      document.getElementById('page-title').textContent = categoryNames[category] || 'Products';
    });
  });
}

// Display products in grid
function displayProducts(productsToShow) {
  const productGrid = document.getElementById('product-grid');
  const productCount = document.getElementById('product-count');
  
  if (!productGrid) return;
  
  if (productCount) {
    productCount.textContent = `${productsToShow.length} product${productsToShow.length !== 1 ? 's' : ''}`;
  }
  
  if (productsToShow.length === 0) {
    productGrid.innerHTML = `
      <div class="no-products">
        <p>No products found.</p>
        <a href="shop.html" class="btn btn-primary">View All Products</a>
      </div>
    `;
    return;
  }
  
  productGrid.innerHTML = productsToShow.map(product => `
    <div class="product-card">
      <a href="product.html?id=${product.id}" class="product-card-link">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
          ${product.bestseller ? '<span class="product-badge">Bestseller</span>' : ''}
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">$${product.price.toFixed(2)}</p>
        </div>
      </a>
      <button class="btn btn-secondary btn-quick-add" onclick="quickAddToCart(${product.id})">
        Quick Add
      </button>
    </div>
  `).join('');
}

// Quick add to cart (uses first available size)
function quickAddToCart(productId) {
  const product = getProductById(productId);
  if (product && product.sizes.length > 0) {
    addToCart(productId, product.sizes[0], 1);
  }
}

// Product Page Initialization
function initProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  
  if (!productId) {
    window.location.href = 'shop.html';
    return;
  }
  
  const product = getProductById(productId);
  
  if (!product) {
    window.location.href = 'shop.html';
    return;
  }
  
  // Update page content
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-image').alt = product.name;
  
  // Update page title
  document.title = `${product.name} | B's Wild And Wonder`;
  
  // Generate size options
  const sizeContainer = document.getElementById('size-options');
  if (sizeContainer && product.sizes) {
    sizeContainer.innerHTML = product.sizes.map((size, index) => `
      <label class="size-option">
        <input type="radio" name="size" value="${size}" ${index === 0 ? 'checked' : ''}>
        <span>${size}</span>
      </label>
    `).join('');
  }
  
  // Add to cart button
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function() {
      const selectedSize = document.querySelector('input[name="size"]:checked')?.value;
      const quantity = parseInt(document.getElementById('quantity')?.value || 1);
      
      if (selectedSize) {
        addToCart(product.id, selectedSize, quantity);
      } else {
        showNotification('Please select a size');
      }
    });
  }
  
  // Quantity selector
  const qtyInput = document.getElementById('quantity');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  
  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener('click', () => {
      if (qtyInput.value > 1) qtyInput.value--;
    });
    qtyPlus.addEventListener('click', () => {
      qtyInput.value++;
    });
  }
  
  // Load related products
  loadRelatedProducts(product);
}

// Load related products
function loadRelatedProducts(currentProduct) {
  const relatedContainer = document.getElementById('related-products');
  if (!relatedContainer) return;
  
  const related = products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 4);
  
  if (related.length === 0) {
    relatedContainer.innerHTML = '';
    return;
  }
  
  relatedContainer.innerHTML = related.map(product => `
    <div class="product-card">
      <a href="product.html?id=${product.id}" class="product-card-link">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='images/placeholder.jpg'">
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">$${product.price.toFixed(2)}</p>
        </div>
      </a>
    </div>
  `).join('');
}

// Checkout Initialization
function initCheckout() {
  const cart = getCartForCheckout();
  
  if (cart.items.length === 0) {
    window.location.href = 'cart.html';
    return;
  }
  
  // Display order summary
  const summaryContainer = document.getElementById('checkout-summary');
  if (summaryContainer) {
    summaryContainer.innerHTML = cart.items.map(item => `
      <div class="checkout-item">
        <div class="checkout-item-info">
          <span class="checkout-item-name">${item.name}</span>
          <span class="checkout-item-variant">Size: ${item.size} × ${item.quantity}</span>
        </div>
        <span class="checkout-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');
  }
  
  // Update totals
  const subtotalEl = document.getElementById('checkout-subtotal');
  const shippingEl = document.getElementById('checkout-shipping');
  const totalEl = document.getElementById('checkout-total');
  
  if (subtotalEl) subtotalEl.textContent = `$${cart.subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = cart.shipping === 0 ? 'FREE' : `$${cart.shipping.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${cart.total.toFixed(2)}`;
  
  // Form validation and submission
  const form = document.getElementById('checkout-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (validateCheckoutForm()) {
        // Simulate order processing
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';
        
        setTimeout(() => {
          // Clear cart
          clearCart();
          
          // Show success message
          document.getElementById('checkout-content').style.display = 'none';
          document.getElementById('order-success').style.display = 'block';
          
          // Scroll to top
          window.scrollTo(0, 0);
        }, 2000);
      }
    });
  }
  
  // Same as shipping checkbox
  const sameAsShipping = document.getElementById('same-as-shipping');
  const billingSection = document.getElementById('billing-address-section');
  
  if (sameAsShipping && billingSection) {
    sameAsShipping.addEventListener('change', function() {
      billingSection.style.display = this.checked ? 'none' : 'block';
    });
  }
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
  
  // Validate credit card (simple validation)
  const cardNumber = document.getElementById('card-number');
  if (cardNumber && cardNumber.value) {
    const cardRegex = /^\d{16}$/;
    const cleanNumber = cardNumber.value.replace(/\s/g, '');
    if (!cardRegex.test(cleanNumber)) {
      isValid = false;
      cardNumber.classList.add('error');
    }
  }
  
  if (!isValid) {
    showNotification('Please fill in all required fields correctly');
  }
  
  return isValid;
}

// Format credit card number
function formatCardNumber(input) {
  let value = input.value.replace(/\s/g, '');
  value = value.replace(/\D/g, '');
  value = value.substring(0, 16);
  
  const parts = value.match(/.{1,4}/g);
  if (parts) {
    input.value = parts.join(' ');
  } else {
    input.value = value;
  }
}

// Size Guide Modal
function openSizeGuide() {
  const modal = document.getElementById('size-guide-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeSizeGuide() {
  const modal = document.getElementById('size-guide-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('size-guide-modal');
  if (event.target === modal) {
    closeSizeGuide();
  }
}

// Accordion toggle
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.accordion-icon');
  
  if (content.style.display === 'none') {
    content.style.display = 'block';
    icon.textContent = '−';
  } else {
    content.style.display = 'none';
    icon.textContent = '+';
  }
}

// Social share
function shareProduct(platform) {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);
  
  let shareUrl;
  switch(platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
      break;
    case 'pinterest':
      shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`;
      break;
    case 'email':
      shareUrl = `mailto:?subject=${title}&body=Check out this product: ${url}`;
      break;
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
  observer.observe(el);
});
