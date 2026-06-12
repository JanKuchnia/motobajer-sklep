document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Highlight Active Nav Links
  highlightActiveNav();

  // Initialize and Sync Cart Badge Count
  updateCartBadge();
  window.addEventListener('storage', updateCartBadge);
  document.addEventListener('cartUpdated', updateCartBadge);
});

function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // Normalize paths to check if they match the active link
    if (href) {
      const isHome = href === 'index.html' || href === '/' || href === './index.html';
      const isMatch = isHome 
        ? (currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '')
        : currentPath.includes(href.replace('../', ''));

      if (isMatch) {
        link.classList.add('nav-link-active');
        link.classList.add('text-blue-600');
        link.classList.remove('text-slate-600');
      }
    }
  });
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  if (badges.length === 0) return;

  try {
    const cart = JSON.parse(localStorage.getItem('motobajer_cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    badges.forEach(badge => {
      if (totalCount > 0) {
        badge.textContent = totalCount;
        badge.classList.remove('hidden');
        badge.classList.add('flex');
      } else {
        badge.classList.add('hidden');
        badge.classList.remove('flex');
      }
    });
  } catch (error) {
    console.error('Failed to parse cart from LocalStorage:', error);
  }
}
