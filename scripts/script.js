// JS
const filter = document.querySelector(".filter");

filter.addEventListener("change", filtered);

function filtered(e) {
  // ga naar pagina
  const form = e.target.parentNode;
  form.submit()
}