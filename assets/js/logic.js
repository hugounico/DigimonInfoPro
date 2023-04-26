$(document).ready(function() {                                  //cambia de color cuando paso el mouse x encima de español o inglés
    $('.navbar-nav li a').mouseenter(function() {
      $(this).css('color', 'red');
    }).mouseleave(function() {
      $(this).css('color', 'white');
    });
});

document.addEventListener('DOMContentLoaded', function() {   //dispara la función luego de que el html se a caragdo correctamente
    fetch("https://digimon-api.vercel.app/api/digimon")
        .then(response => response.json())
        .then(data => {                                   //data es donde se traera la informacion

            const tableBody = document.getElementById("table-body");
            let count = 0;
        
            data.forEach(digimon => {
              count++;
              const row = document.createElement("tr");
              const numberCell = document.createElement("td");
              const imgCell = document.createElement("td");
              const nameCell = document.createElement("td");
              const levelCell = document.createElement("td");
        
              numberCell.textContent = count;
              imgCell.innerHTML = `<img src="${digimon.img}" alt="${digimon.name}">`;
              nameCell.textContent = digimon.name;
              levelCell.textContent = digimon.level;
        
              row.appendChild(numberCell);
              row.appendChild(imgCell);
              row.appendChild(nameCell);
              row.appendChild(levelCell);
        
              tableBody.appendChild(row);
            });
        })
    .catch(error => console.error('Error:', error));
})

//document.getElementById('title').textContent = data.title; //lo verde es el id que esta en el html
//document.getElementById('poster').src = data.poster;  //lo que esta despues del data. "poster" es el id a buscar en la api
