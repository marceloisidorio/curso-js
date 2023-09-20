// criação de um objeto literal
const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",

    // método (propriedade que tem uma função dentro de si)
    buzina: function(){
        alert("Biiiiiiiiiii!");
    
    },

    completo: function() {
        return "A marca é " + this.marca + " e o modelo é " + this.modelo;;
    }

};

console.log(carro.marca);
console.log(carro["modelo"]);
carro.buzina();

document.getElementById("texto").innerHTML = carro.completo();