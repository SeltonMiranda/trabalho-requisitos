  // ── Tamanho de fonte ──────────────────────────────────────
  const BASE = 15;
  let currentSize = BASE;

  document.getElementById('font-increase').addEventListener('click', () => {
    currentSize = Math.min(currentSize + 1, 20);
    document.documentElement.style.setProperty('--font-size-base', currentSize + 'px');
  });
  document.getElementById('font-decrease').addEventListener('click', () => {
    currentSize = Math.max(currentSize - 1, 12);
    document.documentElement.style.setProperty('--font-size-base', currentSize + 'px');
  });
  document.getElementById('font-default').addEventListener('click', () => {
    currentSize = BASE;
    document.documentElement.style.setProperty('--font-size-base', BASE + 'px');
  });

  // ── Alto contraste ────────────────────────────────────────
  const contrastBtn = document.getElementById('contrast-toggle');
  contrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
    const on = document.body.classList.contains('high-contrast');
    contrastBtn.setAttribute('aria-pressed', on);
    contrastBtn.textContent = on ? '☀ Contraste' : '⬛ Contraste';
    localStorage.setItem('highContrast', on);
  });
  // Persistir preferência
  if (localStorage.getItem('highContrast') === 'true') {
    document.body.classList.add('high-contrast');
    contrastBtn.textContent = '☀ Contraste';
  }

  // ── Menu hamburger ────────────────────────────────────────
  const navToggle = document.getElementById('nav-toggle');
  const navList   = document.getElementById('nav-list');
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });

  // Submenu mobile: clique nos itens com dropdown
  document.querySelectorAll('.nav-list > li > a[aria-haspopup]').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('open-sub');
      }
    });
  });

  // ── Pesquisa (placeholder) ────────────────────────────────
  document.querySelector('.search-box button').addEventListener('click', () => {
    const q = document.getElementById('search-input').value.trim();
    if (q) alert(`Pesquisando por: "${q}"\n\n(Integração com backend pendente)`);
  });
  document.getElementById('search-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.querySelector('.search-box button').click();
  });