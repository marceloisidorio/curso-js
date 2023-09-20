function convertCelsius(n) {
    return ((5/9) * (n - 32)); 

}

function alerta() {
    var x = convertCelsius(77);

    alert("Após converter, a temperatura é de " + x + "°C");
}