//Condifional If e Else

let carroVendido = true;

if(carroVendido) {
    console.log('O carro foi vendido!');
} else {
    console.log('O carro não foi vendido');
}
//Retorna o 'O carro foi vendido!'
//------------------------------------------------------------
//Condificonal Else if

let possuiCarro = true;
let possuiMoto = false;

if(possuiMoto) {
    console.log('Ele tem uma moto');
} else if(possuiCarro) {
    console.log('Ele tem um carro');
} else {
    console.log('Ele não tem nenhum veículo!!!')
}
//Retorna "Ele tem um carro";
//------------------------------------------------------------
//Valores Falsos            //Valores Verdadeiros

if(false);                  if(true);

if(0);                      if(1);

if(NaN);                    if(' ');

if(null);                   if('Luiz');

if(undefined);              if(-20);

if('');                     if({});
//------------------------------------------------------------
//Operador lógico de Negação !

if(!true);      //false
if(!1);         //false
if(!'');        //true
if(!undefined); //true
if(!!' ');      //true
if(!!'');       //false
//------------------------------------------------------------
//Operador de comparação

if(20 > 5);     //true
if(5 > 20);     //false
if(20 < 10);    //false
if(20 <= 20);   //true
if(20 >= 21);   //false
if(20 == '20'); //true
if(20 == 20);   //true
if(20 === '20');//(Tipo)false
if(20 == 20);   //true
if(20 >= 21);   //false
if(20 != 25);   //true
if(20 != '20'); //false
if(20 !== '20');//true
//------------------------------------------------------------
//Operador Lógico && (And)

true & true;    //true

true && false;  //false

false && true;  //false
//------------------------------------------------------------
//Operador Lógico || (Or)

true || true;   //true
true || false;  //true
false || true;  //true
false || false; //false
//------------------------------------------------------------
