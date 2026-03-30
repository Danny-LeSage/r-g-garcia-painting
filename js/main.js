document.addEventListener('DOMContentLoaded', function(){
  // === PARALLAX SCROLLING ===
  const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
  const heroBg = document.querySelector('.hero-bg');
  
  function updateParallax(){
    const scrolled = window.scrollY;
    if(heroBg){
      const speed = 0.5;
      heroBg.style.transform = `translateY(${scrolled * speed}px)`;
    }
  }
  
  window.addEventListener('scroll', updateParallax, { passive: true });

  // === HAMBURGER MENU ===
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      menuBtn.classList.toggle('active');
    });
    document.querySelectorAll('.nav a').forEach(a=>{
      a.addEventListener('click', ()=>{
        nav.classList.remove('open');
        menuBtn.classList.remove('active');
      });
    });
  }

  // === SMOOTH SCROLL ===
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // === SCROLL ANIMATIONS ===
  const animationOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, animationOptions);
  
  // Observe cards, gallery items, FAQ items, service cards
  document.querySelectorAll('.card, .gallery-item, .faq-item, .service-card, .stat, .about-section').forEach(el=>{
    observer.observe(el);
  });

  // === LIGHTBOX ===
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = '<div class="lightbox-inner"><img src="" alt=""/><button class="close">✕</button></div>';
  document.body.appendChild(modal);
  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('.close');

  function openLightbox(src, alt){
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeLightbox(){
    modal.classList.remove('open');
    modalImg.src = '';
    document.body.style.overflow = '';
  }
  
  closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', function(e){ 
    if(e.target===modal) closeLightbox(); 
  });
  
  // Gallery click handlers
  document.querySelectorAll('.gallery-item img').forEach(img=>{
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', ()=>{
      const base = img.getAttribute('data-base') || img.src;
      openLightbox(base, img.alt);
    });
  });

  // === TESTIMONIALS CAROUSEL ===
  const slides = document.querySelectorAll('.testimonial-card');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showTestimonialSlide(n){
    if(slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  if(dots.length > 0){
    dots.forEach((dot, i)=>{
      dot.addEventListener('click', ()=>showTestimonialSlide(i));
    });
    // Auto-rotate every 6 seconds
    setInterval(()=>showTestimonialSlide(currentSlide + 1), 6000);
  }

  // === FORM VALIDATION ===
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      let valid = true;
      
      inputs.forEach(inp=>{
        if(!inp.value.trim()){
          inp.classList.add('error');
          valid = false;
        } else {
          inp.classList.remove('error');
        }
      });
      
      if(valid){
        // Show success message
        const msg = document.createElement('div');
        msg.className = 'form-success';
        msg.textContent = '✓ Request submitted! We\'ll contact you within 24 hours.';
        msg.style.cssText = 'background:linear-gradient(135deg,#10b981,#059669);color:#fff;padding:1rem;border-radius:8px;text-align:center;font-weight:600;animation:slideUp 0.4s ease-out;margin-top:1rem';
        form.parentNode.insertBefore(msg, form.nextSibling);
        setTimeout(()=>msg.remove(), 5000);
        form.reset();
      }
    });
  }

  // === LAZY LOAD IMAGES ===
  if('IntersectionObserver' in window){
    const imgObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('lazy');
          imgObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img=>imgObserver.observe(img));
  }

  // === SMOOTH SCROLL BEHAVIOR ===
  // Fallback for browsers that don't support smooth scroll in scrollIntoView
  if(!('scrollBehavior' in document.documentElement.style)){
    window.addEventListener('click', function(e){
      const target = e.target.closest('a[href^="#"]');
      if(target){
        const id = target.getAttribute('href');
        const el = document.querySelector(id);
        if(el){
          el.scrollIntoView();
          e.preventDefault();
        }
      }
    });
  }
});
