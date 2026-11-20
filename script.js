// =============================================
//  RAVI KUMAR PORTFOLIO — script.js
//  High-Performance Interactions & Dark/Light Mode
// =============================================

// Guarantee starting from the top of the front main page on initial load
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

/* ══════════════════════════════════════════
   THEME TOGGLE (DARK / LIGHT MODE)
══════════════════════════════════════════ */
(function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
})();

/* ══════════════════════════════════════════
   CUSTOM CURSOR (Silky Smooth GPU-Accelerated)
══════════════════════════════════════════ */
(function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX  = -100;
  let ringY  = -100;
  let initialized = false;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (!initialized) {
      initialized = true;
      ringX = mouseX;
      ringY = mouseY;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }

    // Hardware accelerated GPU composite for instant, zero-lag dot tracking
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }, { passive: true });

  // Smooth GPU lagging ring loop
  function renderRing() {
    ringX += (mouseX - ringX) * 0.22;
    ringY += (mouseY - ringY) * 0.22;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderRing);
  }
  requestAnimationFrame(renderRing);

  // Hover targets: cursor pointer becomes slightly smaller & tighter
  const interactiveSelector = [
    'a',
    'button',
    '.btn',
    '.tool-card',
    '.project-card',
    '.filter-btn',
    '.social-link',
    '.contact-card',
    '.nav-cta',
    '.footer-social-card',
    '.focus-card',
    '.theme-toggle',
    '.modal-close'
  ].join(', ');

  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveSelector)) {
      dot.classList.add('hovered');
      ring.classList.add('hovered');
    }
  }, { passive: true });

  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactiveSelector)) {
      dot.classList.remove('hovered');
      ring.classList.remove('hovered');
    }
  }, { passive: true });

  // Viewport exit / enter handling
  document.addEventListener('mouseleave', () => document.body.classList.add('cursor-hidden'));
  document.addEventListener('mouseenter', () => document.body.classList.remove('cursor-hidden'));
})();


/* ══════════════════════════════════════════
   NAVBAR SCROLL + HAMBURGER
══════════════════════════════════════════ */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!navbar) return;

  const onScroll = () => {
    if (!navbar.classList.contains('always-scrolled')) {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // Active section indicator on scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link[href^="#"]');
  if (sections.length && navItems.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navItems.forEach(item => item.classList.remove('active'));
          const activeItem = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (activeItem) activeItem.classList.add('active');
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(sec => observer.observe(sec));
  }
})();


/* ══════════════════════════════════════════
   SCROLL REVEAL ANIMATIONS (Lightweight)
══════════════════════════════════════════ */
(function initReveal() {
  document.querySelectorAll('.tools-grid .tool-card, .projects-grid .project-card, .about-focus-grid .focus-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.06) + 's';
  });

  const revealSelectors = [
    '.about-dev-badge',
    '.about-bio-box',
    '.contact-card',
    '.contact-form-wrap',
    '.coming-soon-card',
    '.teaser-box',
    '.section-head',
  ];

  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, idx) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (idx * 0.08) + 's';
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();


/* ══════════════════════════════════════════
   PROJECT MODAL & DATA
   (Portfolio only, Movie Website removed per request)
══════════════════════════════════════════ */
const projects = {
  portfolio: {
    title: 'Portfolio Website',
    desc:  'A responsive, high-performance personal portfolio built with HTML5, CSS3, and vanilla JavaScript. Features a precision custom cursor, fluid animated wave transitions, theme toggle (Dark/Light mode), and a SaaS-inspired aesthetic highlighting my journey as a CS student at KIET Ghaziabad.',
    tags:  ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    img:   'assets/templates/01_home-300x267.jpg.jpeg',
    live:  '#',
    github:'https://github.com/iamravikumar-hq',
  }
};

function openModal(key) {
  const p = projects[key];
  if (!p) return;

  const modalTitle = document.getElementById('modalTitle');
  const modalDesc  = document.getElementById('modalDesc');
  const modalImg   = document.getElementById('modalImg');
  const modalLive  = document.getElementById('modalLive');
  const modalGithub= document.getElementById('modalGithub');
  const modalTags  = document.getElementById('modalTags');
  const modalOverlay = document.getElementById('modalOverlay');

  if (modalTitle) modalTitle.textContent = p.title;
  if (modalDesc)  modalDesc.textContent  = p.desc;
  if (modalImg) {
    modalImg.src = p.img;
    modalImg.alt = p.title;
  }
  if (modalLive)   modalLive.href   = p.live;
  if (modalGithub) modalGithub.href = p.github;
  if (modalTags) {
    modalTags.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  }

  if (modalOverlay) {
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

(function initModalListeners() {
  const overlay  = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  if (!overlay) return;

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
})();


/* ══════════════════════════════════════════
   CONTACT FORM (Live Email Delivery via FormSubmit)
══════════════════════════════════════════ */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const submitBtn = form.querySelector('.form-submit');
    const successBox = document.getElementById('formSuccess');
    const errorBox = document.getElementById('formError');

    const firstName = form.querySelector('#firstName')?.value.trim();
    const lastName  = form.querySelector('#lastName')?.value.trim();
    const email     = form.querySelector('#email')?.value.trim();
    const subject   = form.querySelector('#subject')?.value.trim();
    const message   = form.querySelector('#message')?.value.trim();

    if (!firstName || !email || !message) {
      alert('Please fill in your name, email, and message.');
      return;
    }

    if (successBox) successBox.classList.remove('show');
    if (errorBox) errorBox.classList.remove('show');

    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spinner" viewBox="0 0 50 50" style="width:18px;height:18px;animation:spin 1s linear infinite;stroke:#fff;fill:none;stroke-width:5">
        <circle cx="25" cy="25" r="20" stroke-dasharray="80" stroke-dashoffset="60"></circle>
      </svg>
      Sending Message…
    `;

    try {
      const response = await fetch('https://formsubmit.co/ajax/iamravikumar.hq@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: `${firstName} ${lastName}`.trim(),
          Email: email,
          Subject: subject || 'Portfolio Contact Message',
          Message: message,
          _subject: `New Portfolio Message from ${firstName}!`,
          _template: 'table'
        })
      });

      if (response.ok) {
        form.reset();
        if (successBox) {
          successBox.classList.add('show');
          setTimeout(() => successBox.classList.remove('show'), 7000);
        }
      } else {
        throw new Error('Server returned an error');
      }
    } catch (err) {
      console.warn('Form submission fallback:', err);
      if (errorBox) {
        errorBox.classList.add('show');
      }
      const directMailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=iamravikumar.hq@gmail.com&su=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Ravi,\n\n${message}\n\nFrom: ${firstName} (${email})`)}`;
      window.open(directMailUrl, '_blank');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnContent;
    }
  });
})();
