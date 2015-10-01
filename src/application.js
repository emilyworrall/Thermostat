console.log('Hello!');

var thermostat = new Thermostat();

var updateTemperature = function() {
  $('#temperature_display').text(thermostat.temperature);
  $('#temperature_display').css('color', thermostat.colour);
};

$(document).ready(function() {
    updateTemperature();

  $('#increase-button').on('click', function() {
    thermostat.increaseTemp();
    updateTemperature();
  });

  $('#decrease-button').on('click', function() {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  $('#reset-button').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#power-saving-mode').on('change', function() {
    if (this.checked) {
      thermostat.powerSavingOn();
    } else {
      thermostat.powerSavingOff();
    }
    updateTemperature();
  });

  $('#weather-status-form').submit(function(event){
    event.preventDefault();
    captureCity = $('#weather-city').val();
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
        q: $('#weather-city').val(),
      },
      success: function (response) {
        $('#current-city').text(response.name);
        $('#weather-description').text(response.weather[0].description);
        $('#weather-temp').text((response.main.temp -273.15).toFixed(1));
        $('#weather-wind').text(response.wind.speed);
      },
    });
  }
