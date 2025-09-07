// Highlight active nav link based on current pathname
(function highlightActiveNav() {
  try {
    var current = location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('nav a');
    links.forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      if (href === current) {
        a.classList.add('active');
      }
    });
  } catch (_) {}
})();

// Defer loading heavy background image for first meaningful paint (optional, guarded)
(function preloadBackground() {
  try {
    var img = new Image();
    img.src = 'assets/background.png';
  } catch (_) {}
})();

// Set copyright year in footer
(function setFooterYear() {
  try {
    var el = document.getElementById('year');
    if (el) {
      el.textContent = new Date().getFullYear();
    }
  } catch (_) {}
})();



