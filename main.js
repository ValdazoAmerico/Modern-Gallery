const [current, imgs] = [document.getElementById('current'), document.querySelectorAll('.imgs img') ]
const opacity = 0.6
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick ))

function imgClick(e){
    imgs.forEach(img => (img.style.opacity =1))

    // Cambiar imagen
    current.src = e.target.src

    // Cambiar opacidad
    e.target.style.opacity = opacity;
    // Adicionamos fade
    current.classList.add('fade-in')
    //Removemos fade despues de .5 segundos
    setTimeout(() => current.classList.remove('fade-in'),500)

}

