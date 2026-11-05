/* =========================================================
   pedrobastos.dev — scripts
   ========================================================= */

// Configure aqui para o formulário funcionar:
const CONFIG = {
  // Só números, com DDI e DDD. Ex.: '5513999999999'
  whatsapp: '5513982298297',
  // Usado quando o WhatsApp estiver vazio
  email: 'pedro.bastos.dev@proton.me',
};

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  setYear();
  setupMobileMenu();
  setupActiveNav();
  setupReveal();
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

  const close = () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  };

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  // Fecha ao clicar em um link
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));

  // Fecha com Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      close();
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

  if (!('IntersectionObserver' in window) || !sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

/* Animação suave quando os cards entram na tela */
function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 80}ms`;
    observer.observe(el);
  });
}

/* Formulário: abre o WhatsApp (ou o e-mail) com a mensagem pronta */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields = ['nome', 'contato', 'mensagem'].map((name) => form.elements[name]);
    let firstInvalid = null;

    fields.forEach((field) => {
      const empty = !field.value.trim();
      field.classList.toggle('is-invalid', empty);
      field.setAttribute('aria-invalid', String(empty));
      if (empty && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      showStatus('Preencha todos os campos, por favor.', true);
      firstInvalid.focus();
      return;
    }

    const perfil = form.elements.perfil.value === 'empresa' ? 'Recrutador / empresa' : 'Dono de negócio';
    const nome = form.elements.nome.value.trim();
    const contato = form.elements.contato.value.trim();
    const mensagem = form.elements.mensagem.value.trim();

    const texto =
      `Olá, Pedro! Vim pelo seu portfólio.\n\n` +
      `Nome: ${nome}\n` +
      `Perfil: ${perfil}\n` +
      `Contato: ${contato}\n\n` +
      `${mensagem}`;

    let url;
    if (CONFIG.whatsapp) {
      url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank', 'noopener');
      showStatus('Abrindo o WhatsApp com a sua mensagem…');
    } else {
      const assunto = `Contato pelo portfólio — ${perfil}`;
      url = `mailto:${CONFIG.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(texto)}`;
      window.location.href = url;
      showStatus('Abrindo o seu app de e-mail com a mensagem…');
    }

    form.reset();
  });

  // Tira o vermelho do campo assim que a pessoa digita
  form.addEventListener('input', (e) => {
    if (e.target.classList.contains('is-invalid') && e.target.value.trim()) {
      e.target.classList.remove('is-invalid');
      e.target.setAttribute('aria-invalid', 'false');
    }
  });

  function showStatus(msg, isError = false) {
    status.textContent = msg;
    status.classList.toggle('is-error', isError);
  }
}
