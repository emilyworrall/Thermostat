console.log('Hello!');

var thermostat = new Thermostat();
var captureCity = "London"

var updateTemperature = function() {
  $('#temperature_display').text(thermostat.temperature);
  $('#temperature_display').css('color', thermostat.colour);
};

// (function ($) {

$(document).ready(function() {

  //$('#weather_city').val('London'),
  // $('#units_metric').attr('checked', 'checked');
  // processForm();
    updateTemperature();


  $('#increase_button').on('click', function() {
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#decrease_button').on('click', function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#reset_button').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#power_saving_mode').on('change', function() {
    if (this.checked) {
      thermostat.powerSavingOn();
    } else {
      thermostat.powerSavingOff();
    }
    updateTemperature();
  });

  $('#weather_status_form').submit(function(event){
    event.preventDefault();
    captureCity = $('#weather_city').val();
    console.log(captureCity);
    processForm();
    updateTemperature();
  });

});


  function processForm() {
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + captureCity,
      jsonp: 'callback',
      dataType: 'jsonp',
      cache: false,
      data: {
        q: $('#weather_city').val(),
        units: $('#weather_status_form input[name="units"]:checked').val()
      },
      success: function (response) {
        $('#current_city').text(response.name);
        $('#weather_description').text(response.weather[0].description);
        $('#weather_temp').text((response.main.temp -273.15).toFixed(1));
        $('#weather_wind').text(response.wind.speed);
      },
    });
  }
// })(jQuery);