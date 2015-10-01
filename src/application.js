console.log('Hello!');

var thermostat = new Thermostat();

(function ($) {

$(document).ready(function() {

  $('#weather_city').val('London'),
  $('#units_metric').attr('checked', 'checked');
  processForm();

  $('#temperature_display').text(thermostat.temperature);
  $('#temperature_display').css('color', thermostat.colour);

  $('#increase_button').on('click', function() {
    thermostat.increaseTemp();
    $('#temperature_display').text(thermostat.temperature);
    $('#temperature_display').css('color', thermostat.colour);
  });

  $('#decrease_button').on('click', function() {
    thermostat.decreaseTemp();
    $('#temperature_display').text(thermostat.temperature);
    $('#temperature_display').css('color', thermostat.colour);
  });

  $('#reset_button').on('click', function() {
    thermostat.reset();
    $('#temperature_display').text(thermostat.temperature);
    $('#temperature_display').css('color', thermostat.colour);
  });

  $('#power_saving_mode').on('change', function() {
    if (this.checked) {
      thermostat.powerSavingOn();
    } else {
      thermostat.powerSavingOff();

    }

    $('#temperature_display').text(thermostat.temperature);
    $('#temperature_display').css('color', thermostat.colour);
  });

});


  function processForm() {
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q={city name}',
      jsonp: 'callback',
      dataType: 'jsonp',
      cache: false,
      data: {
        q: $('#weather_city').val(),
        units: $('#weather_status_form input[name="units"]:checked').val()
      },
      success: function (response) {
        $('#weather_description').text(response.weather[0].description);
        $('#weather_temp').text((response.main.temp -273.15).toFixed(1));
        $('#weather_wind').text(response.wind.speed);
      },
    });
  }
})(jQuery);