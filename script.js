const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNumber(num) {
    return Math.round(num*100)/100;
}

function celciusToFahrenheitAndKelvin() {
    const celciusTemperature = parseFloat(celciusInput.value); // parseFloat converts value to floating point number.
    const fahrenheitTemperature = celciusTemperature * (9/5) + 32;
    const kelvinTemperature = celciusTemperature + 273.15;
    fahrenheitInput.value = roundNumber(fahrenheitTemperature);
    kelvinInput.value = roundNumber(kelvinTemperature);
}




function fahrenheitToCelciusAndKelvin() {
    const fahrenheitTemperature = parseFloat(fahrenheitInput.value);
    const celciusTemperature = (fahrenheitTemperature - 32) * (5/9);
    const kelvinTemperature = (fahrenheitTemperature + 459.67) * 5/9;
    celciusInput.value = roundNumber(celciusTemperature);
    kelvinInput.value = roundNumber(kelvinTemperature);
}



function kelvinToFahrenheitAndCelcius () {
    const kelvinTemperature = parseFloat(kelvinInput.value);
    const celciusTemperature = kelvinTemperature - 273.15;
    const fahrenheitTemperature = 9/5 * (kelvinTemperature - 273) + 32;
    celciusInput.value = roundNumber(celciusTemperature);
    fahrenheitInput.value = roundNumber(fahrenheitTemperature);
}


function main (){
    kelvinInput.addEventListener('input', kelvinToFahrenheitAndCelcius);
    fahrenheitInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
    celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
}

main();



