/**
 * B's Wild And Wonder - Product Catalog
 * All 60 products with complete details
 */

const products = [
  // CLOTHING (20 products)
  {
    id: 1,
    name: "Adventure Explorer Graphic Tee",
    price: 18,
    category: "clothing",
    image: "images/product-1.jpg",
    description: "Soft cotton tee featuring our signature adventure explorer graphic. Perfect for everyday adventures!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: true
  },
  {
    id: 2,
    name: "Cozy Cabin Long Sleeve Tee",
    price: 24,
    category: "clothing",
    image: "images/product-2.jpg",
    description: "Warm and cozy long sleeve perfect for chilly cabin mornings or cool evening hikes.",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: false
  },
  {
    id: 3,
    name: "Wilderness Explorer Hoodie",
    price: 36,
    category: "clothing",
    image: "images/product-3.jpg",
    description: "Ultra-soft fleece hoodie with kangaroo pocket. The ultimate adventure companion!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: true
  },
  {
    id: 4,
    name: "Nature Lover Play Dress",
    price: 28,
    category: "clothing",
    image: "images/product-4.jpg",
    description: "Twirl-ready dress with nature-inspired prints. Comfortable enough for climbing trees!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: false
  },
  {
    id: 5,
    name: "Trail Blazer Cargo Shorts",
    price: 22,
    category: "clothing",
    image: "images/product-5.jpg",
    description: "Durable cargo shorts with plenty of pockets for treasures found on the trail.",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: true
  },
  {
    id: 6,
    name: "Adventure Jogger Pants",
    price: 24,
    category: "clothing",
    image: "images/product-6.jpg",
    description: "Stretchy, comfortable joggers perfect for active kids who never stop moving.",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: false
  },
  {
    id: 7,
    name: "Camping Pajama Set",
    price: 32,
    category: "clothing",
    image: "images/product-7.jpg",
    description: "Cozy two-piece pajama set with camping-themed prints. Sweet dreams under the stars!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: true
  },
  {
    id: 8,
    name: "Explorer Romper",
    price: 26,
    category: "clothing",
    image: "images/product-8.jpg",
    description: "One-piece romper with snap closures for easy changes. Adventure-ready style!",
    sizes: ["0-3M", "3-6M", "6-12M", "12-18M", "18-24M", "2T", "3T", "4T"],
    bestseller: false
  },
  {
    id: 9,
    name: "Rain Explorer Jacket",
    price: 42,
    category: "clothing",
    image: "images/product-9.jpg",
    description: "Waterproof and breathable rain jacket. Puddles are just invitations to play!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: true
  },
  {
    id: 10,
    name: "Wildlife Graphic Tee Collection",
    price: 18,
    category: "clothing",
    image: "images/product-10.jpg",
    description: "Choose from bear, fox, owl, or deer designs. Collect them all!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: false
  },
  {
    id: 11,
    name: "Sibling Adventure Matching Set",
    price: 48,
    category: "clothing",
    image: "images/product-11.jpg",
    description: "Coordinating outfits for siblings. Big adventurer + Little adventurer sets available.",
    sizes: ["Mixed Sizes"],
    bestseller: true
  },
  {
    id: 12,
    name: "Performance Adventure Tee",
    price: 26,
    category: "clothing",
    image: "images/product-12.jpg",
    description: "Moisture-wicking performance fabric for serious young athletes and explorers.",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: false
  },
  {
    id: 13,
    name: "Adventure Overalls",
    price: 36,
    category: "clothing",
    image: "images/product-13.jpg",
    description: "Classic overalls with reinforced knees and adjustable straps. Built to last!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8"],
    bestseller: false
  },
  {
    id: 14,
    name: "Cozy Fleece Adventure Jacket",
    price: 38,
    category: "clothing",
    image: "images/product-14.jpg",
    description: "Warm fleece jacket with full zip. Perfect layer for cool weather adventures.",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: true
  },
  {
    id: 15,
    name: "Nature Print Leggings",
    price: 20,
    category: "clothing",
    image: "images/product-15.jpg",
    description: "Stretchy leggings with beautiful nature prints. Comfortable for all-day play.",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: false
  },
  {
    id: 16,
    name: "Explorer Button-Up Shirt",
    price: 28,
    category: "clothing",
    image: "images/product-16.jpg",
    description: "Classic button-up with outdoor-inspired patterns. Dress up or down!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: false
  },
  {
    id: 17,
    name: "Adventure Swim Trunks",
    price: 22,
    category: "clothing",
    image: "images/product-17.jpg",
    description: "Quick-dry swim trunks with fun adventure prints. Ready for the beach or pool!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: false
  },
  {
    id: 18,
    name: "Camping Flannel Shirt",
    price: 32,
    category: "clothing",
    image: "images/product-18.jpg",
    description: "Soft flannel shirt in classic camping plaids. Cozy around the campfire!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: true
  },
  {
    id: 19,
    name: "Adventure Pajama Pants",
    price: 24,
    category: "clothing",
    image: "images/product-19.jpg",
    description: "Soft cotton pajama pants with elastic waist. Mix and match with our tees!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: false
  },
  {
    id: 20,
    name: "Base Layer Adventure Set",
    price: 22,
    category: "clothing",
    image: "images/product-20.jpg",
    description: "Thermal base layer top and bottom set. Stay warm on cold-weather adventures!",
    sizes: ["2T", "3T", "4T", "5T", "6", "7", "8", "10", "12"],
    bestseller: false
  },

  // HATS & HEADWEAR (15 products)
  {
    id: 21,
    name: "Adventure Bucket Hat",
    price: 18,
    category: "hats",
    image: "images/product-21.jpg",
    description: "Classic bucket hat with adventure patch. Sun protection with style!",
    sizes: ["S (0-2Y)", "M (2-5Y)", "L (5-8Y)", "XL (8-12Y)"],
    bestseller: true
  },
  {
    id: 22,
    name: "Explorer Baseball Cap",
    price: 16,
    category: "hats",
    image: "images/product-22.jpg",
    description: "Adjustable baseball cap with embroidered explorer logo. Every day is an adventure!",
    sizes: ["One Size (Adjustable)"],
    bestseller: true
  },
  {
    id: 23,
    name: "Cozy Winter Beanie",
    price: 14,
    category: "hats",
    image: "images/product-23.jpg",
    description: "Soft knit beanie to keep little heads warm on winter adventures.",
    sizes: ["S (0-2Y)", "M (2-5Y)", "L (5-12Y)"],
    bestseller: false
  },
  {
    id: 24,
    name: "Sun Protection Wide Brim Hat",
    price: 18,
    category: "hats",
    image: "images/product-24.jpg",
    description: "Wide brim hat with UPF 50+ protection. Stay cool and protected!",
    sizes: ["S (0-2Y)", "M (2-5Y)", "L (5-8Y)", "XL (8-12Y)"],
    bestseller: true
  },
  {
    id: 25,
    name: "Kids Trucker Hat",
    price: 14,
    category: "hats",
    image: "images/product-25.jpg",
    description: "Classic mesh-back trucker hat with fun adventure graphics.",
    sizes: ["One Size (Adjustable)"],
    bestseller: false
  },
  {
    id: 26,
    name: "Mini Snapback Cap",
    price: 18,
    category: "hats",
    image: "images/product-26.jpg",
    description: "Stylish snapback cap for mini trendsetters who love adventure.",
    sizes: ["One Size (Adjustable)"],
    bestseller: false
  },
  {
    id: 27,
    name: "Animal Ear Beanie",
    price: 20,
    category: "hats",
    image: "images/product-27.jpg",
    description: "Adorable beanie with bear, fox, or bunny ears. Cute and cozy!",
    sizes: ["S (0-2Y)", "M (2-5Y)", "L (5-8Y)"],
    bestseller: true
  },
  {
    id: 28,
    name: "Straw Sun Hat",
    price: 22,
    category: "hats",
    image: "images/product-28.jpg",
    description: "Breathable straw sun hat perfect for beach days and summer adventures.",
    sizes: ["S (0-2Y)", "M (2-5Y)", "L (5-8Y)", "XL (8-12Y)"],
    bestseller: false
  },
  {
    id: 29,
    name: "Reversible Bucket Hat",
    price: 24,
    category: "hats",
    image: "images/product-29.jpg",
    description: "Two hats in one! Reversible design with different patterns on each side.",
    sizes: ["S (0-2Y)", "M (2-5Y)", "L (5-8Y)", "XL (8-12Y)"],
    bestseller: true
  },
  {
    id: 30,
    name: "Pom-Pom Winter Hat",
    price: 18,
    category: "hats",
    image: "images/product-30.jpg",
    description: "Fun pom-pom topped winter hat in bright, cheerful colors.",
    sizes: ["S (0-2Y)", "M (2-5Y)", "L (5-12Y)"],
    bestseller: false
  },
  {
    id: 31,
    name: "Adventure Visor",
    price: 16,
    category: "hats",
    image: "images/product-31.jpg",
    description: "Sporty visor for active kids. Keeps sun out of eyes while staying cool.",
    sizes: ["One Size (Adjustable)"],
    bestseller: false
  },
  {
    id: 32,
    name: "Fleece Ear Flap Hat",
    price: 22,
    category: "hats",
    image: "images/product-32.jpg",
    description: "Warm fleece hat with ear flaps and chin strap. Ultimate winter protection!",
    sizes: ["S (0-2Y)", "M (2-5Y)", "L (5-8Y)", "XL (8-12Y)"],
    bestseller: true
  },
  {
    id: 33,
    name: "Mesh Back Cap",
    price: 16,
    category: "hats",
    image: "images/product-33.jpg",
    description: "Breathable mesh cap for hot summer days and outdoor play.",
    sizes: ["One Size (Adjustable)"],
    bestseller: false
  },
  {
    id: 34,
    name: "Tie-Dye Bucket Hat",
    price: 22,
    category: "hats",
    image: "images/product-34.jpg",
    description: "Fun tie-dye bucket hat. Each one is unique, just like your adventurer!",
    sizes: ["S (0-2Y)", "M (2-5Y)", "L (5-8Y)", "XL (8-12Y)"],
    bestseller: false
  },
  {
    id: 35,
    name: "Matching Parent-Kid Hats",
    price: 32,
    category: "hats",
    image: "images/product-35.jpg",
    description: "Set of two matching hats - one adult size, one kid size. Adventure together!",
    sizes: ["Adult + Kid Set"],
    bestseller: true
  },

  // PLUSH TOYS (15 products)
  {
    id: 36,
    name: "Adventure Bear (12\")",
    price: 26,
    category: "plush",
    image: "images/product-36.jpg",
    description: "Soft and huggable 12-inch bear wearing a tiny explorer backpack. Perfect adventure buddy!",
    sizes: ["One Size"],
    bestseller: true
  },
  {
    id: 37,
    name: "Forest Fox Plush",
    price: 24,
    category: "plush",
    image: "images/product-37.jpg",
    description: "Adorable fox plush with bushy tail. Soft enough for bedtime cuddles.",
    sizes: ["One Size"],
    bestseller: true
  },
  {
    id: 38,
    name: "Giant Teddy Bear (24\")",
    price: 48,
    category: "plush",
    image: "images/product-38.jpg",
    description: "Big 24-inch teddy bear ready for the biggest hugs. A forever friend!",
    sizes: ["One Size"],
    bestseller: true
  },
  {
    id: 39,
    name: "Explorer Bunny",
    price: 22,
    category: "plush",
    image: "images/product-39.jpg",
    description: "Cute bunny plush wearing a little explorer vest. Hop into adventure!",
    sizes: ["One Size"],
    bestseller: false
  },
  {
    id: 40,
    name: "Camping Raccoon",
    price: 24,
    category: "plush",
    image: "images/product-40.jpg",
    description: "Mischievous raccoon plush with bandit mask. Ready for midnight camping snacks!",
    sizes: ["One Size"],
    bestseller: false
  },
  {
    id: 41,
    name: "Sleepy Owl Plush",
    price: 18,
    category: "plush",
    image: "images/product-41.jpg",
    description: "Soft owl plush with sleepy eyes. Perfect for bedtime stories.",
    sizes: ["One Size"],
    bestseller: false
  },
  {
    id: 42,
    name: "Woodland Deer",
    price: 26,
    category: "plush",
    image: "images/product-42.jpg",
    description: "Elegant deer plush with soft spotted fur. A gentle forest friend.",
    sizes: ["One Size"],
    bestseller: true
  },
  {
    id: 43,
    name: "Mountain Lion Plush",
    price: 32,
    category: "plush",
    image: "images/product-43.jpg",
    description: "Majestic mountain lion plush. Brave and cuddly at the same time!",
    sizes: ["One Size"],
    bestseller: false
  },
  {
    id: 44,
    name: "Giant Adventure Bear (36\")",
    price: 72,
    category: "plush",
    image: "images/product-44.jpg",
    description: "Massive 36-inch adventure bear! The ultimate cuddle companion for big adventures.",
    sizes: ["One Size"],
    bestseller: true
  },
  {
    id: 45,
    name: "Hedgehog Explorer",
    price: 20,
    category: "plush",
    image: "images/product-45.jpg",
    description: "Adorable hedgehog plush with soft spines. Small but mighty!",
    sizes: ["One Size"],
    bestseller: false
  },
  {
    id: 46,
    name: "Wolf Plush Toy",
    price: 28,
    category: "plush",
    image: "images/product-46.jpg",
    description: "Realistic wolf plush with beautiful gray fur. Leader of the pack!",
    sizes: ["One Size"],
    bestseller: false
  },
  {
    id: 47,
    name: "Squirrel with Acorn",
    price: 18,
    category: "plush",
    image: "images/product-47.jpg",
    description: "Cute squirrel plush holding a tiny acorn. Always prepared for adventure!",
    sizes: ["One Size"],
    bestseller: false
  },
  {
    id: 48,
    name: "Moose Plush",
    price: 34,
    category: "plush",
    image: "images/product-48.jpg",
    description: "Big moose plush with magnificent antlers. Gentle giant of the forest!",
    sizes: ["One Size"],
    bestseller: true
  },
  {
    id: 49,
    name: "Eagle Plush",
    price: 30,
    category: "plush",
    image: "images/product-49.jpg",
    description: "Majestic eagle plush with impressive wingspan. Soar to new heights!",
    sizes: ["One Size"],
    bestseller: false
  },
  {
    id: 50,
    name: "Turtle Explorer",
    price: 22,
    category: "plush",
    image: "images/product-50.jpg",
    description: "Slow and steady turtle plush with a little explorer hat. Slow down and explore!",
    sizes: ["One Size"],
    bestseller: false
  },

  // ACCESSORIES (10 products)
  {
    id: 51,
    name: "Adventure Backpack (Mini)",
    price: 32,
    category: "accessories",
    image: "images/product-51.jpg",
    description: "Perfectly sized backpack for little adventurers. Fits snacks, treasures, and imagination!",
    sizes: ["One Size"],
    bestseller: true
  },
  {
    id: 52,
    name: "Kids Fanny Pack",
    price: 20,
    category: "accessories",
    image: "images/product-52.jpg",
    description: "Trendy fanny pack for hands-free adventuring. Multiple pockets for organizing finds!",
    sizes: ["One Size (Adjustable)"],
    bestseller: false
  },
  {
    id: 53,
    name: "Sunglasses with Strap",
    price: 12,
    category: "accessories",
    image: "images/product-53.jpg",
    description: "Shatter-resistant sunglasses with adjustable strap. Stay on during active play!",
    sizes: ["Ages 2-5", "Ages 5-12"],
    bestseller: true
  },
  {
    id: 54,
    name: "Hair Bow Set (3-pack)",
    price: 14,
    category: "accessories",
    image: "images/product-54.jpg",
    description: "Set of 3 adventure-themed hair bows. Clip in and explore in style!",
    sizes: ["One Size"],
    bestseller: false
  },
  {
    id: 55,
    name: "Bandana/Scarf",
    price: 10,
    category: "accessories",
    image: "images/product-55.jpg",
    description: "Versatile cotton bandana. Wear as scarf, headband, or tie on backpack!",
    sizes: ["One Size"],
    bestseller: false
  },
  {
    id: 56,
    name: "Reusable Snack Bags",
    price: 22,
    category: "accessories",
    image: "images/product-56.jpg",
    description: "Set of 3 reusable snack bags with adventure prints. Eco-friendly and fun!",
    sizes: ["Set of 3"],
    bestseller: true
  },
  {
    id: 57,
    name: "Kids Water Bottle",
    price: 20,
    category: "accessories",
    image: "images/product-57.jpg",
    description: "BPA-free water bottle with flip straw. Stay hydrated on every adventure!",
    sizes: ["12 oz", "16 oz"],
    bestseller: true
  },
  {
    id: 58,
    name: "Temporary Tattoo Set",
    price: 8,
    category: "accessories",
    image: "images/product-58.jpg",
    description: "Set of 24 adventure-themed temporary tattoos. Safe and fun!",
    sizes: ["One Size"],
    bestseller: false
  },
  {
    id: 59,
    name: "Adventure Sticker Pack",
    price: 10,
    category: "accessories",
    image: "images/product-59.jpg",
    description: "50 waterproof vinyl stickers. Decorate water bottles, laptops, and gear!",
    sizes: ["One Size"],
    bestseller: true
  },
  {
    id: 60,
    name: "Explorer Binoculars (Toy)",
    price: 18,
    category: "accessories",
    image: "images/product-60.jpg",
    description: "Kid-friendly binoculars with 4x magnification. Spot birds, wildlife, and adventures!",
    sizes: ["One Size"],
    bestseller: true
  }
];

// Get bestsellers
function getBestsellers() {
  return products.filter(p => p.bestseller);
}

// Get products by category
function getProductsByCategory(category) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

// Get product by ID
function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

// Search products
function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { products, getBestsellers, getProductsByCategory, getProductById, searchProducts };
}
