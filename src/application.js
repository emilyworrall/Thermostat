console.log('Hello!');

var thermostat = new Thermostat();

$( document ).ready(function() {

  $('#temperature_display').text(thermostat.temperature);

});
