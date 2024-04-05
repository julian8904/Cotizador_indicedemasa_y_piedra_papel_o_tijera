  function calcularCotizacion() {
      var reserva = document.getElementById("diasReserva").value;
      var personas = document.getElementById("numeroPersonas").value;
      var habitacion = document.getElementById("tipoHabitacion").value;
    
      // aca se definen los precios de las habitaciones
      var preciosBase = {
        1: 100000, // Habitación Queen
        2: 210000, // Habitación King
        3: 90000, // Habitación Suite
        // aca se podria agregar mas precios base para otras habitaciones
      };
    
      // Verificar si la habitación seleccionada existe en los precios base
      if (preciosBase.hasOwnProperty(habitacion)) {
        var precioBase = preciosBase[habitacion];
    
        // Calcular el precio total aplicando factores de reserva y personas
        var precioTotal = precioBase * reserva * personas;
    
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "El valor de tu reserva es: $ " + precioTotal;
      } else {
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "No se encontró un precio base para la habitación seleccionada.";
      }
    }
    