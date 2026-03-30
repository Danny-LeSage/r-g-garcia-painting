document.addEventListener('DOMContentLoaded', function(){
  // Simple lightbox
  const modal = document.createElement('div');
  modal.className = 'lightbox';
  modal.innerHTML = '<div class="lightbox-inner"><img src="" alt=""/><button class="close">✕</button></div>';
  document.body.appendChild(modal);
  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('.close');

  function open(src, alt){
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close(){
    modal.classList.remove('open');
    modalImg.src = '';
    document.body.style.overflow = '';
  }
  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', function(e){ if(e.target===modal) close(); });

  document.querySelectorAll('.grid .tile img').forEach(img=>{
    img.style.cursor='zoom-in';
    img.addEventListener('click', ()=>{
      // prefer webp md if available
      const base = img.getAttribute('data-base') || img.src;
      const webp = base.replace(/\.(jpg|png)$/i, '-md.webp');
      open(webpExists(webp) ? webp : img.src, img.alt);
    });
  });

  // helper: check if webp exists by attempting to load it (cached)
  const _cache = {};
  function webpExists(url){
    if(_cache[url]!==undefined) return _cache[url];
    const req = new XMLHttpRequest();
    req.open('HEAD', url, false);
    try{ req.send(); _cache[url] = req.status>=200 && req.status<400; }catch(e){ _cache[url]=false }
    return _cache[url];
  }
});
