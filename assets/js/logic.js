/*$(document).ready(function() {                                  //cambia de color cuando paso el mouse x encima de español o inglés
    $('.navbar-nav li a').mouseenter(function() {
      $(this).css('color', 'Yellow');
    }).mouseleave(function() {
      $(this).css('color', 'white');
    });
});*/

const list_digimons = document.getElementById('list_digimons')
let urlDigimon = "https://digimon-api.vercel.app/api/digimon"
let result;

const GetDigimons = async (url) => {
    try {
        const response = await fetch(url);
        result = await response.json();
        console.log(result);
        currentPage = 1;
        showPage(currentPage);
    } catch (error) {
      console.log(error);
    }
}

let currentPage = 1;
const itemsPerPage = 20;

const showPage = (page) => {
  list_digimons.innerHTML = '';
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = result.slice(start, end);

  for (let i = 0; i < pageItems.length; i++) {
      const resul = pageItems[i];
      const templateHtml = `
          <div class="digimon_img">
              <img src="${resul.img}" alt="${resul.name}">
              <p>"${resul.name}"</p>
              <p>"${resul.level}"</p>
          </div>
      `;
      list_digimons.innerHTML += templateHtml;
  }
}

// Función para navegar a la página anterior
const goToPrevPage = () => {
  if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
  }
}

// Función para navegar a la página siguiente
const goToNextPage = () => {
  const totalPages = Math.ceil(result.length / itemsPerPage);
  if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
  }
}

// Agrega event listeners a los botones de paginación
document.getElementById("prevPage").addEventListener('click', goToPrevPage);
document.getElementById("nextPage").addEventListener('click', goToNextPage);

// Llama a GetDigimons para cargar los datos
GetDigimons(urlDigimon);