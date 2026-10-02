/* ===================================================================
   PHONESHOP - MAIN SCRIPT & PRODUCT CATALOG
   Shared product catalog, navigation, modals, search & UI helpers
   =================================================================== */

const PRODUCTS_DATA = [
  {
    id: 'iphone-16-pro-max',
    name: 'Apple iPhone 16 Pro Max',
    brand: 'Apple',
    price: 1199,
    oldPrice: 1299,
    rating: 4.9,
    reviewsCount: 382,
    badge: 'Hot',
    image: 'img/phones/iphone-16-pro-max.png',
    storage: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Desert Titanium', hex: '#d4af37' },
      { name: 'Natural Titanium', hex: '#9ca3af' },
      { name: 'Black Titanium', hex: '#1e293b' },
      { name: 'White Titanium', hex: '#f8fafc' }
    ],
    shortSpecs: {
      screen: '6.9" Super Retina XDR OLED 120Hz',
      cpu: 'Apple A18 Pro 3nm',
      camera: '48MP + 48MP Ultrawide + 12MP 5x Telephoto',
      battery: '4,685 mAh (33h video playback)'
    },
    fullSpecs: {
      "Display": "6.9-inch Super Retina XDR with ProMotion 120Hz, Always-On, 2000 nits peak",
      "Processor": "Apple A18 Pro chip (6-core CPU, 6-core GPU, 16-core Neural Engine)",
      "Camera System": "48MP Fusion + 48MP Ultra Wide + 12MP 5x Optical Telephoto, 4K 120 fps Dolby Vision",
      "Battery & Charging": "4,685 mAh, MagSafe up to 25W, Qi2 wireless charging, USB-C 3.2 Gen 2",
      "Build & Materials": "Grade 5 Titanium frame, Ceramic Shield front, textured matte glass back",
      "Water Resistance": "IP68 rated (maximum depth of 6m up to 30 mins)",
      "Operating System": "iOS 18 with Apple Intelligence",
      "Weight & Dimensions": "227g, 163 x 77.6 x 8.25 mm"
    },
    description: "The ultimate iPhone with titanium strength, Camera Control button, stunning 4K 120 fps Dolby Vision recording, and the blazing Apple A18 Pro chip built for Apple Intelligence.",
    isFeatured: true,
    isDeal: true,
    category: 'flagship'
  },
  {
    id: 'galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 1299,
    oldPrice: 1419,
    rating: 4.8,
    reviewsCount: 420,
    badge: 'Sale',
    image: 'img/phones/galaxy-s24-ultra.png',
    storage: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Titanium Gray', hex: '#64748b' },
      { name: 'Titanium Black', hex: '#0f172a' },
      { name: 'Titanium Violet', hex: '#7c3aed' },
      { name: 'Titanium Yellow', hex: '#eab308' }
    ],
    shortSpecs: {
      screen: '6.8" Dynamic AMOLED 2X 120Hz QHD+',
      cpu: 'Snapdragon 8 Gen 3 for Galaxy',
      camera: '200MP Main + 50MP 5x + 10MP 3x + 12MP UW',
      battery: '5,000 mAh (45W fast charge)'
    },
    fullSpecs: {
      "Display": "6.8-inch Dynamic AMOLED 2X, QHD+, 1-120Hz adaptive, Corning Gorilla Armor anti-glare",
      "Processor": "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)",
      "Camera System": "200MP Wide + 50MP 5x Periscope + 10MP 3x Telephoto + 12MP Ultra-wide, 8K video",
      "S-Pen": "Integrated embedded Bluetooth S-Pen with low latency",
      "Battery & Charging": "5,000 mAh, 45W wired, 15W wireless, reverse wireless share",
      "Build & Materials": "Titanium frame, IP68 water/dust resistance",
      "Operating System": "One UI 6.1 with Galaxy AI (Live Translate, Circle to Search)",
      "Weight & Dimensions": "232g, 162.3 x 79 x 8.6 mm"
    },
    description: "Unleash Galaxy AI. Capture breathtaking clarity with a 200MP camera sensor and navigate effortlessly using the built-in S Pen stylus.",
    isFeatured: true,
    isDeal: true,
    category: 'flagship'
  },
  {
    id: 'pixel-9-pro-xl',
    name: 'Google Pixel 9 Pro XL',
    brand: 'Google',
    price: 1099,
    oldPrice: 1199,
    rating: 4.8,
    reviewsCount: 295,
    badge: 'New',
    image: 'img/phones/pixel-9-pro-xl.png',
    storage: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Obsidian', hex: '#1e293b' },
      { name: 'Porcelain', hex: '#f1f5f9' },
      { name: 'Hazel', hex: '#64748b' },
      { name: 'Rose Quartz', hex: '#f472b6' }
    ],
    shortSpecs: {
      screen: '6.8" Super Actua OLED 1-120Hz',
      cpu: 'Google Tensor G4 + Titan M2',
      camera: '50MP + 48MP UW + 48MP 5x Telephoto',
      battery: '5,060 mAh (37W fast charge)'
    },
    fullSpecs: {
      "Display": "6.8-inch Super Actua LTPO OLED, up to 3000 nits peak, 1344 x 2992 px",
      "Processor": "Google Tensor G4 (4nm) with Gemini Nano integrated on-device AI",
      "Camera System": "50MP Wide + 48MP Ultra-wide with Macro Focus + 48MP 5x Telephoto, 8K Video Boost",
      "RAM & Storage": "16GB RAM across all tiers, UFS 3.1",
      "Battery & Charging": "5,060 mAh, 70% in 30 mins fast charge, wireless charging with Battery Share",
      "Operating System": "Android 15 with 7 years of OS & security feature drops",
      "Build": "Polished metal frame, silky matte glass back, Gorilla Glass Victus 2"
    },
    description: "The most powerful Pixel yet with Google Tensor G4 and Gemini AI deeply integrated. Incredible low-light photography, Magic Editor, and sleek redesigned camera bar.",
    isFeatured: true,
    isDeal: false,
    category: 'flagship'
  },
  {
    id: 'xiaomi-14-ultra',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    price: 1099,
    oldPrice: 1249,
    rating: 4.7,
    reviewsCount: 180,
    badge: 'Sale',
    image: 'img/phones/xiaomi-14-ultra.png',
    storage: ['256GB', '512GB'],
    colors: [
      { name: 'Black Vegan Leather', hex: '#18181b' },
      { name: 'White Ceramic', hex: '#f8fafc' }
    ],
    shortSpecs: {
      screen: '6.73" AMOLED WQHD+ 120Hz LTPO',
      cpu: 'Snapdragon 8 Gen 3',
      camera: 'Leica Quad 50MP (1-inch LYT-900 sensor)',
      battery: '5,000 mAh (90W wired, 80W wireless)'
    },
    fullSpecs: {
      "Display": "6.73-inch All Around Liquid Display, WQHD+ 3200x1440, 3000 nits, Dolby Vision",
      "Processor": "Qualcomm Snapdragon 8 Gen 3 (4nm)",
      "Camera System": "Leica Quad 50MP: 1-inch LYT-900 Variable Aperture + 50MP 75mm Floating Tele + 50MP 120mm Periscope + 50MP 12mm UW",
      "Charging": "90W HyperCharge (100% in 33 mins), 80W Wireless HyperCharge",
      "Cooling": "Dual-Channel IceLoop cooling system",
      "OS": "Xiaomi HyperOS based on Android 14"
    },
    description: "A master photography flagship engineered with Leica optics. Features an unprecedented 1-inch variable aperture main sensor and 4K 120fps recording on all focal lengths.",
    isFeatured: true,
    isDeal: true,
    category: 'flagship'
  },
  {
    id: 'iphone-16',
    name: 'Apple iPhone 16',
    brand: 'Apple',
    price: 799,
    oldPrice: 849,
    rating: 4.7,
    reviewsCount: 310,
    badge: 'New',
    image: 'img/phones/iphone-16.png',
    storage: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Ultramarine', hex: '#2563eb' },
      { name: 'Teal', hex: '#0d9488' },
      { name: 'Pink', hex: '#ec4899' },
      { name: 'White', hex: '#f8fafc' },
      { name: 'Black', hex: '#0f172a' }
    ],
    shortSpecs: {
      screen: '6.1" Super Retina XDR OLED',
      cpu: 'Apple A18 chip',
      camera: '48MP Fusion 2-in-1 + 12MP Ultra Wide',
      battery: '3,561 mAh (22h video playback)'
    },
    fullSpecs: {
      "Display": "6.1-inch Super Retina XDR OLED, 2000 nits peak outdoor brightness",
      "Processor": "Apple A18 chip with 5-core GPU and dedicated Neural Engine",
      "Camera System": "48MP Fusion camera with 2x telephoto crop + 12MP Ultra-wide with macro mode",
      "Special Controls": "Dedicated Camera Control tactile sensor button & customizable Action Button",
      "Build": "Aerospace-grade aluminum with color-infused back glass",
      "OS": "iOS 18 with Apple Intelligence ready"
    },
    description: "Packed with powerful upgrades: all-new Camera Control, Action button, 48MP 2-in-1 Fusion camera, and vivid color-infused rear glass.",
    isFeatured: false,
    isDeal: false,
    category: 'midrange'
  },
  {
    id: 'galaxy-z-fold-6',
    name: 'Samsung Galaxy Z Fold 6',
    brand: 'Samsung',
    price: 1899,
    oldPrice: 1999,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Hot',
    image: 'img/phones/galaxy-z-fold-6.png',
    storage: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Silver Shadow', hex: '#64748b' },
      { name: 'Navy', hex: '#1e3a8a' },
      { name: 'Pink', hex: '#f472b6' }
    ],
    shortSpecs: {
      screen: '7.6" Inner AMOLED + 6.3" Cover AMOLED 120Hz',
      cpu: 'Snapdragon 8 Gen 3 for Galaxy',
      camera: '50MP Main + 12MP Ultra Wide + 10MP 3x',
      battery: '4,400 mAh dual-cell'
    },
    fullSpecs: {
      "Inner Screen": "7.6-inch Dynamic AMOLED 2X Infinity Flex, 2600 nits peak, 120Hz adaptive",
      "Cover Screen": "6.3-inch Dynamic AMOLED 2X, wider aspect ratio, Gorilla Glass Victus 2",
      "Hinge": "Dual-rail Armor Aluminum flex hinge with enhanced shock dispersal",
      "Water Resistance": "IP48 water resistance rating",
      "Productivity": "Multi-window multitasking, S Pen support, Note Assist AI"
    },
    description: "The pinnacle of foldable productivity: slimmer, lighter, with upgraded dual-rail hinge and expansive 7.6-inch immersive display.",
    isFeatured: true,
    isDeal: false,
    category: 'foldable'
  },
  {
    id: 'oneplus-12',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 799,
    oldPrice: 899,
    rating: 4.8,
    reviewsCount: 224,
    badge: 'Sale',
    image: 'img/phones/oneplus-12.png',
    storage: ['256GB', '512GB'],
    colors: [
      { name: 'Flowy Emerald', hex: '#065f46' },
      { name: 'Silky Black', hex: '#18181b' }
    ],
    shortSpecs: {
      screen: '6.82" 2K 120Hz ProXDR display (4500 nits)',
      cpu: 'Snapdragon 8 Gen 3',
      camera: '4th Gen Hasselblad: 50MP + 64MP 3x Periscope',
      battery: '5,400 mAh (100W SUPERVOOC, 50W wireless)'
    },
    fullSpecs: {
      "Display": "6.82-inch QHD+ 120Hz LTPO ProXDR with industry-leading 4,500 nits peak brightness",
      "Processor": "Qualcomm Snapdragon 8 Gen 3 with Pixelworks X7 gaming chip",
      "Battery": "Massive 5,400 mAh battery with 80W/100W wired charging (1-100% in 26 mins)",
      "Camera": "4th Gen Hasselblad Camera System: Sony LYT-808 50MP main + 64MP 3x periscope telephoto"
    },
    description: "Smooth beyond belief. Features 4500 nits brightest display, colossal 5400mAh battery with 100W fast charging, and Hasselblad 4th-gen camera tuning.",
    isFeatured: true,
    isDeal: true,
    category: 'flagship'
  },
  {
    id: 'pixel-9',
    name: 'Google Pixel 9',
    brand: 'Google',
    price: 799,
    oldPrice: 849,
    rating: 4.7,
    reviewsCount: 198,
    badge: 'New',
    image: 'img/phones/pixel-9.png',
    storage: ['128GB', '256GB'],
    colors: [
      { name: 'Peony', hex: '#f472b6' },
      { name: 'Wintergreen', hex: '#6ee7b7' },
      { name: 'Porcelain', hex: '#f8fafc' },
      { name: 'Obsidian', hex: '#0f172a' }
    ],
    shortSpecs: {
      screen: '6.3" Actua OLED 60-120Hz',
      cpu: 'Google Tensor G4',
      camera: '50MP Main + 48MP Ultrawide Macro',
      battery: '4,700 mAh (24+ hour battery life)'
    },
    fullSpecs: {
      "Display": "6.3-inch Actua OLED, 2700 nits peak brightness, 1080 x 2424 px",
      "Processor": "Google Tensor G4 with 12GB RAM for snappy on-device AI",
      "Camera System": "50MP Octa PD wide camera + 48MP Quad PD ultrawide with Macro Focus",
      "OS & Support": "Android 15 with 7 years of OS, security and Pixel Drop updates"
    },
    description: "Fresh design with sculpted satin back glass and durable polished frame. Powered by Gemini to help you write, plan, organize and shoot studio-quality photos.",
    isFeatured: false,
    isDeal: false,
    category: 'midrange'
  },
  {
    id: 'xiaomi-14t-pro',
    name: 'Xiaomi 14T Pro',
    brand: 'Xiaomi',
    price: 749,
    oldPrice: 829,
    rating: 4.6,
    reviewsCount: 112,
    badge: 'Sale',
    image: 'img/phones/xiaomi-14t-pro.png',
    storage: ['256GB', '512GB', '1TB'],
    colors: [
      { name: 'Titan Gray', hex: '#64748b' },
      { name: 'Titan Blue', hex: '#1e3a8a' },
      { name: 'Titan Black', hex: '#090d16' }
    ],
    shortSpecs: {
      screen: '6.67" 144Hz AI AMOLED 1.5K',
      cpu: 'MediaTek Dimensity 9300+ 4nm',
      camera: 'Leica Summilux 50MP + 50MP Tele + 12MP UW',
      battery: '5,000 mAh (120W HyperCharge)'
    },
    fullSpecs: {
      "Display": "6.67-inch 144Hz CrystalRes AMOLED, 4000 nits peak, HDR10+, Dolby Vision",
      "Processor": "MediaTek Dimensity 9300+ (all-big-core flagship architecture)",
      "Charging": "120W wired HyperCharge (0-100% in 19 mins) + 50W wireless",
      "Optics": "Leica Summilux optical lens with Light Fusion 900 sensor"
    },
    description: "Master light with Leica Summilux lens, ultra-responsive 144Hz display, and 120W HyperCharge getting you to 100% in under 20 minutes.",
    isFeatured: false,
    isDeal: true,
    category: 'midrange'
  },
  {
    id: 'oneplus-open',
    name: 'OnePlus Open',
    brand: 'OnePlus',
    price: 1499,
    oldPrice: 1699,
    rating: 4.9,
    reviewsCount: 175,
    badge: 'Sale',
    image: 'img/phones/oneplus-open.png',
    storage: ['512GB'],
    colors: [
      { name: 'Voyager Black', hex: '#1c1917' },
      { name: 'Emerald Dusk', hex: '#065f46' }
    ],
    shortSpecs: {
      screen: '7.82" Flexi-fluid AMOLED + 6.31" Cover 120Hz',
      cpu: 'Snapdragon 8 Gen 2',
      camera: 'Hasselblad 48MP Sony LYTIA + 64MP 3x + 48MP UW',
      battery: '4,805 mAh (67W SUPERVOOC)'
    },
    fullSpecs: {
      "Displays": "7.82-inch 2K 120Hz LTPO 3.0 inner screen + 6.31-inch 120Hz cover screen",
      "Weight": "Ultra-lightweight 239g with patented titanium-alloy Flexion Hinge",
      "Multitasking": "Open Canvas triple split-screen multitasking workflow",
      "Cameras": "48MP Sony LYT-T808 Pixel Stacked sensor + 64MP 3x periscope telephoto"
    },
    description: "Redefining the foldable experience with almost invisible screen crease, featherweight titanium build, and groundbreaking Open Canvas multi-app multitasking.",
    isFeatured: false,
    isDeal: true,
    category: 'foldable'
  },
  {
    id: 'sony-xperia-1-vi',
    name: 'Sony Xperia 1 VI',
    brand: 'Sony',
    price: 1399,
    oldPrice: 1499,
    rating: 4.7,
    reviewsCount: 88,
    badge: 'New',
    image: 'img/phones/sony-xperia-1-vi.png',
    storage: ['256GB', '512GB'],
    colors: [
      { name: 'Platinum Silver', hex: '#cbd5e1' },
      { name: 'Black', hex: '#0f172a' },
      { name: 'Khaki Green', hex: '#3f6212' }
    ],
    shortSpecs: {
      screen: '6.5" FHD+ HDR OLED 1-120Hz Powered by BRAVIA',
      cpu: 'Snapdragon 8 Gen 3',
      camera: '85-170mm Continuous Optical Zoom + Exmor T',
      battery: '5,000 mAh (2-day battery life, 3.5mm jack)'
    },
    fullSpecs: {
      "Optics": "True 85-170mm continuous optical telephoto zoom with Zeiss T* coating",
      "Audio": "High-Res audio, 3.5mm headphone jack, full-stage stereo speakers",
      "Display": "Powered by BRAVIA with AI image remastering and Sunlight Vision",
      "Battery": "5,000 mAh rated for 2 full days of typical use"
    },
    description: "Designed for content creators and audiophiles. World's only true 85-170mm continuous optical zoom lens and studio-grade 3.5mm analog audio output.",
    isFeatured: false,
    isDeal: false,
    category: 'flagship'
  },
  {
    id: 'rog-phone-8-pro',
    name: 'Asus ROG Phone 8 Pro',
    brand: 'Asus',
    price: 1199,
    oldPrice: 1299,
    rating: 4.9,
    reviewsCount: 160,
    badge: 'Hot',
    image: 'img/phones/rog-phone-8-pro.png',
    storage: ['512GB', '1TB'],
    colors: [
      { name: 'Phantom Black', hex: '#09090b' }
    ],
    shortSpecs: {
      screen: '6.78" Samsung E6 AMOLED 165Hz LTPO',
      cpu: 'Snapdragon 8 Gen 3 + 24GB RAM',
      camera: '50MP Sony IMX890 Gimbal OIS + 32MP 3x',
      battery: '5,500 mAh (65W HyperCharge, AirTrigger)'
    },
    fullSpecs: {
      "Display": "6.78-inch Samsung E6 AMOLED, 165Hz refresh rate, 720Hz touch sampling, 2500 nits",
      "Gaming Hardware": "AirTrigger ultrasonic shoulder triggers, AniMe Vision programmable mini-LED back",
      "Cooling": "GameCool 8 360-degree internal cooling system",
      "Audio": "Dual 5-magnet speakers with Dirac Virtuo spatial audio & 3.5mm jack"
    },
    description: "The ultimate gaming machine with sleek daily driver refinement. 165Hz refresh rate, AirTrigger ultrasonic controls, 24GB RAM, and 6-axis hybrid gimbal stabilization.",
    isFeatured: true,
    isDeal: false,
    category: 'gaming'
  }
];

// Helper: Format Price
function formatPrice(num) {
  return '$' + Number(num).toLocaleString('en-US');
}

// Helper: Render Star Rating
function renderStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < fullStars; i++) {
    html += '★';
  }
  if (hasHalf) {
    html += '★';
  }
  return `<span class="stars">${html}</span> <span class="rating-num">${rating}</span>`;
}

// Helper: Render Standard Product Card HTML
function createProductCardHTML(p) {
  const badgeHTML = p.badge ? `<span class="badge badge-${p.badge.toLowerCase()}">${p.badge}</span>` : '';
  const oldPriceHTML = p.oldPrice ? `<span class="old-price">${formatPrice(p.oldPrice)}</span>` : '';
  
  return `
    <div class="product-card" data-id="${p.id}" data-brand="${p.brand}" data-price="${p.price}">
      <div class="product-badges">
        ${badgeHTML}
      </div>
      <a href="product-detail.html?id=${p.id}" class="product-img-wrap" title="View ${p.name}">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </a>
      <div class="product-brand">${p.brand}</div>
      <h3 class="product-title">
        <a href="product-detail.html?id=${p.id}">${p.name}</a>
      </h3>
      <div class="product-specs-snippet">
        <span>⚡ ${p.shortSpecs.cpu.split(' ')[0]}</span>
        <span>📷 ${p.shortSpecs.camera.split('+')[0].trim()}</span>
        <span>🔋 ${p.shortSpecs.battery.split(' ')[0]}</span>
      </div>
      <div class="product-price-row">
        <div class="price-box">
          <div class="current-price">${formatPrice(p.price)}</div>
          ${oldPriceHTML}
        </div>
        <div class="card-actions">
          <button class="quick-view-btn" onclick="PhoneShop.openQuickView('${p.id}')" title="Quick View" aria-label="Quick View">
            👁️
          </button>
          <button class="add-to-cart-btn" onclick="PhoneShop.quickAdd('${p.id}')" title="Add to Cart" aria-label="Add to Cart">
            🛒
          </button>
        </div>
      </div>
    </div>
  `;
}

// PhoneShop Global Interface
window.PhoneShop = {
  products: PRODUCTS_DATA,

  getProductById(id) {
    return PRODUCTS_DATA.find(p => p.id === id) || PRODUCTS_DATA[0];
  },

  getProductsByBrand(brand) {
    if (!brand || brand.toLowerCase() === 'all') return PRODUCTS_DATA;
    return PRODUCTS_DATA.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  },

  getDeals() {
    return PRODUCTS_DATA.filter(p => p.isDeal || p.oldPrice > p.price);
  },

  getFeatured() {
    return PRODUCTS_DATA.filter(p => p.isFeatured);
  },

  showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? '✅' : (type === 'error' ? '❌' : 'ℹ️');
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  },

  quickAdd(productId) {
    const product = this.getProductById(productId);
    if (product && window.CartManager) {
      window.CartManager.addItem(product, 1);
    }
  },

  openQuickView(productId) {
    const product = this.getProductById(productId);
    if (!product) return;

    let modal = document.getElementById('quick-view-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'quick-view-modal';
      modal.className = 'modal-overlay';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-card">
        <button class="modal-close-btn" onclick="PhoneShop.closeModal()">&times;</button>
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 30px; align-items: center;">
          <div style="text-align: center; background: rgba(255,255,255,0.02); border-radius: 12px; padding: 20px;">
            <img src="${product.image}" alt="${product.name}" style="max-height: 280px; margin: 0 auto;" />
          </div>
          <div>
            <div style="color: var(--secondary); font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">${product.brand}</div>
            <h2 style="font-size: 1.6rem; margin: 6px 0 12px;">${product.name}</h2>
            <div style="margin-bottom: 12px;">${renderStarRating(product.rating)} (${product.reviewsCount} reviews)</div>
            <div style="font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 16px;">
              ${formatPrice(product.price)}
              ${product.oldPrice ? `<span style="font-size: 1rem; color: var(--text-dim); text-decoration: line-through; margin-left: 10px;">${formatPrice(product.oldPrice)}</span>` : ''}
            </div>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px; line-height: 1.5;">${product.description}</p>
            <div style="display: flex; gap: 12px;">
              <button class="btn btn-primary" onclick="PhoneShop.quickAdd('${product.id}'); PhoneShop.closeModal();">
                Add to Cart
              </button>
              <a href="product-detail.html?id=${product.id}" class="btn btn-secondary">
                View Full Specs
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('active');
  },

  closeModal() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) {
      modal.classList.remove('active');
    }
  },

  initCountdown(elementId, hoursRemaining = 48) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let targetTime = localStorage.getItem('phoneshop_countdown_target');
    if (!targetTime) {
      targetTime = Date.now() + (hoursRemaining * 3600 * 1000);
      localStorage.setItem('phoneshop_countdown_target', targetTime);
    } else {
      targetTime = parseInt(targetTime, 10);
      if (Date.now() >= targetTime) {
        targetTime = Date.now() + (hoursRemaining * 3600 * 1000);
        localStorage.setItem('phoneshop_countdown_target', targetTime);
      }
    }

    function update() {
      const diff = Math.max(0, targetTime - Date.now());
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      const hEl = el.querySelector('.hours-val');
      const mEl = el.querySelector('.mins-val');
      const sEl = el.querySelector('.secs-val');

      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(mins).padStart(2, '0');
      if (sEl) sEl.textContent = String(secs).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  },

  initMobileNav() {
    const hamburger = document.querySelector('.hamburger-btn');
    const drawer = document.querySelector('.mobile-nav-drawer');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.drawer-close');

    if (hamburger && drawer && overlay) {
      hamburger.addEventListener('click', () => {
        drawer.classList.add('open');
        overlay.classList.add('active');
      });

      const closeDrawer = () => {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
      };

      if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
      overlay.addEventListener('click', closeDrawer);
    }
  },

  initGlobalSearch() {
    const searchInputs = document.querySelectorAll('.search-input-header');
    searchInputs.forEach(input => {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && input.value.trim()) {
          window.location.href = `products.html?search=${encodeURIComponent(input.value.trim())}`;
        }
      });
    });
  },

  initTelegramWidget() {
    if (document.getElementById('floating-telegram-widget')) return;

    const widget = document.createElement('div');
    widget.id = 'floating-telegram-widget';
    widget.className = 'floating-tg-widget';
    widget.innerHTML = `
      <a href="https://t.me/kimbunthonICT" target="_blank" rel="noopener" class="tg-floating-btn" aria-label="Chat on Telegram @kimbunthonICT" title="សួរព័ត៌មានតាម Telegram: @kimbunthonICT">
        <div class="tg-icon-wrapper">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#ffffff">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
          </svg>
          <span class="tg-pulse-ring"></span>
          <span class="tg-online-badge"></span>
        </div>
        <div class="tg-text-label">
          <span class="tg-main-text">សួរព័ត៌មាន</span>
          <span class="tg-sub-text">Telegram @kimbunthonICT</span>
        </div>
      </a>
    `;
    document.body.appendChild(widget);
  },

  initTopTicker() {
    if (document.getElementById('top-announcement-ticker')) return;

    const ticker = document.createElement('div');
    ticker.id = 'top-announcement-ticker';
    ticker.className = 'top-ticker-bar';
    ticker.innerHTML = `
      <div class="ticker-badge-wrap">
        <span class="ticker-fire">🔥</span>
        <span class="ticker-badge-text">HOT PROMO</span>
      </div>
      <div class="ticker-track-wrap">
        <div class="ticker-track">
          <div class="ticker-segment">
            <span class="ticker-item">⚡ <strong>ប្រូម៉ូសិនពិសេស 2026:</strong> បញ្ចុះតម្លៃរហូតដល់ <span class="ticker-highlight">$100</span> លើ iPhone 16 Pro Max &amp; Galaxy S24 Ultra!</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">✈️ <strong>សួរព័ត៌មាន &amp; កុម្ម៉ង់ទិញផ្ទាល់:</strong> Telegram <a href="https://t.me/kimbunthonICT" target="_blank" rel="noopener" class="ticker-link">@kimbunthonICT</a> (ឆ្លើយតបរហ័ស ២៤/៧)</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">🚚 <strong>សេវាដឹកជញ្ជូនរហ័ស:</strong> ឥតគិតថ្លៃ (Free Express Delivery) ទូទាំង ២៥ ខេត្ត-ក្រុង</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">🛡️ <strong>ការធានាផ្លូវការ:</strong> រយៈពេល ២ ឆ្នាំពេញពីក្រុមហ៊ុន (100% Genuine Guaranteed)</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">🎁 <strong>កាដូថែមជូនពិសេស:</strong> Free 45W Fast Charger + Case ការពារ + ស្រ្គីនកញ្ចក់ការពារ!</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">💳 <strong>វិធីសាស្រ្តទូទាត់:</strong> ទទួល ABA PAY (KHQR) 🇰🇭, កាតធនាគារ, Apple Pay, PayPal &amp; ផ្ញើដល់ដៃទើបគិតលុយ (COD)</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">🔄 <strong>ធានាប្តូរថ្មី 30 ថ្ងៃ:</strong> បើមានបញ្ហាបច្ចេកទេសពីរោងចក្រ</span>
            <span class="ticker-sep">✦</span>
          </div>
          <div class="ticker-segment" aria-hidden="true">
            <span class="ticker-item">⚡ <strong>ប្រូម៉ូសិនពិសេស 2026:</strong> បញ្ចុះតម្លៃរហូតដល់ <span class="ticker-highlight">$100</span> លើ iPhone 16 Pro Max &amp; Galaxy S24 Ultra!</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">✈️ <strong>សួរព័ត៌មាន &amp; កុម្ម៉ង់ទិញផ្ទាល់:</strong> Telegram <a href="https://t.me/kimbunthonICT" target="_blank" rel="noopener" class="ticker-link">@kimbunthonICT</a> (ឆ្លើយតបរហ័ស ២៤/៧)</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">🚚 <strong>សេវាដឹកជញ្ជូនរហ័ស:</strong> ឥតគិតថ្លៃ (Free Express Delivery) ទូទាំង ២៥ ខេត្ត-ក្រុង</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">🛡️ <strong>ការធានាផ្លូវការ:</strong> រយៈពេល ២ ឆ្នាំពេញពីក្រុមហ៊ុន (100% Genuine Guaranteed)</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">🎁 <strong>កាដូថែមជូនពិសេស:</strong> Free 45W Fast Charger + Case ការពារ + ស្រ្គីនកញ្ចក់ការពារ!</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">💳 <strong>វិធីសាស្រ្តទូទាត់:</strong> ទទួល ABA PAY (KHQR) 🇰🇭, កាតធនាគារ, Apple Pay, PayPal &amp; ផ្ញើដល់ដៃទើបគិតលុយ (COD)</span>
            <span class="ticker-sep">✦</span>
            <span class="ticker-item">🔄 <strong>ធានាប្តូរថ្មី 30 ថ្ងៃ:</strong> បើមានបញ្ហាបច្ចេកទេសពីរោងចក្រ</span>
            <span class="ticker-sep">✦</span>
          </div>
        </div>
      </div>
    `;
    const navbar = document.querySelector('.navbar');
    if (navbar && navbar.parentNode) {
      navbar.parentNode.insertBefore(ticker, navbar);
    } else {
      document.body.insertBefore(ticker, document.body.firstChild);
    }
  }
};

// Auto-run shared listeners
document.addEventListener('DOMContentLoaded', () => {
  PhoneShop.initTopTicker();
  PhoneShop.initMobileNav();
  PhoneShop.initGlobalSearch();
  PhoneShop.initTelegramWidget();
});
