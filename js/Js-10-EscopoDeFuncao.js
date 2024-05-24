function calcula() {
    var numero = 30;
    console.log(numero);
}

//Se eu criar a variavel dentro da Func, Não conseguirei acessar
console.log()

calcula();
//------------------------------------------------------------
if(true) {
    var numero = 30;
    console.log(numero);
}

//Com var a variavel vaza e você consegue acessar
console.log(numero);

//------------------------------------------------------------
if(true) {
    let numero = 30;
    console.log(numero);
}

//Com let a variavel não vaza e você não consegue acessar
console.log(numero);

//------------------------------------------------------------
//Com const o numero não se altera
const numero = 30;

numero = 20;

console.log(numero)