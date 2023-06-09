$(document).ready(function() {                                  //cambia de color cuando paso el mouse x encima de español o inglés
    $('.navbar-nav li a').mouseenter(function() {
      $(this).css('color', 'Yellow');
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
              const digimon = data[index];                          //alert(`Nombre: ${digimon.name}\nLevel: ${digimon.level}\nImagen: ${digimon.img}`); //Prueba exitosa de alerta
                
                // Crear la ventana modal
                var modal = $('<div>').addClass('modal');
                var modalContent = $('<div>').addClass('modal-content'); 
                var closeButton = $('<span>').addClass('close').html('&times;');   //&times es una entidad HTML que representa el carácter especial de multiplicación (×)
                var modalTitle = $('<h5>').text(digimon.name);  //Agrega nombre del digimon
                //var imgfile = digimon.img
                //console.log(imgfile)                
                var modalImage = $('<img>').attr('src', digimon.img);         //Agrega imagens del digimon image.attr('src')
                var modalText = $('<p>').text(digimon.level);                      //Agrega level del digimon
             
                // Agregar contenido a la ventana modal
                modalContent.append(closeButton);
                modalContent.append(modalImage);
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

//Mostrar formulario de registro y alertas si los campos no estan completos

//VARIABLES PARA MOSTRAR EL FORMULARIO
var formRegistro = $("#form-registro");                   //var boton2 = document.getElementById("mostrarContenedorB")
                                                          //var formularioBB = document.getElementById("contenedorB")
//FUNCION PARA MOSTRAR EL FORMULARIO
function mostrarregistro(){
    if (window.innerWidth < 992) {
        $("#mostrarregistro").on("click", function () {
          formRegistro.removeClass("ocultoa");            //.css("display", "block")
        })
      } else {
      }
}

//Alerta para solicitar completar un campo
$('.form-containera').submit(function(event) {
    event.preventDefault(); // previene el comportamiento predeterminado del formulario

//Declaracion de variables
  var correo1 = $('#email-input').val();    // obtiene el valor del campo "email"
     if (correo1 === "" || correo1 === null || correo1=== undefined) {
      alert("Por favor, complete el campo correo.");
      return;
    }
    //MENSAJE AGRADECIMIENTO
    alert("Gracias por registrarte!");
     //HAY QUE VOLVER A ESCONDER EL FORMULARIO
     if ($('.form-containera').hasClass("ocultoa")) {
      //dejar en blco para pasar directo al else
    } else {
      $('.form-containera').addClass("ocultoa");
    }
  })
    
//Mostrar formulario de comentarios y alertas si los campos no estan completos

//VARIABLES PARA MOSTRAR EL FORMULARIO
var formComent = $("#form-coments");                      //var boton2 = document.getElementById("mostrarContenedorB")
                                                          //var formularioBB = document.getElementById("contenedorB")
//FUNCION PARA MOSTRAR EL FORMULARIO
function mostrarcoments(){
    if (window.innerWidth < 992) {
        $("#mostrarcoments").on("click", function () {
          formComent.removeClass("ocultob");
        })
      } else {
      }
}

//Alerta para solicitar completar un campo
$('.form-containerb').submit(function(event) {
    event.preventDefault(); // previene el comportamiento predeterminado del formulario

//Declaracion de variables
  var correo2 = $('#email-input2').val();   // obtiene el valor del campo "email" form 2
  var nombre = $('#name-input').val();      // obtiene el valor del campo "nombre"
  
    //pedir completar el campo vacio
    if (nombre === "" || nombre === null || nombre === undefined) {
      alert("Por favor, complete el campo Nombre.");
      return;
    }
    if (correo2 === "" || correo2 === null || correo2 === undefined) {
      alert("Por favor, complete el campo correo.");
      return;
    }
        //MENSAJE AGRADECIMIENTO
        alert("Estimado(a): " + nombre + ". Gracias por tú comentario!");

        //HAY QUE VOLVER A ESCONDER EL FORMULARIO
        if ($('.form-containerb').hasClass("ocultob")) {
          //dejar en blco para pasar directo al else
        } else {
          $('.form-containerb').addClass("ocultob");
        }
  })
 