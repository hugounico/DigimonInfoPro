/*$(document).ready(function() {                                  //cambia de color cuando paso el mouse x encima de español o inglés
    $('.navbar-nav li a').mouseenter(function() {
      $(this).css('color', 'Yellow');
    }).mouseleave(function() {
      $(this).css('color', 'white');
    });
});*/

const list_digimons = document.getElementById('list_digimons')
const buttons = document.getElementById('buttons')
let urlDigimon = "https://digimon-api.vercel.app/api/digimon"
let btnNext;
let btnPrevious;
let result = [];

const GetDigimons = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        currentPage = 0;
        showPage(result, currentPage);
    } catch (error) {
      console.log(error);
    }
}

let currentPage = 0;
const itemsPerPage = 20;

// Función para mostrar una página específica de resultados
const showPage = (data, page) => {
  list_digimons.innerHTML = '';
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  
  for (let i = start; i < end && i < data.length; i++) {
      const resul = data[i];
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

// Llamar a showPage en lugar de DataDigimons inicialmente
GetDigimons(urlDigimon);

// Manejar los eventos de los botones de navegación
document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 0) {
      currentPage--;
      showPage(result, currentPage);
  }
});

document.getElementById("nextPage").addEventListener("click", () => {
  const totalPages = 11;
  if (currentPage < totalPages - 1) {
      currentPage++;
      showPage(result, currentPage);
  }
});


/*
const GetDigimons = async (url) => {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        DataDigimons(result);
    } catch (error) {
      console.log(error);
    }
}

GetDigimons(urlDigimon);

const DataDigimons = async (data) => {
  console.log(data);
  list_digimons.innerHTML = '';
    try {
      data.forEach(resul => {
        console.log(resul)
        templateHtml=`
            <div class="digimon_img">
            <img src="${resul.img}" alt="${resul.name}">
            <p>"${resul.name}"</p>
            <p>"${resul.level}"</p>
            </div>
            `
            list_digimons.innerHTML+=templateHtml
      });  
      
      } catch (error) {
        console.log(error)
    }
}*/

//fetch("https://digimon-api.vercel.app/api/digimon")
    //.then(response => response.json())
      //.then(data => {             })                      //data es donde se traera la informacion ``

