$(document).ready(function () {
  // Objeto para encapsular las funciones
  var juego = {
    // Variables privadas
    apodo: "",
    numRand: 0,
    cont: 0,
    imagenes: [$('img#noAcertado'), $('img#ganar'), $('img#imgTitle')],
    
    // Función para iniciar el juego
    iniciar: function () {
      juego.apodo = $('#apodo').val();
      juego.numRand = juego.num_aleatorio(1, 100);
      $('#jugador').show();
      $('#inicio').hide();
      $('#apodoGamer').hide();
    },

    // Función para validar la entrada del usuario y procesar la respuesta
    procesarRespuesta: function () {
      juego.hideimg();
      var numJ = parseInt($('#numJ').val());
      if (isNaN(numJ) || numJ < 1 || numJ > 100) {
        $('#msgPC').html("<p>Ingresa un número válido entre 1 y 100</p>");
      }
      juego.cont++;
      if (numJ < juego.numRand) {
        juego.hideimg();
        $('#numJ').val('');
        juego.imagenes[0].show();
        $('#msgPC').html("<p>No acertaste! Tu número es MENOR que el mio!Vuelve a intentarlo!</p>");
      } else if (numJ == juego.numRand) {
        juego.hideimg();
        juego.imagenes[1].show();
        $('#jugador').hide();
        $('#msgPC').html("<p>ÁDIVINASTE!!!FELICIDADES, "+juego.apodo+"!!!</p><br><p>Te ha costado "+juego.cont+" intentos.Te apetece volver a jugar?</p>");
        $('#inicio').show();     
      } else {
        $('#numJ').val('');
        juego.hideimg();
        juego.imagenes[0].show();
        $('#msgPC').html("<p>No acertaste! Tu número es MAYOR que el mio!Vuelve a intentarlo!</p>");
      }
    },
    //Función para esconder las imágenes
    hideimg: function(){
      for (var i = 0; i < juego.imagenes.length; i++) {
        juego.imagenes[i].hide();
      }
    },

    // Función para generar un número aleatorio entre dos valores
    num_aleatorio: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  };

  $("#inicio").click(juego.iniciar);
  $('#guess').click(juego.procesarRespuesta);
});




