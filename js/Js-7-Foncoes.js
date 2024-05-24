//Funções Important!

/* 
Oque são?
Bloco de código que pode ser executado e reutilizado.
Valores podem ser passados por uma função e a mesma retorna outro valor.
*/

function areaQuadrado(lado) {
    return lado * lado;
}
areaQuadrado(10); //100
areaQuadrado(5); //25
areaQuadrado(6); //36
//------------------------------------------------------------
//Parâmetros e Argumentos
/* 
- Ao criar uma função, você pode definir parâmetros
- Ao executar uma função, você pode passar parâmetros.
*/
//Peso e altura são parametros da funcao

function imc(peso , altura) {
    const imc = peso / (altura ** 2);

    return imc;
}

imc(80, 1.80); //Argumentos
imc(60, 1.70); //Argumentos
//------------------------------------------------------------
//Executando a função
function carroFavorito(carro) {
    if(carro === 'Fusca') {
        console.log('você gosta de fusca');
    } else if(carro === 'Gol') {
        console.log('você gosta de gol');
    } else {
        console.log('Você gosta de nenhum dos carros');
    }
}

carroFavorito()
//Retorna 'Você gosta de nenhum dos carros'
// Agora se eu coloca 'Fusca' ou 'Gol' Retorna que gosta
