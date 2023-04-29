// creating afunction for the conversion
function conversion() {
    // getting the value from the input
    const farenheit = parseInt(
        document.getElementById("farenheit").value);

    //converting to celcius
    const celcius = (farenheit - 32) * 5 / 9;

    //converting to kelvin
    const kelvin = (farenheit - 32) * 5 / 9 + 273.15;

    //displaying the output
    document.getElementById("celcius").innerText = celcius;

    document.getElementById("kelvin").innerText = kelvin;
}

//focusing the field when in use
document.getElementById("focus").addEventListener("click", () => {
    document.getElementById("farenheit").focus();
});


