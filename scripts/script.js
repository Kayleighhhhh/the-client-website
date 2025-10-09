// JS
const filter = document.querySelector(".filter");
const menuBtn = document.querySelector(".navbtn");
const deHeader = document.querySelector("header");

filter.addEventListener("change", filtered);
menuBtn.addEventListener("click", toggleMenu);

function filtered(e) {
  // ga naar pagina
  const form = e.target.parentNode;
  form.submit()
}

function toggleMenu() {
  //alert("hoi");
deHeader.classList.toggle("is-open");
}

