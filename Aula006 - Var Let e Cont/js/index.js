// no JS temos 3 tipos de variáveis: var, let e const

/*
    var:
    Têm escopo de função. Isso significa que elas são visíveis em toda a função
    em que foram declaradas. Hoisting: Suas declarações são "elevadas" para o topo
    da função ou escopo, o que significa que você pode usá-las antes de declará-las
    no código, mas elas terão valor undefined até serem inicializadas.

    let:
    Têm escopo de bloco. Isso significa que elas são visíveis apenas dentro do bloco em
    que foram declaradas (por exemplo, dentro de um if, for, ou qualquer par de chaves {}).
    Não sofre hoisting: Ao contrário do var, as declarações de let não são elevadas para o
    topo do escopo. Elas precisam ser declaradas antes de serem usadas no código.

    const:
    Também têm escopo de bloco, como o let, mas têm a característica adicional de serem 
    constantes, ou seja, seus valores não podem ser reatribuídos após a inicialização.

*/

// declaração de variáveis
var nome, sobrenome, nomeCompleto, idade;

// atribuição dos valores
nome = "Dimitri";
sobrenome = "Teixeira";
idade = 30;
nomeCompleto = nome + " " + sobrenome;

soma = idade + 10;
pessoa = nome + " " + soma;

// saída no html
document.getElementById("texto").innerHTML = pessoa;

let x = 10;

{ // escopo
    let x = 2;
}

/*
    var = 2;
    let 10;
    const = 10;
*/
document.getElementById("texto").innerHTML = x;