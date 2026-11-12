/* ===== CYBERPUNK PARTICLES & MATRIX NODES (Verde Floresta / Matrix Dark) ===== */
(function () {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = canvas.offsetWidth;
  let H = canvas.height = canvas.offsetHeight;
  const particles = [];
  
  // Variações de Verde Cyberpunk (Floresta Neon & Esmeralda)
  const colors = [
    'rgba(46, 125, 87, ',   // Forest Accent
    'rgba(74, 222, 128, ',  // Neon Green Cyber
    'rgba(34, 197, 94, '    // Matrix Lime
  ];

  for (let i = 0; i < 75; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.6 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: Math.random() * 0.5 + 0.2, // fluxo descendente estilo data-stream cyberpunk
      alpha: Math.random() * 0.45 + 0.15,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    
    // Conexões neurais/cibernéticas sutis entre nós próximos
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(46, 125, 87, ${(1 - dist / 90) * 0.15})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Desenhar nós de partículas
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y > H) p.y = 0; // reaparece no topo suavemente
      
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${p.alpha})`;
      ctx.shadowColor = 'rgba(74, 222, 128, 0.4)';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('resize', () => {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  });
})();

/* ===== TYPED TEXT ===== */
(function () {
  const words = ['Front-End', 'React Specialist', 'UI/UX Minimalista', 'Next.js & Performance', 'High-CRO'];
  const el = document.getElementById('typedText');
  if (!el) return;
  let w = 0, c = 0, deleting = false;
  function type() {
    const word = words[w];
    if (!deleting) {
      el.textContent = word.slice(0, c + 1);
      c++;
      if (c === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = word.slice(0, c - 1);
      c--;
      if (c === 0) { deleting = false; w = (w + 1) % words.length; }
    }
    setTimeout(type, deleting ? 50 : 85);
  }
  type();
})();

/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

/* ===== RENDER PROJECTS DYNAMICALLY ===== */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid || typeof projectsData === 'undefined') return;

  grid.innerHTML = projectsData.map(p => {
    const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const liveButton = p.url_live
      ? `<a href="${p.url_live}" target="_blank" class="btn-card-primary" rel="noopener noreferrer">Visualizar ao Vivo ↗</a>`
      : '';
    const detailButton = `<a href="projeto.html?id=${p.id}" class="btn-card-secondary">Detalhes ℹ</a>`;
    const githubButton = p.url_github
      ? `<a href="${p.url_github}" target="_blank" class="btn-card-secondary" title="GitHub" rel="noopener noreferrer">GH</a>`
      : '';

    const isFeatured = (p.id === 'portfolio3d' || p.id === 'lionhard' || p.id === 'clinicasolino') 
      ? `<span class="featured-badge">⭐ Destaque</span>` 
      : '';

    return `
      <div class="project-card" data-category="${p.category || 'all'}">
        <div class="project-image" style="background-image: url('${p.img}');">
          ${isFeatured}
          <div class="project-overlay">
            ${liveButton}
            ${detailButton}
          </div>
        </div>
        <div class="project-info">
          <div class="project-tags">${tagsHtml}</div>
          <h3>${p.title}</h3>
          <p>${p.desc.replace(/<br\s*\/?>/gi, ' ')}</p>
          <div class="project-actions">
            ${liveButton}
            ${detailButton}
            ${githubButton}
          </div>
        </div>
      </div>
    `;
  }).join('');

  setupFilter();
}

/* ===== PROJECT FILTER TABS ===== */
function setupFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        if (match) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ===== CONTACT FORM SUBMISSION ===== */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const text = `Olá Stanley! Meu nome é ${name} (${email}). Mensagem: ${message}`;
    const url = `https://wa.me/5586999846614?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  });
}

/* ===== ACTIVE NAV LINK HIGHLIGHT ===== */
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 180) current = s.id;
  });
  navAs.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = 'var(--forest-light)';
    }
  });
}, { passive: true });

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});
