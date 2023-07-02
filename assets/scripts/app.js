// Selecione todos os elementos com a classe "scroll-link"
const scrollLinks = document.querySelectorAll(".scroll-link");

// Adicione um ouvinte de evento de clique a cada elemento de ancoragem
scrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Previne o comportamento padrão do link

    // Rola suavemente até o elemento de destino correspondente ao atributo href do link
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth", // Rola suavemente
      block: "start", // Alinha o topo do elemento de destino com o topo da janela
    });
  });
});


// Fade in / Fade out

const fadeElements = document.querySelectorAll('.fade-in-element');

window.addEventListener('scroll', fadeInOut);

function fadeInOut() {
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.8) {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    } else {
      element.classList.add('fade-out');
      element.classList.remove('fade-in');
    }
  });
}