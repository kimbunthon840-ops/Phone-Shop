/* ===================================================================
   PHONESHOP - CART & STATE MANAGEMENT
   Handles cart in localStorage, coupons, badge updates & sync
   =================================================================== */

const CART_STORAGE_KEY = 'phoneshop_cart_v1';
const PROMO_STORAGE_KEY = 'phoneshop_promo_v1';

const CartManager = {
  getCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Failed to read cart:', e);
      return [];
    }
  },

  saveCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      this.updateBadge();
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart } }));
    } catch (e) {
      console.error('Failed to save cart:', e);
    }
  },

  addItem(product, qty = 1, selectedColor = null, selectedStorage = null) {
    const cart = this.getCart();
    const color = selectedColor || (product.colors && product.colors[0]?.name) || 'Default';
    const storage = selectedStorage || (product.storage && product.storage[0]) || 'Standard';

    // Find if existing item with same id, color, and storage
    const existingIndex = cart.findIndex(
      item => item.id === product.id && item.color === color && item.storage === storage
    );

    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        color: color,
        storage: storage,
        qty: qty
      });
    }

    this.saveCart(cart);
    if (window.PhoneShop && window.PhoneShop.showToast) {
      window.PhoneShop.showToast(`Added ${product.name} to cart!`, 'success');
    }
  },

  removeItem(index) {
    const cart = this.getCart();
    if (index >= 0 && index < cart.length) {
      const removed = cart.splice(index, 1);
      this.saveCart(cart);
      if (window.PhoneShop && window.PhoneShop.showToast) {
        window.PhoneShop.showToast(`Removed item from cart`, 'info');
      }
    }
  },

  updateQty(index, newQty) {
    const cart = this.getCart();
    if (index >= 0 && index < cart.length) {
      if (newQty <= 0) {
        this.removeItem(index);
      } else {
        cart[index].qty = parseInt(newQty, 10);
        this.saveCart(cart);
      }
    }
  },

  clearCart() {
    localStorage.removeItem(CART_STORAGE_KEY);
    localStorage.removeItem(PROMO_STORAGE_KEY);
    this.updateBadge();
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart: [] } }));
  },

  getCount() {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + (item.qty || 1), 0);
  },

  getSubtotal() {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + (item.price * (item.qty || 1)), 0);
  },

  getDiscount() {
    const subtotal = this.getSubtotal();
    const promo = this.getPromo();
    if (!promo || subtotal === 0) return 0;
    
    if (promo.type === 'percent') {
      return (subtotal * promo.value) / 100;
    } else if (promo.type === 'fixed') {
      return Math.min(promo.value, subtotal);
    }
    return 0;
  },

  getShipping() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    return subtotal > 500 ? 0 : 25; // Free shipping over $500
  },

  getTax() {
    const subtotal = this.getSubtotal();
    const discount = this.getDiscount();
    return (subtotal - discount) * 0.08; // 8% estimated tax
  },

  getTotal() {
    const subtotal = this.getSubtotal();
    if (subtotal === 0) return 0;
    const discount = this.getDiscount();
    const shipping = this.getShipping();
    const tax = this.getTax();
    return Math.max(0, subtotal - discount + shipping + tax);
  },

  applyPromo(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    const coupons = {
      'SAVE10': { code: 'SAVE10', type: 'percent', value: 10, label: '10% Off Entire Order' },
      'PHONE100': { code: 'PHONE100', type: 'fixed', value: 100, label: '$100 Off Orders' },
      'VIDEO100': { code: 'VIDEO100', type: 'fixed', value: 100, label: '$100 Off Commercial Video Special' },
      'FREESHIP': { code: 'FREESHIP', type: 'fixed', value: 25, label: 'Free Express Shipping' }
    };

    if (coupons[cleanCode]) {
      localStorage.setItem(PROMO_STORAGE_KEY, JSON.stringify(coupons[cleanCode]));
      window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart: this.getCart() } }));
      return { success: true, promo: coupons[cleanCode] };
    } else {
      return { success: false, message: 'Invalid promo code. Try "SAVE10", "PHONE100", or "VIDEO100"!' };
    }
  },

  getPromo() {
    try {
      const data = localStorage.getItem(PROMO_STORAGE_KEY);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  removePromo() {
    localStorage.removeItem(PROMO_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart: this.getCart() } }));
  },

  updateBadge() {
    const badgeElements = document.querySelectorAll('.cart-badge');
    const count = this.getCount();
    badgeElements.forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'inline-flex' : 'inline-flex';
    });
  }
};

// Initial sync on script load & cross-tab sync
document.addEventListener('DOMContentLoaded', () => {
  CartManager.updateBadge();
});

window.addEventListener('storage', (e) => {
  if (e.key === CART_STORAGE_KEY || e.key === PROMO_STORAGE_KEY) {
    CartManager.updateBadge();
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart: CartManager.getCart() } }));
  }
});

window.CartManager = CartManager;
