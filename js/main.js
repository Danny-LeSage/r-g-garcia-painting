document.addEventListener('DOMContentLoaded', function(){
  // === STICKY HEADER SCROLL EFFECT ===
  const header = document.querySelector('.site-header');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', ()=>{
    const scrollTop = window.scrollY;
    
    if(scrollTop > 50){
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
  }, { passive: true });

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
  const servicesLink = document.querySelector('.services-link');
  const dropdownMenu = document.querySelector('.dropdown-menu');
  
  if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      menuBtn.classList.toggle('active');
    });
    
    // Handle services dropdown on mobile
    if(servicesLink && window.innerWidth < 900){
      servicesLink.addEventListener('click', (e)=>{
        e.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      });
    }
    
    document.querySelectorAll('.nav a:not(.services-link)').forEach(a=>{
      a.addEventListener('click', ()=>{
        nav.classList.remove('open');
        menuBtn.classList.remove('active');
        if(dropdownMenu) dropdownMenu.style.display = 'none';
      });
    });
  }

  // === SMOOTH SCROLL ===
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === "#" || href === "#!") return; // Ignore empty links

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
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
  modal.innerHTML = `
  <div class="lightbox-inner">
    <button class="lightbox-nav prev" aria-label="Previous">❮</button>
    <img src="" alt=""/>
    <button class="lightbox-nav next" aria-label="Next">❯</button>
    <button class="close" aria-label="Close">✕</button>
  </div>
  `;
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
    // Small delay before clearing src prevents a "flicker" during the transition
    setTimeout(() => { modalImg.src = ''; }, 300);
    document.body.style.overflow = ''; // Restores scrolling
  }
  
  closeBtn.addEventListener('click', closeLightbox);
  
  // Close on background click
  modal.addEventListener('click', (e) => { 
    if(e.target === modal) closeLightbox(); 
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal.classList.contains('open')) closeLightbox();
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
  let currentGalleryIndex = 0;
  const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));

  function updateLightboxImage(index) {
    currentGalleryIndex = (index + galleryImages.length) % galleryImages.length;
    const img = galleryImages[currentGalleryIndex];
    const fullResSource = img.getAttribute('data-base') || img.src;
    modalImg.src = fullResSource;
    modalImg.alt = img.alt;
  }

  // Add event listeners to the new buttons
  modal.querySelector('.prev').addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightboxImage(currentGalleryIndex - 1);
  });

  modal.querySelector('.next').addEventListener('click', (e) => {
    e.stopPropagation();
    updateLightboxImage(currentGalleryIndex + 1);
  });

  // Update your existing openLightbox logic to set the index
  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      currentGalleryIndex = index;
      const img = item.querySelector('img');
      openLightbox(img.getAttribute('data-base') || img.src, img.alt);
    });
  });

  // Keyboard Navigation (Left/Right arrows)
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') updateLightboxImage(currentGalleryIndex - 1);
    if (e.key === 'ArrowRight') updateLightboxImage(currentGalleryIndex + 1);
  });

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

    // Toggle Services Accordion on Mobile
  const servicesToggle = document.querySelector('.services-link');
  const parentDropdown = document.querySelector('.nav-dropdown');

  servicesToggle.addEventListener('click', function(e) {
    if (window.innerWidth <= 900) {
      e.preventDefault(); // Stop from jumping to a page
      parentDropdown.classList.toggle('active');
    }
  });
});
