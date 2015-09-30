# Thermostat

The project this week is to create a simple digital thermostat, using JavaScript, test-driven with Jasmine and using jQuery to interact with the HTML page. There are 2 parts to this project:

1. The first is to build a thermostat model, which encapsulates the business logic.

2. The second is to create a user interface (UI) in HTML to interact with the thermostat and provide buttons and a display similar to the following:

Use the specification below to plan your code. Think about the separation of concerns (SOC) principle. Which parts of your code should handle the different requirements?

### Specification

- Thermostat starts at 20 degrees
- You can increase the temp with the up button
- You can decrease the temp with the down button
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 by hitting the reset button
- The thermostat should colour the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red


#### To Do

- detach colour display change from app logic
- add a LOT of CSS
