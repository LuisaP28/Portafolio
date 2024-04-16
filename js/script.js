'use strict';



// Función alternar
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// barraLateral variables
const barraLateral = document.querySelector("[data-barraLateral]");
const barraLateralBtn = document.querySelector("[data-barraLateral-btn]");

// barraLateral alternar: función para celular
barraLateralBtn.addEventListener("click", function () { elementToggleFunc(barraLateral); });



// habilidades variables
const habilidadesItem = document.querySelectorAll("[data-habilidades-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal función alternar 
const habilidadesModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Agregar evento click a todos los modales
for (let i = 0; i < habilidadesItem.length; i++) {

  habilidadesItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-habilidades-avatar]").src;
    modalImg.alt = this.querySelector("[data-habilidades-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-habilidades-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-habilidades-text]").innerHTML;

    habilidadesModalFunc();

  });

}

// Agregar click en los modales de btn
modalCloseBtn.addEventListener("click", habilidadesModalFunc);
overlay.addEventListener("click", habilidadesModalFunc);



// Variables de selección personalizadas
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// Agregar evento en todos los elementos de selección
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// Variables de filtro
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// Agregar evento en todos los elementos del botón de filtro para pantalla grande
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


// Variables para contacto
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Agregar evento a todo el campo de entrada de formulario
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // Verificar la validación del formulario
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// Variables de navegación de la página
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Agregar evento a todos los enlaces de NAV
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      console.log(this.innerHTML.toLowerCase(),pages[i].dataset.page)
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}