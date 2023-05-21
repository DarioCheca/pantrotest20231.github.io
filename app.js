document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  var descripcion = document.getElementById('descripcion').value;

  var fotoInput = document.getElementById('foto');
  var foto = fotoInput.files[0];

  if (foto) {
    var reader = new FileReader();
    reader.onload = function(event) {
      var fotoDataUrl = event.target.result;
      
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitud = position.coords.latitude;
        var longitud = position.coords.longitude;

        // Agregar la latitud y longitud al formulario
        document.getElementById('latitud').value = latitud;
        document.getElementById('longitud').value = longitud;

        // Hacer algo con la descripción, la foto y las coordenadas geográficas
        // por ejemplo, enviar los datos al servidor mediante una petición AJAX

        // Reiniciar el formulario
        document.getElementById('descripcion').value = '';
        fotoInput.value = '';
      }, function(error) {
        console.log('Error al obtener la ubicación:', error);
      });
    };
    reader.readAsDataURL(foto);
  }
});
