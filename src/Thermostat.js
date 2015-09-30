function Thermostat() {
  this.temperature = 20;
  this.isPowerSaving = true;
  this.energyUsage = 'medium';
}

Thermostat.prototype.powerSavingOn = function() {
  this.isPowerSaving = true;
  if (this.temperature > 25) {
    this.temperature = 25;
  }
};

Thermostat.prototype.powerSavingOff = function() {
  this.isPowerSaving = false;
};

Thermostat.prototype.increaseTemp = function() {
  if (this.temperature < 25 && this.isPowerSaving) {
    this.temperature++;
  } else if (this.temperature === 25 && this.isPowerSaving) {
    throw new Error('Above 25 degrees not available in power saving mode');
  } else if (this.temperature < 32 && !this.isPowerSaving) {
    this.temperature++;
  } else {
    throw new Error('Above 32 degrees not possible');
  }

  this.displayEnergyUsage();
  return this.temperature;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature > 10) {
    this.temperature--;
  } else {
    throw new Error('Too chilly in here');
  }

  this.displayEnergyUsage();
  return this.temperature;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
  this.displayEnergyUsage();
  return this.temperature;
};

Thermostat.prototype.displayEnergyUsage = function() {
  if (this.temperature < 18) {
    this.energyUsage = 'low';
  } else if (this.temperature < 25) {
    this.energyUsage = 'medium';
  } else {
    this.energyUsage = 'high';
  }
};
