document.addEventListener('DOMContentLoaded', function() {   //dispara la función luego de que el html se a caragdo correctamente
    fetch("https://digimon-api.vercel.app/")
        .then(response => response.json())
        .then(data => {                                   //data es donde se traera la informacion
            document.getElementById('title').textContent = data.title; //lo verde es el id que esta en el html
            document.getElementById('poster').src = data.poster;  //lo que esta despues del data. "poster" es el id a buscar en la api
            document.getElementById('descripcion').textContent = data.synopsis;
            document.getElementById('tituloRomanizado').textContent = data.hepburn;
            document.getElementById('fechaEstreno').textContent = data.release;
            document.getElementById('director').textContent = data.director;
        })
    .catch(error => console.error('Error:', error));
})
