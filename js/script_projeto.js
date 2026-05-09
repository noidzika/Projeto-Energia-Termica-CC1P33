

const titulos = document.querySelectorAll(".titulo");

titulos.forEach(titulo => {
  titulo.addEventListener("click", () => {
    const item = titulo.parentElement;

    item.classList.toggle("ativo");
  });
});