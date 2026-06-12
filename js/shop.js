document.addEventListener('DOMContentLoaded', () => {
  // Check if products database is loaded
  const products = window.productsDatabase || [];
  let cart = loadCart();

  // DOM Elements
  const productGrid = document.getElementById('product-grid');
  const emptyState = document.getElementById('empty-state');
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  
  // Drawer Elements
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartMobileBtn = document.getElementById('cart-mobile-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartTotalPrice = document.getElementById('cart-total-price');
  const checkoutTriggerBtn = document.getElementById('checkout-trigger-btn');
  
  // Modal Elements
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutCloseBtn = document.getElementById('checkout-close-btn');
  const checkoutForm = document.getElementById('checkout-form');

  // State
  let activeCategory = 'all';
  let searchQuery = '';

  // Initial render
  renderCatalog();
  renderCart();

  // Catalog Filtering & Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      renderCatalog();
    });
  }

  // Category buttons click binding
  const desktopCategoryBtns = document.querySelectorAll('.category-btn-desktop');
  desktopCategoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      desktopCategoryBtns.forEach(b => {
        b.classList.remove('bg-brand-primary', 'text-white');
        b.classList.add('text-slate-600', 'hover:bg-slate-200/50', 'hover:text-slate-900');
      });
      btn.classList.add('bg-brand-primary', 'text-white');
      btn.classList.remove('text-slate-600', 'hover:bg-slate-200/50', 'hover:text-slate-900');
      
      activeCategory = btn.getAttribute('data-category');
      renderCatalog();
    });
  });

  const mobileCategoryBtns = document.querySelectorAll('.category-btn-mobile');
  mobileCategoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mobileCategoryBtns.forEach(b => {
        b.classList.remove('bg-brand-primary', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-600');
      });
      btn.classList.add('bg-brand-primary', 'text-white');
      btn.classList.remove('bg-slate-100', 'text-slate-600');

      activeCategory = btn.getAttribute('data-category');
      renderCatalog();
    });
  });

  // Drawer Toggles
  if (cartToggleBtn) {
    cartToggleBtn.addEventListener('click', openCartDrawer);
  }
  if (cartMobileBtn) {
    cartMobileBtn.addEventListener('click', openCartDrawer);
  }
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', closeCartDrawer);
  }
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCartDrawer();
    });
  }

  // Checkout Modal Toggles
  if (checkoutTriggerBtn) {
    checkoutTriggerBtn.addEventListener('click', () => {
      checkoutModal.classList.remove('hidden');
      checkoutModal.classList.add('flex');
    });
  }
  if (checkoutCloseBtn) {
    checkoutCloseBtn.addEventListener('click', () => {
      checkoutModal.classList.add('hidden');
      checkoutModal.classList.remove('flex');
    });
  }

  // Checkout Form Submission
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('client-name').value.trim();
      const phone = document.getElementById('client-phone').value.trim();
      const pickup = document.getElementById('pickup-location').value;
      const notes = document.getElementById('client-notes').value.trim();

      // Compile order text message
      let orderText = `*NOWE ZAMÓWIENIE CZĘŚCI - MOTOBAJER*\n\n`;
      orderText += `*Dane klienta:*\n`;
      orderText += `👤 Imię: ${name}\n`;
      orderText += `📞 Tel: ${phone}\n`;
      orderText += `📍 Odbiór: ${pickup}\n`;
      if (notes) {
        orderText += `📝 Uwagi: ${notes}\n`;
      }
      orderText += `\n*Zamówione produkty:*\n`;

      let total = 0;
      cart.forEach((item, index) => {
        const prod = products.find(p => p.id === item.id);
        if (prod) {
          const itemTotal = prod.price * item.quantity;
          total += itemTotal;
          orderText += `${index + 1}. ${prod.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} PLN\n`;
        }
      });

      orderText += `\n*Suma: ${total.toFixed(2)} PLN*`;

      // Redirect to WhatsApp Web/App
      const whatsappPhone = "48609845865"; // Standard 609845865 prefix
      const waUrl = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(orderText)}`;
      
      window.open(waUrl, '_blank');

      // Clear Cart
      cart = [];
      saveCart(cart);
      renderCart();
      
      // Close overlays
      checkoutModal.classList.add('hidden');
      checkoutModal.classList.remove('flex');
      closeCartDrawer();
    });
  }

  // Core Render Functions
  function renderCatalog() {
    if (!productGrid) return;
    productGrid.innerHTML = '';

    // Filter items
    let filtered = products.filter(prod => {
      const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
      const matchesSearch = prod.name.toLowerCase().includes(searchQuery) || 
                            prod.description.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    // Sort items
    const sortVal = sortSelect ? sortSelect.value : 'name-asc';
    if (sortVal === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortVal === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    if (filtered.length === 0) {
      productGrid.classList.add('hidden');
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    productGrid.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');

    filtered.forEach(prod => {
      const card = document.createElement('div');
      card.className = "bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-sm hover-card-trigger flex flex-col justify-between";
      card.innerHTML = `
        <div>
          <div class="h-48 overflow-hidden bg-slate-100 relative">
            <img src="${prod.imageUrl}" alt="${prod.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy">
            <span class="absolute top-3 left-3 bg-brand-primary text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">${prod.category}</span>
          </div>
          <div class="p-5">
            <h4 class="font-heading font-bold text-slate-900 text-base mb-2 leading-snug">${prod.name}</h4>
            <p class="text-slate-500 text-xs leading-relaxed line-clamp-3">${prod.description}</p>
          </div>
        </div>
        <div class="p-5 pt-0 flex items-center justify-between mt-auto">
          <span class="text-brand-primary font-bold text-lg">${prod.price.toFixed(2)} PLN</span>
          <button data-id="${prod.id}" class="add-to-cart-btn px-3.5 py-2 bg-slate-900 hover:bg-brand-primary text-white text-xs font-semibold rounded-lg transition-all flex items-center space-x-1">
            <span>Dodaj</span>
            <span>+</span>
          </button>
        </div>
      `;
      productGrid.appendChild(card);
    });

    // Add click listeners to "Add to Cart" buttons
    const addBtns = productGrid.querySelectorAll('.add-to-cart-btn');
    addBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        addToCart(id);
      });
    });
  }

  function renderCart() {
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';

    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="text-center py-12 text-slate-400">
          <span class="text-3xl block mb-2">🛒</span>
          <span class="text-sm">Twój koszyk jest pusty</span>
        </div>
      `;
      if (cartTotalPrice) cartTotalPrice.textContent = '0.00 PLN';
      if (checkoutTriggerBtn) checkoutTriggerBtn.disabled = true;
      return;
    }

    if (checkoutTriggerBtn) checkoutTriggerBtn.disabled = false;

    cart.forEach(item => {
      const prod = products.find(p => p.id === item.id);
      if (prod) {
        const itemTotal = prod.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = "flex items-center space-x-4 bg-slate-50 border border-slate-100 p-3 rounded-lg";
        cartItemEl.innerHTML = `
          <div class="w-12 h-12 rounded overflow-hidden bg-slate-100 flex-shrink-0">
            <img src="${prod.imageUrl}" alt="${prod.name}" class="w-full h-full object-cover">
          </div>
          <div class="flex-grow min-w-0">
            <h5 class="text-xs font-bold text-slate-900 truncate leading-snug">${prod.name}</h5>
            <span class="text-[11px] text-brand-primary font-semibold block mt-0.5">${prod.price.toFixed(2)} PLN</span>
          </div>
          <div class="flex items-center space-x-1 flex-shrink-0">
            <button data-id="${item.id}" class="cart-minus-btn w-6 h-6 border border-slate-300 rounded bg-white text-slate-600 hover:bg-slate-100 text-xs font-bold flex items-center justify-center">-</button>
            <span class="text-xs font-bold w-5 text-center text-slate-800">${item.quantity}</span>
            <button data-id="${item.id}" class="cart-plus-btn w-6 h-6 border border-slate-300 rounded bg-white text-slate-600 hover:bg-slate-100 text-xs font-bold flex items-center justify-center">+</button>
          </div>
          <button data-id="${item.id}" class="cart-remove-btn text-slate-400 hover:text-red-600 transition-colors p-1 flex-shrink-0">
            🗑️
          </button>
        `;
        cartItemsContainer.appendChild(cartItemEl);
      }
    });

    if (cartTotalPrice) cartTotalPrice.textContent = `${total.toFixed(2)} PLN`;

    // Add event listeners inside cart drawer
    cartItemsContainer.querySelectorAll('.cart-minus-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        updateQuantity(id, -1);
      });
    });

    cartItemsContainer.querySelectorAll('.cart-plus-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        updateQuantity(id, 1);
      });
    });

    cartItemsContainer.querySelectorAll('.cart-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        removeItem(id);
      });
    });
  }

  // Drawer actions
  function openCartDrawer() {
    if (!cartDrawerOverlay || !cartDrawer) return;
    cartDrawerOverlay.classList.remove('hidden');
    // Force reflow
    cartDrawer.offsetHeight;
    cartDrawer.classList.remove('translate-x-full');
  }

  function closeCartDrawer() {
    if (!cartDrawerOverlay || !cartDrawer) return;
    cartDrawer.classList.add('translate-x-full');
    setTimeout(() => {
      cartDrawerOverlay.classList.add('hidden');
    }, 300);
  }

  // Cart operations
  function addToCart(id) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id, quantity: 1 });
    }
    saveCart(cart);
    renderCart();
    openCartDrawer();
  }

  function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        removeItem(id);
        return;
      }
      saveCart(cart);
      renderCart();
    }
  }

  function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    renderCart();
  }

  function loadCart() {
    try {
      return JSON.parse(localStorage.getItem('motobajer_cart')) || [];
    } catch {
      return [];
    }
  }

  function saveCart(newCart) {
    localStorage.setItem('motobajer_cart', JSON.stringify(newCart));
    // Dispatch custom event to notify main.js badge counters
    document.dispatchEvent(new CustomEvent('cartUpdated'));
  }
});
