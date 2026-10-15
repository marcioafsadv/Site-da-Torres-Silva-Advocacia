/**
 * TORRES & SILVA ADVOCACIA - JAVASCRIPT PRINCIPAL
 * Interatividade, Slider, Menu Mobile, Modal de Áreas e Integração WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initStickyHeader();
  initMobileMenu();
  initSmoothScroll();
  initAreaModal();
  initTestimonialsSlider();
  initFaqAccordion();
  initContactForm();
  initScrollToTop();
});

/* ===================================================================
   1. HERO CAROUSEL / SLIDER
   =================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const sliderContainer = document.querySelector('.hero-slider-section');

  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval = null;
  const autoPlayDelay = 6000;

  function goToSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });

    currentSlide = index;
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }

  function startAutoplay() {
    stopAutoplay();
    slideInterval = setInterval(nextSlide, autoPlayDelay);
  }

  function stopAutoplay() {
    if (slideInterval) {
      clearInterval(slideInterval);
      slideInterval = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoplay();
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
      goToSlide(slideIdx);
      startAutoplay();
    });
  });

  // Pausa ao passar o mouse
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoplay);
    sliderContainer.addEventListener('mouseleave', startAutoplay);

    // Suporte a Touch Swipe
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const threshold = 50;
      if (touchEndX < touchStartX - threshold) {
        nextSlide();
        startAutoplay();
      } else if (touchEndX > touchStartX + threshold) {
        prevSlide();
        startAutoplay();
      }
    }
  }

  startAutoplay();
}

/* ===================================================================
   2. STICKY HEADER & ACTIVE NAV
   =================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.main-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (!header) return;

    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Highlight link ativo
    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ===================================================================
   3. MOBILE NAVIGATION MENU
   =================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const isOpen = navMenu.classList.contains('open');
    toggleBtn.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

  // Fecha menu ao clicar fora
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
}

/* ===================================================================
   4. SMOOTH SCROLL
   =================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ===================================================================
   5. MODAL DE ÁREAS DE ATUAÇÃO
   =================================================================== */
const areaDetailsData = {
  civil: {
    title: 'Direito Civil & Contratos',
    icon: 'fa-scale-balanced',
    summary: 'Atuação estratégica na prevenção e resolução de conflitos civis com foco na segurança patrimonial e cumprimento obrigacional.',
    topics: [
      'Elaboração, análise e revisão criteriosa de contratos civis e comerciais',
      'Ações indenizatórias por danos morais, materiais e lucros cessantes',
      'Cobrança amigável e execução judicial de dívidas e títulos',
      'Resolução de disputas obrigacionais e quebra de cláusulas contratuais',
      'Defesa em ações civis, notificações extrajudiciais e acordos'
    ]
  },
  transito: {
    title: 'Direito de Trânsito & Indenizações',
    icon: 'fa-car-burst',
    summary: 'Assessoria jurídica especializada para motoristas e vítimas de acidentes, garantindo reparação integral de prejuízos.',
    topics: [
      'Ações indenizatórias por acidentes de trânsito (veículos, passageiros e terceiros)',
      'Cobrança de seguro DPVAT e seguros privados de veículos',
      'Defesa administrativa e judicial contra suspensão ou cassação da CNH',
      'Recursos contra infrações indevidas e processos junto ao DETRAN/SP',
      'Responsabilidade civil de concessionárias de rodovias por falhas na pista'
    ]
  },
  familia: {
    title: 'Direito de Família & Sucessões',
    icon: 'fa-users',
    summary: 'Condução humanizada, ágil e discreta de questões familiares e inventários em São Paulo e Itu.',
    topics: [
      'Inventários judiciais e extrajudiciais em cartório com rapidez',
      'Divórcios consensuais e litigiosos, com partilha de bens',
      'Fixação, revisão e execução de pensão alimentícia',
      'Regulamentação de guarda unilateral, compartilhada e convivência familiar',
      'Planejamento sucessório, testamentos e proteção do patrimônio familiar'
    ]
  },
  trabalho: {
    title: 'Direito do Trabalho',
    icon: 'fa-briefcase',
    summary: 'Defesa vigorosa dos direitos do trabalhador e assessoria preventiva estratégica para empresas mitigarem passivos.',
    topics: [
      'Reclamações trabalhistas para cobrança de horas extras, adicionais e verbas rescisórias',
      'Rescisão indireta do contrato de trabalho (falta grave do empregador)',
      'Reconhecimento de vínculo de emprego e equiparação salarial',
      'Indenizações por acidente de trabalho e doenças ocupacionais',
      'Consultoria empresarial preventiva e elaboração de contratos de trabalho'
    ]
  },
  imobiliario: {
    title: 'Direito Imobiliário & Propriedade',
    icon: 'fa-building',
    summary: 'Segurança absoluta em transações imobiliárias, regularização documental e proteção da posse e propriedade.',
    topics: [
      'Ações de usucapião judicial e extrajudicial em São Paulo e região de Itu',
      'Regularização completa de documentação imobiliária e registros em cartório',
      'Ações de despejo, revisionais de aluguel e cobrança de inadimplência',
      'Assessoria na compra e venda segura de imóveis urbanos e rurais',
      'Rescisão de contratos de compra na planta e restituição de valores'
    ]
  },
  consumidor: {
    title: 'Direito do Consumidor & Defesa Bancária',
    icon: 'fa-shield-halved',
    summary: 'Combate a abusos de instituições financeiras, operadoras, seguradoras e empresas de grande porte.',
    topics: [
      'Ações contra negativação indevida no SPC/Serasa com pedido de indenização',
      'Recuperação de valores em fraudes bancárias, golpes digitais e transferências PIX',
      'Ações revisionais de juros e cláusulas abusivas em financiamentos e empréstimos',
      'Cancelamento de cobranças ilegais e empréstimos consignados não solicitados',
      'Defesa contra planos de saúde e negativa indevida de tratamentos'
    ]
  },
  previdenciario: {
    title: 'Direito Previdenciário (INSS)',
    icon: 'fa-file-invoice-dollar',
    summary: 'Conquiste seu benefício do INSS com planejamento assertivo e defesa especializada contra negativas administrativas.',
    topics: [
      'Planejamento previdenciário personalizado para maximizar o valor do benefício',
      'Aposentadoria por tempo de contribuição, idade, especial e por invalidez',
      'Benefício de Prestação Continuada (BPC/LOAS) para idosos e pessoas com deficiência',
      'Revisões de benefícios previdenciários e pensão por morte',
      'Ações judiciais contra indeferimentos injustos do INSS'
    ]
  },
  empresarial: {
    title: 'Direito Empresarial & Societário',
    icon: 'fa-chart-line',
    summary: 'Parceria jurídica sólida para impulsionar negócios, blindar sócios e proteger o patrimônio corporativo.',
    topics: [
      'Assessoria jurídica continuada para empresas (consultoria jurídica preventiva)',
      'Elaboração e alteração de contratos sociais, acordos de sócios e atas',
      'Defesa em execuções de títulos, recuperação de créditos e cobranças corporativas',
      'Blindagem patrimonial lícita de sócios e reestruturação de ativos',
      'Mediação de disputas societárias e dissolução parcial de sociedades'
    ]
  }
};

function initAreaModal() {
  const modalBackdrop = document.getElementById('areaModal');
  const modalTitle = document.getElementById('modalAreaTitle');
  const modalIcon = document.getElementById('modalAreaIcon');
  const modalSummary = document.getElementById('modalAreaSummary');
  const modalList = document.getElementById('modalAreaList');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');
  const areaCards = document.querySelectorAll('.area-card[data-area]');

  if (!modalBackdrop) return;

  function openAreaModal(areaKey) {
    const data = areaDetailsData[areaKey];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalIcon.className = `fa-solid ${data.icon}`;
    modalSummary.textContent = data.summary;

    modalList.innerHTML = '';
    data.topics.forEach((topic) => {
      const li = document.createElement('li');
      li.textContent = topic;
      modalList.appendChild(li);
    });

    const msg = encodeURIComponent(`Olá! Gostaria de uma consulta sobre a área de *${data.title}* com a Torres & Silva Advocacia.`);
    modalWhatsAppBtn.href = `https://wa.me/5511955996164?text=${msg}`;

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAreaModal() {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  areaCards.forEach((card) => {
    card.addEventListener('click', () => {
      const areaKey = card.getAttribute('data-area');
      openAreaModal(areaKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeAreaModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeAreaModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeAreaModal();
    }
  });
}

/* ===================================================================
   6. CONTACT FORM & WHATSAPP GENERATOR
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('consultationForm');
  const successMsg = document.getElementById('formSuccessMessage');
  const waDirectBtn = document.getElementById('btnSendViaWhatsApp');

  if (!form) return;

  function buildWhatsAppMessage() {
    const name = document.getElementById('formName')?.value.trim() || 'Cliente';
    const phone = document.getElementById('formPhone')?.value.trim() || '';
    const email = document.getElementById('formEmail')?.value.trim() || '';
    const unit = document.getElementById('formUnit')?.value || 'Não informado';
    const area = document.getElementById('formArea')?.value || 'Geral';
    const message = document.getElementById('formMessage')?.value.trim() || '';

    const text = `*SOLICITAÇÃO DE ATENDIMENTO - TORRES & SILVA ADVOCACIA*
---------------------------------------
👤 *Nome:* ${name}
📱 *Telefone/WhatsApp:* ${phone}
✉️ *E-mail:* ${email}
📍 *Unidade de Preferência:* ${unit}
⚖️ *Área de Interesse:* ${area}

📝 *Mensagem:*
${message ? message : 'Gostaria de agendar uma consulta para avaliar meu caso.'}
---------------------------------------
Enviado através do site institucional`;

    return encodeURIComponent(text);
  }

  // Enviar diretamente para o WhatsApp
  if (waDirectBtn) {
    waDirectBtn.addEventListener('click', (e) => {
      const name = document.getElementById('formName')?.value.trim();
      const phone = document.getElementById('formPhone')?.value.trim();

      if (!name || !phone) {
        alert('Por favor, preencha pelo menos seu Nome e WhatsApp no formulário antes de continuar.');
        document.getElementById('formName')?.focus();
        return;
      }

      const waUrl = `https://wa.me/5511955996164?text=${buildWhatsAppMessage()}`;
      window.open(waUrl, '_blank');
    });
  }

  // Submissão do formulário padrão
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('formName')?.value.trim();
    const phone = document.getElementById('formPhone')?.value.trim();
    const email = document.getElementById('formEmail')?.value.trim();
    const message = document.getElementById('formMessage')?.value.trim();

    if (!name || !phone || !email || !message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Exibe mensagem de confirmação
    if (successMsg) {
      successMsg.style.display = 'block';
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Opção de abrir também o WhatsApp com os dados
    setTimeout(() => {
      const waUrl = `https://wa.me/5511955996164?text=${buildWhatsAppMessage()}`;
      if (confirm('Sua solicitação foi registrada! Deseja enviar esses dados agora mesmo diretamente para o WhatsApp do Dr. Marcio e Dr. Washington para agilizar o atendimento?')) {
        window.open(waUrl, '_blank');
      }
      form.reset();
    }, 600);
  });
}

/* ===================================================================
   7. SCROLL TO TOP BUTTON
   =================================================================== */
function initScrollToTop() {
  const scrollTopBtn = document.querySelector('.scroll-to-top');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ===================================================================
   8. TESTIMONIALS SLIDER (Google Reviews - Print 2)
   =================================================================== */
function initTestimonialsSlider() {
  const track = document.querySelector('.testimonials-track');
  const prevBtn = document.getElementById('testPrevBtn');
  const nextBtn = document.getElementById('testNextBtn');
  const cards = document.querySelectorAll('.testimonial-card-item');
  const container = document.querySelector('.testimonials-slider-wrap');

  if (!track || !cards.length) return;

  let currentIndex = 0;
  let autoInterval = null;

  function getCardsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(0, cards.length - getCardsPerView());
  }

  function updateSlider() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 28;
    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  }

  function nextTestimonial() {
    const maxIdx = getMaxIndex();
    if (currentIndex >= maxIdx) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateSlider();
  }

  function prevTestimonial() {
    const maxIdx = getMaxIndex();
    if (currentIndex <= 0) {
      currentIndex = maxIdx;
    } else {
      currentIndex--;
    }
    updateSlider();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextTestimonial();
      startAuto();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevTestimonial();
      startAuto();
    });
  }

  function startAuto() {
    stopAuto();
    autoInterval = setInterval(nextTestimonial, 6000);
  }

  function stopAuto() {
    if (autoInterval) {
      clearInterval(autoInterval);
      autoInterval = null;
    }
  }

  if (container) {
    container.addEventListener('mouseenter', stopAuto);
    container.addEventListener('mouseleave', startAuto);

    let touchStart = 0;
    let touchEnd = 0;
    container.addEventListener('touchstart', (e) => {
      touchStart = e.changedTouches[0].screenX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      touchEnd = e.changedTouches[0].screenX;
      if (touchEnd < touchStart - 40) {
        nextTestimonial();
        startAuto();
      } else if (touchEnd > touchStart + 40) {
        prevTestimonial();
        startAuto();
      }
    }, { passive: true });
  }

  window.addEventListener('resize', () => {
    if (currentIndex > getMaxIndex()) {
      currentIndex = getMaxIndex();
    }
    updateSlider();
  });

  startAuto();
}

/* ===================================================================
   9. FAQ ACCORDION (Frequently Asked Question - Print 1)
   =================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha os demais para efeito clássico de acordeom
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      // Alterna o item atual
      item.classList.toggle('active', !isActive);
    });
  });
}

