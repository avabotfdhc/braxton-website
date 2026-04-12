# B's Wild And Wonder - E-Commerce Website

A complete, working e-commerce website for B's Wild And Wonder, a children's adventure clothing and merchandise store founded by 8-year-old Braxton Dudgeon.

## 🌲 About the Project

**Brand:** B's Wild And Wonder (BWildAndWonder.com)  
**Founder:** Braxton Dudgeon, 8-year-old entrepreneur  
**Mission:** "Helping others live their best life - Let's do it together"  
**Products:** Children's clothing, hats, plush toys, accessories for ages 0-12  
**Business Model:** Drop shipping  
**Target Market:** US & Canada

## 📁 Project Structure

```
website/
├── index.html          # Homepage with hero, categories, bestsellers
├── shop.html           # Product listing with filtering
├── product.html        # Individual product detail page
├── about.html          # About Braxton and the company
├── contact.html        # Contact form and information
├── faq.html            # 20+ frequently asked questions
├── cart.html           # Shopping cart management
├── checkout.html       # Complete checkout flow
├── css/
│   └── styles.css      # Complete stylesheet with all styles
├── js/
│   ├── products.js     # Product catalog (60 products)
│   ├── cart.js         # Cart functionality & localStorage
│   └── main.js         # Main JavaScript functionality
├── images/             # Product images (placeholders)
└── README.md           # This file
```

## ✨ Features

### E-commerce Functionality
- ✅ Add to cart functionality
- ✅ Cart management (update quantities, remove items)
- ✅ Product filtering by category
- ✅ Product search with live results
- ✅ Size selection on product pages
- ✅ Quantity selector
- ✅ Cart persistence using localStorage
- ✅ Checkout form with validation
- ✅ Order summary and confirmation

### Design Elements
- ✅ Responsive design (mobile-first)
- ✅ Navigation with cart icon showing item count
- ✅ Hero section with call-to-action
- ✅ Product cards with hover effects
- ✅ Category filtering sidebar
- ✅ Newsletter signup section
- ✅ Social media links
- ✅ Footer with policies

### SEO & Technical
- ✅ Semantic HTML structure
- ✅ Meta tags for each page
- ✅ Alt tags for images
- ✅ Clean URLs
- ✅ Schema.org markup
- ✅ Fast loading (vanilla JS, no heavy frameworks)

## 🎨 Brand Colors

- **Primary (Deep Teal):** #1B6B7D
- **Accent (Lime Green):** #8AC540
- **Charcoal:** #2A2A2A
- **White:** #FFFFFF
- **Cream:** #FAF9F6

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser to view the website locally.

### Option 2: Local Server (Recommended)
For the best experience with all features working correctly:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Option 3: Deploy to Web Host
Upload all files to any static web host:
- GitHub Pages
- Netlify
- Vercel
- Any standard web hosting service

## 📦 Product Catalog (60 Products)

### Clothing (20 products)
Tees, hoodies, dresses, shorts, pants, pajamas, jackets, and more.

### Hats & Headwear (15 products)
Bucket hats, baseball caps, beanies, sun hats, and more.

### Plush Toys (15 products)
Adventure-themed stuffed animals including bears, foxes, bunnies, and more.

### Accessories (10 products)
Backpacks, fanny packs, sunglasses, water bottles, stickers, and more.

## 🛒 How to Use

### Shopping
1. Browse products on the shop page
2. Click on any product to view details
3. Select size and quantity
4. Click "Add to Cart"

### Cart
1. Click the cart icon to view your cart
2. Update quantities or remove items
3. See shipping calculations (free over $50!)
4. Click "Proceed to Checkout"

### Checkout
1. Fill in contact information
2. Enter shipping address
3. Enter payment details (demo only)
4. Complete your order!

## 🔧 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- This is a static HTML/CSS/JS website - no server-side processing required
- Cart data is stored in browser localStorage
- Product images use placeholder service - replace with actual product photos
- Payment processing is simulated for demo purposes

## 🎯 Future Enhancements

- Connect to real payment processor (Stripe, PayPal)
- Add user accounts and order history
- Implement real inventory management
- Add product reviews
- Email notifications
- Analytics integration

---

Built with ❤️ by Braxton  
© 2025 B's Wild And Wonder
