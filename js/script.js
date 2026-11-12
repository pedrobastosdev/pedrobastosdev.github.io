/* =========================================================
   pedrobastos.dev — scripts
   ========================================================= */

// Configure aqui para o formulário funcionar:
const CONFIG = {
  // Só números, com DDI e DDD. Ex.: '5513999999999'
  whatsapp: '5513982298297',
  // Usado quando o WhatsApp estiver vazio e como alternativa
  email: 'pedro.bastos.dev@proton.me',
};

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  setYear();
  setupMobileMenu();
  setupActiveNav();
  setupProfilePreset();
  setupDock();
  setupContactForm();
});

/* Ano automático no rodapé */
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

/* Menu no celular */
function setupMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  const label = toggle.querySelector('.nav-toggle-label');
  const setOpen = (open) => {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (label) label.textContent = open ? 'Fechar' : 'Menu';
  };

  toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));

  document.addEventListener('click', (e) => {
    if (menu.classList.contains('is-open') && !menu.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
}

/* Destaca no menu a seção que está na tela */
function setupActiveNav() {
  const links = [...document.querySelectorAll('.nav-link')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  // Sobre e Como funciona ficam lado a lado: o link clicado ganha a vez entre seções da mesma linha
  let clicked = null;
  links.forEach((link) => link.addEventListener('click', () => { clicked = link.getAttribute('href'); }));

  const front = document.querySelector('.ad-feature');
  const header = document.querySelector('.masthead');

  const update = () => {
    const onFront = front && front.getBoundingClientRect().bottom > window.innerHeight * 0.5;
    let current = null;

    if (!onFront) {
      const line = (header ? header.offsetHeight : 0) + 48;
      const tops = sections.map((s) => Math.round(s.getBoundingClientRect().top));
      const passed = tops.filter((t) => t <= line);
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (passed.length) {
        const rowTop = Math.max(...passed);
        const row = sections.filter((_, i) => tops[i] === rowTop).map((s) => `#${s.id}`);
        current = row.includes(clicked) ? clicked : row[0];
      }
      if (atBottom && !(clicked && current === clicked)) current = `#${sections[sections.length - 1].id}`;
      if (clicked && current !== clicked) clicked = null;
    }

    links.forEach((link) => {
      const active = link.getAttribute('href') === current;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  let ticking = false;
  const schedule = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; update(); });
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();
}

/* Quem chega pelo caminho das empresas ou dos negócios já encontra o formulário marcado */
function setupProfilePreset() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const presets = [
    ['#empregos a, .route:first-child a', 'empresa'],
    ['#servicos a, .route:last-child a', 'cliente'],
  ];

  document.querySelectorAll('a[data-perfil]').forEach((el) => {
    el.addEventListener('click', () => setProfile(el.dataset.perfil));
  });

  presets.forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.addEventListener('click', () => setProfile(value));
    });
  });

  function setProfile(value) {
    const radio = form.querySelector(`input[name="perfil"][value="${value}"]`);
    if (radio) radio.checked = true;
    if (form.syncAction) form.syncAction();
  }
}

/* Faixa "Falar comigo" no celular: aparece depois do anúncio de destaque e some nos projetos e no contato */
function setupDock() {
  const dock = document.getElementById('dock');
  const feature = document.querySelector('.ad-feature');
  const contact = document.getElementById('contato');
  if (!dock || !feature || !contact || !('IntersectionObserver' in window)) return;

  const projects = document.getElementById('projetos');
  let pastFeature = false;
  let atContact = false;
  let atProjects = false;
  const update = () => dock.classList.toggle('is-shown', pastFeature && !atContact && !atProjects);

  new IntersectionObserver(([entry]) => {
    pastFeature = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    update();
  }).observe(feature);

  new IntersectionObserver(([entry]) => {
    atContact = entry.isIntersecting;
    update();
  }).observe(contact);

  if (projects) {
    new IntersectionObserver(([entry]) => {
      atProjects = entry.isIntersecting;
      update();
    }, { threshold: 0.6 }).observe(projects);
  }
}

/* Formulário: abre o WhatsApp (ou o e-mail) com a mensagem pronta */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const button = form && form.querySelector('button[type="submit"]');
  if (!form || !status || !button) return;

  const rules = {
    nome: (v) => (v ? '' : 'Escreva o seu nome.'),
    contato: (v) => {
      if (!v) return 'Deixe um e-mail ou WhatsApp para eu responder.';
      const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      const phone = v.replace(/\D/g, '').length >= 10;
      return email || phone ? '' : 'Use um e-mail (nome@exemplo.com) ou um telefone com DDD.';
    },
    mensagem: (v) => (v.length >= 10 ? '' : v ? 'Conte um pouco mais, em pelo menos 10 caracteres.' : 'Escreva a sua mensagem.'),
  };

  const fieldError = (name, message) => {
    const input = form.elements[name];
    const error = document.getElementById(`${input.id}-erro`);
    input.setAttribute('aria-invalid', String(Boolean(message)));
    if (error) error.textContent = message;
  };

  const help = document.getElementById('form-help');
  const via = () => (form.elements.perfil.value === 'empresa' || !CONFIG.whatsapp ? 'email' : 'whatsapp');
  const routes = document.getElementById('routes');
  const syncAction = () => {
    // Ao lado do formulário, fica só a rota de quem escolheu o perfil
    if (routes) {
      const perfil = form.elements.perfil.value;
      if (perfil) routes.dataset.perfil = perfil;
      else delete routes.dataset.perfil;
    }
    const email = via() === 'email';
    button.textContent = email ? 'Enviar por e-mail' : 'Enviar pelo WhatsApp';
    if (help) help.textContent = email
      ? 'Abre o seu app de e-mail com a mensagem pronta. Você revisa e envia de lá.'
      : 'Abre o WhatsApp com a sua mensagem pronta. Você revisa e envia de lá.';
  };
  form.addEventListener('change', (e) => { if (e.target.name === 'perfil') syncAction(); });
  syncAction();
  form.syncAction = syncAction;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (button.disabled) return;

    let firstInvalid = null;
    Object.entries(rules).forEach(([name, check]) => {
      const message = check(form.elements[name].value.trim());
      fieldError(name, message);
      if (message && !firstInvalid) firstInvalid = form.elements[name];
    });

    if (firstInvalid) {
      showStatus('Confira os campos marcados.', true);
      firstInvalid.focus();
      return;
    }

    const perfilValue = form.elements.perfil.value;
    const perfil = perfilValue === 'empresa' ? 'Empresa / recrutador' : perfilValue === 'cliente' ? 'Dono de negócio' : 'Não informado';
    const nome = form.elements.nome.value.trim();
    const contato = form.elements.contato.value.trim();
    const mensagem = form.elements.mensagem.value.trim();

    const texto =
      `Olá, Pedro! Vim pelo seu portfólio.\n\n` +
      `Nome: ${nome}\n` +
      `Perfil: ${perfil}\n` +
      `Contato: ${contato}\n\n` +
      `${mensagem}`;

    const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent(`Contato pelo portfólio — ${perfil}`)}&body=${encodeURIComponent(texto)}`;

    // Evita abrir duas abas com cliques repetidos
    button.disabled = true;
    setTimeout(() => { button.disabled = false; }, 2500);

    if (via() === 'whatsapp') {
      const link = document.createElement('a');
      link.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
      link.target = '_blank';
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      link.remove();
      showStatus('Abrimos o WhatsApp numa nova aba com a sua mensagem. ', false, mailto, 'Não abriu? Envie por e-mail.');
    } else {
      window.location.href = mailto;
      showStatus('Abrindo o seu app de e-mail com a mensagem. ', false, CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}` : null, 'Não abriu? Envie pelo WhatsApp.');
    }
    // A mensagem fica no formulário: se algo não abrir, nada se perde.
  });

  // Tira o erro do campo assim que ele fica válido
  form.addEventListener('input', (e) => {
    const name = e.target.name;
    if (!rules[name] || e.target.getAttribute('aria-invalid') !== 'true') return;
    if (!rules[name](e.target.value.trim())) fieldError(name, '');
  });

  function showStatus(msg, isError = false, fallback, fallbackText) {
    status.textContent = msg;
    status.classList.toggle('is-error', isError);
    if (fallback) {
      const a = document.createElement('a');
      a.href = fallback;
      a.textContent = fallbackText;
      if (fallback.startsWith('http')) { a.target = '_blank'; a.rel = 'noopener'; }
      status.appendChild(a);
    }
  }
}
