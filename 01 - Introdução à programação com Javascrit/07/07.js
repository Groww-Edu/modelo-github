/* RESPOSTA AQUI 👇 */

/* Questão 01 

Crie uma função que receba um array, some todos os valores do array e retorne se é par ou impar

Exemplo:
calculaPar([1])
retorno: impar

calculaPar([0,1,5])
retorno: par
*/

function calculaPar(lista){
    var i = 0; //Variavel incrementadora que vai de 0 ~ tamanho da lista
    var soma = 0; //Variavel auxiliar para somar todos os itens,
    while(i < lista.length){
        soma = soma + lista[i]
        i++        
    }
    if( soma%2 === 0){
        console.log(`Número par ${soma}`)
    }else{
        console.log(`Número Impar ${soma}`)
    }
}



function calculaParporfavo (lista) {
var soma = 0
    //console.log ($listanumeros){
    for (var i = 0; i < lista.length; i++){
    soma = lista[i] + soma
        if (soma%2==0) {
            console.log(`A soma dos valores é par e igual a ${soma}`)}
        else {
            console.log(`a soma dos valores é impar e igual a ${soma}` )}
            
    }
}              

function calcVetor (){
    let calculaNumeros = [];

    //Estrutura for para preencher um array
    for (let i = 0; i < 10; i++){
        calculaNumeros.push(prompt(`Informe o ${i+1}º número:`));
    }

    let soma = 0; 
    for (let i = 0; i < calculaNumeros.length; i++){
         soma += parseInt(calculaNumeros[i]);
    }

    if (soma % 2 === 0) {
        return alert(`Par`);
    } else {
        if (soma % 2 !== 0){
            return alert(`Ímpar`);
        }
    }
}


/* Questão 02

Crie uma função que receba dois números e calcule o primeiro elevado ao segundo

exemplo:
CalculaExpoente(2,2)
saída: 4
CalculaExpoente(5,5)
Saída: 3125

*/

/* Questão 03
Crie uma função que receba um numero e calcule todos os quadrados de todos os números inteiros até ele.
exemplo:
CalculeSomaQuadrado(3) -> 14
Processamento: 1² + 2² + 3² = 14
*/

/* Questão 04
Cria uma função que receba um array e calcule qual a maior sequencia de inteiros que existe nele.
Exemplo:
calculaSequencia([3,4,1,2]) ->2
(3->4) e (1->2)
calculaSequencia([10,11,12,9,10]) -> 3
(10->11->12)
*/