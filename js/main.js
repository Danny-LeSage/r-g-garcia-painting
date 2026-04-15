document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.site-header');
  const heroBg = document.querySelector('.hero-bg');
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const servicesToggle = document.querySelector('.services-link');
  const parentDropdown = document.querySelector('.nav-dropdown');

  // === STICKY HEADER SCROLL EFFECT ===
  if (header) {
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      },
      { passive: true }
    );
  }

  // === PARALLAX SCROLLING ===
  function disableHeroParallax() {
    return window.matchMedia('(max-width: 900px), (hover: none) and (pointer: coarse)').matches;
  }

  function updateParallax() {
    if (!heroBg) return;
    if (disableHeroParallax()) {
      heroBg.style.transform = 'none';
      return;
    }
    heroBg.style.transform = `translateY(${window.scrollY * 0.5}px)`;
  }

  if (heroBg) {
    window.addEventListener('scroll', updateParallax, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });
    updateParallax();
  }

  // === MOBILE NAVIGATION ===
  function closeMobileNav() {
    if (nav) nav.classList.remove('open');
    if (menuBtn) menuBtn.classList.remove('active');
    if (parentDropdown) parentDropdown.classList.remove('active');
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      menuBtn.classList.toggle('active');
    });

    document.querySelectorAll('.nav a:not(.services-link)').forEach((link) => {
      link.addEventListener('click', closeMobileNav);
    });
  }

  if (servicesToggle && parentDropdown) {
    servicesToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        parentDropdown.classList.toggle('active');
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMobileNav();
    }
  });

  // === SMOOTH SCROLL ===
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href === '#!') return;

      const target = document.querySelector(href);
      if (!target || !header) return;

      e.preventDefault();
      const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });

  // === SCROLL ANIMATIONS ===
  const animationOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, animationOptions);

  document.querySelectorAll('.card, .gallery-item, .faq-item, .service-card, .stat, .about-section').forEach((el) => {
    observer.observe(el);
  });

  // === LIGHTBOX ===
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = `
  <div class="lightbox-inner">
    <button class="lightbox-nav prev" aria-label="Previous">&#10094;</button>
    <img src="" alt="" />
    <button class="lightbox-nav next" aria-label="Next">&#10095;</button>
    <button class="close" aria-label="Close">&times;</button>
  </div>
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('.close');
  const prevBtn = modal.querySelector('.prev');
  const nextBtn = modal.querySelector('.next');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const galleryImages = galleryItems.map((item) => item.querySelector('img')).filter(Boolean);
  let currentGalleryIndex = 0;

  function openLightbox(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('open');
    setTimeout(() => {
      modalImg.src = '';
    }, 300);
    document.body.style.overflow = '';
  }

  function updateLightboxImage(index) {
    if (galleryImages.length === 0) return;
    currentGalleryIndex = (index + galleryImages.length) % galleryImages.length;
    const img = galleryImages[currentGalleryIndex];
    modalImg.src = img.getAttribute('data-base') || img.src;
    modalImg.alt = img.alt;
  }

  closeBtn.addEventListener('click', closeLightbox);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightboxImage(currentGalleryIndex - 1);
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightboxImage(currentGalleryIndex + 1);
  });

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;
      currentGalleryIndex = index;
      openLightbox(img.getAttribute('data-base') || img.src, img.alt);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeLightbox();
    }

    if (!modal.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') updateLightboxImage(currentGalleryIndex - 1);
    if (e.key === 'ArrowRight') updateLightboxImage(currentGalleryIndex + 1);
  });

  // === TESTIMONIALS CAROUSEL ===
  const slides = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showTestimonialSlide(n) {
    if (slides.length === 0 || dots.length === 0) return;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  if (dots.length > 0 && slides.length > 0) {
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showTestimonialSlide(index));
    });

    setInterval(() => showTestimonialSlide(currentSlide + 1), 6000);
  }

  // === FORM VALIDATION ===
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let valid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          input.classList.add('error');
          valid = false;
        } else {
          input.classList.remove('error');
        }
      });

      if (!valid) return;

      const formData = new FormData(form);
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      fetch(form.action, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          if (!result || result.result !== 'success') {
            throw new Error(result && result.error ? String(result.error) : 'Form submission failed');
          }

          const msg = document.createElement('div');
          msg.className = 'form-success';
          msg.textContent = 'Request submitted! We will contact you within 24 hours.';

          msg.style.cssText = `
            background: #10b981;
            color: #fff;
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
            font-weight: 600;
            margin-top: 1.5rem;
            width: 100%;
            box-sizing: border-box;
          `;

          form.appendChild(msg);
          if (submitBtn) submitBtn.style.display = 'none';
          form.reset();

          setTimeout(() => {
            msg.remove();
            if (submitBtn) {
              submitBtn.style.display = 'block';
              submitBtn.disabled = false;
            }
          }, 8000);
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('The form did not send successfully yet. Please try again after fixing the Apps Script, or call us directly.');
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  // === LAZY LOAD IMAGES ===
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          imgObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => imgObserver.observe(img));
  }

  // === SMOOTH SCROLL FALLBACK ===
  if (!('scrollBehavior' in document.documentElement.style)) {
    window.addEventListener('click', (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const id = target.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        el.scrollIntoView();
        e.preventDefault();
      }
    });
  }

  // === FAQ ACCORDION ===
  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
    });
  });
});
