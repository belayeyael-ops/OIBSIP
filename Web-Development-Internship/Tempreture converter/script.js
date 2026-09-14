const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convert-btn");

const celsiusResult = document.getElementById("celsius-result");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const kelvinResult = document.getElementById("kelvin-result");

const errorMessage = document.getElementById("error-message");

convertButton.addEventListener("click", convertTemperature);

function convertTemperature() {

    const value = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    // Check for empty or invalid input
    if (temperatureInput.value.trim() === "" || isNaN(value)) {
        showError("Please enter a valid number.");
        clearResults();
        return;
    }

    let celsius;

    // Convert input to Celsius first
    if (unit === "celsius") {
        celsius = value;
    } 
    else if (unit === "fahrenheit") {
        celsius = (value - 32) * 5 / 9;
    } 
    else if (unit === "kelvin") {
        celsius = value - 273.15;
    }

    // Absolute zero validation
    if (celsius < -273.15) {
        showError(
            "Temperature cannot be below absolute zero (−273.15°C)."
        );
        clearResults();
        return;
    }

    // Convert Celsius to all units
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Display results
    celsiusResult.textContent = formatNumber(celsius);
    fahrenheitResult.textContent = formatNumber(fahrenheit);
    kelvinResult.textContent = formatNumber(kelvin);

    errorMessage.textContent = "";
}

function formatNumber(number) {
    return Number(number.toFixed(2));
}

function showError(message) {
    errorMessage.textContent = message;
}

function clearResults() {
    celsiusResult.textContent = "--";
    fahrenheitResult.textContent = "--";
    kelvinResult.textContent = "--";
}