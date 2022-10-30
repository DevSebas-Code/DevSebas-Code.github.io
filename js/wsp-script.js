const contactForm = document.querySelector("#contactForm");
const telefono = "56979815866"


contactForm.addEventListener("submit", event => {
    event.preventDefault();
    let nombre = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phone = "+" + document.querySelector('#phone').value;
    const URL = `https://wa.me/56979815866?text=Hola%20mi%20nombre%20es%20${nombre}%20mi%20correo%20de%20contacto%20es%20${email}%20,%20estoy%20interesado%20en%20cotizar%20sus%20servicios%20favor%20responderme%20por%20este%20medio%20o%20contactarme%20al%20${phone}`
    window.open(URL, '_blank');
    // window.open(URL,"_blank");
})

