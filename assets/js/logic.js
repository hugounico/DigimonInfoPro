$(document).ready(function() {                                  //cambia de color cuando paso el mouse x encima de español o inglés
    $('.navbar-nav li a').mouseenter(function() {
      $(this).css('color', 'red');
    }).mouseleave(function() {
      $(this).css('color', 'white');
    });
});

let data;

fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
      .then(data => {                                   //data es donde se traera la informacion

        const tableBody = document.getElementById("table-body");
          let count = 0; //crea la variable count que parte en 0
        
            data.forEach(digimon => {
              count++; //aumenta la variable count de 1 en 1 para cada iteracion
              const row = document.createElement("tr");
              const numberCell = document.createElement("td");
              const imgCell = document.createElement("td");
              const nameCell = document.createElement("td");
              const levelCell = document.createElement("td");
        
              numberCell.textContent = count;
              imgCell.innerHTML = `<img src="${digimon.img}" alt="${digimon.name}">`; /*PROBANDO DATA-ID para que al hacer click en al imagen abra un card*/
              imgCell.setAttribute("class", "count");
              imgCell.setAttribute("id", count);
              nameCell.textContent = digimon.name;
              //nameCell.setAttribute("class", "count");
              //nameCell.setAttribute("id", count);
              levelCell.textContent = digimon.level;
        
              row.appendChild(numberCell);
              row.appendChild(imgCell);
              row.appendChild(nameCell);
              row.appendChild(levelCell);
        
              tableBody.appendChild(row);
            });
      })
    .catch(error => console.error('Error:', error));

const pokemonImgs = document.querySelectorAll(".count");
pokemonImgs.forEach(img => {
  img.addEventListener('click', () => {
    
    //var title = $("#table-body").find("#miid2").text();
    //console.log(title);
    //alert("Por favor, complete el campo Nombre.")
    console.log(img.getAttribute("id"));
    
    /*const pokemon = data[img.getAttribute('data-id')];
    document.getElementById('modal-pokemon-name').textContent = pokemon.name;
    document.getElementById('modal-pokemon-img').src = pokemon.img;
    document.getElementById('modal-pokemon-level').textContent = pokemon.level;
    const modal = new bootstrap.Modal(document.getElementById('modal'));
    modal.show();*/

  });
});


//document.getElementById('title').textContent = data.title; //lo verde es el id que esta en el html
//document.getElementById('poster').src = data.poster;  //lo que esta despues del data. "poster" es el id a buscar en la api
