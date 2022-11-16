console.log("Olá, mundo!")

var nome = 'Raphaela'; 
let idade = 28; 
const possuiFaculdade = true; 

console.log(nome, idade, possuiFaculdade);

/* Evitam repetições. 

 DRY (Don't repeat yourself). */

var preco = 25;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log(precoTotal)

var sobrenome = 'Mesquita', cidade ='Rio'

console.log (nome + ' ' + sobrenome, cidade);

// Variáveis sem valor. 

var semDefinicao; 
// retorna undefined.


/* 

Nomes de variável iniciam com $, _ ou letras camel case.

Nomes inválidos: 

var function;
var 1possuiFaculdade; 
var #nome;


// Nomes válidos: 

var $selecionar; 
var _nome;
var possuiFaculdadeNoExterior;
*/

// Declarar variável: 



// console.log(nomeNaoDefinido); 
// retorna nome is not defined.

/* 
Hoisting: 
Variáveis são movidas para cima do código, mas o valor atribuído não.
*/

console.log(nomeDele);
var nomeDele = 'André';
// Retorna undefined. 

var profissao = 'Designer';
console.log(profissao);
// Retorna designer.

var comida;
var comida = 'Pizza';
console.log(comida);

/*
Mudar o valor atribuído: 
É possível mudar valores atribuídos com var e let, porém const é impossível.

*/

/*

let time ='Vasco';
var time = 'Flamengo';


console.log(time);

*\
