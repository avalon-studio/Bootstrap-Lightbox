const body_element = document.querySelector('html body');
const modal_div = document.createElement("div");
let modal_window = document.body.appendChild(modal_div);
let modal_html = '<div class="modal fade" id="lightboxModalFullscreen" tabindex="-1" aria-labelledby="lightboxModalFullscreenLabel" aria-hidden="true"><div class="modal-dialog modal-fullscreen" data-bs-dismiss="modal" aria-label="Close"><div class="modal-content border-0"><div class="modal-body d-flex align-self-center align-items-center justify-content-center"><img src="" id="LightboxCanvas" data-bs-dismiss="modal" aria-label="Close" /></div></div></div></div>'
modal_window.innerHTML = modal_html;

Array.from(document.querySelectorAll('[data-modal*="bs-lightbox"]')).forEach((href) => {
     href.setAttribute('data-bs-toggle','modal');
     href.setAttribute('data-bs-target','#lightboxModalFullscreen');
     href.addEventListener('click', (e)=>{
           const target_href = href.getAttribute('href');
           document.getElementById('LightboxCanvas').src = target_href;
           e.preventDefault();
           console.log(target_href);
     })
});
