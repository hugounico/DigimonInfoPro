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
              imgCell.innerHTML = `<img src="${digimon.img}" alt="${digimon.name}" class="digimon-img" data-id="${count-1}">`; /*PROBANDO DATA-ID para que al hacer click en al imagen abra un card*/
              nameCell.textContent = digimon.name;
              //nameCell.setAttribute("class", "count");
              levelCell.textContent = digimon.level;
        
              row.appendChild(numberCell);
              row.appendChild(imgCell);
              row.appendChild(nameCell);
              row.appendChild(levelCell);
        
              tableBody.appendChild(row);
            });

            // Agregar event listener en las celdas de imagen
            const digimonImgs = document.getElementsByClassName("digimon-img");
            Array.from(digimonImgs).forEach(img => {                //Arma una array con las imagenes
              img.addEventListener("click", () => {                 //agrega el evento del click
              const index = parseInt(img.getAttribute("data-id"));  //obtenemos como numero el id de la imagen
              // Obtener información del digimon
              const digimon = data[index];
              //alert(`Nombre: ${digimon.name}\nLevel: ${digimon.level}\nImagen: ${digimon.img}`); //Prueba exitosa de alerta

                // Crear la ventana modal
                var modal = $('<div>').addClass('modal');
                var modalContent = $('<div>').addClass('modal-content'); 
                var closeButton = $('<span>').addClass('close').html('&times;');   //&times es una entidad HTML que representa el carácter especial de multiplicación (×)
                var modalTitle = $('<h5>').text(digimon.name);                     //Agrega nombre del digimon
                //var modalImage = $('<img>').attr('src', $(digimon.img));        //Agrega imagens del digimon image.attr('src')
                var modalText = $('<p>').text(digimon.level);                          //Agrega level del digimon
             
                // Agregar contenido a la ventana modal
                modalContent.append(closeButton);
                //modalContent.append(modalImage);
                modalContent.append(modalTitle);
                modalContent.append(modalText);
                modal.append(modalContent);
                $('body').append(modal);

                // Mostrar la ventana modal
                modal.show();

                  // Manejar el clic en la x para cerrar la ventana modal
                  closeButton.click(function() {
                  modal.remove()
                  });
              });
            })
      })
      .catch(error => console.error('Error:', error));

//document.getElementById('title').textContent = data.title; //lo verde es el id que esta en el html
//document.getElementById('poster').src = data.poster;  //lo que esta despues del data. "poster" es el id a buscar en la api
