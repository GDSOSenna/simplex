/*Entrada 
Inserir quantas variáveis de decisão possui o problema
Inserir número de restrições

Objetivo
Criar as restrições baseada na quantidade indicada pelo usuário
Criar o número de variáveis somando a quantidade de variáveis de decisão com o número de restrições (trabalhando elas em forma de array)

Saída
Tabela com variáveis
Solução ótima do problema de otimização linear
*/

function criarArrays() {
  // Obter valores dos inputs
  var numVar = parseInt(document.getElementById("variaveis").value);
  var numRes = parseInt(document.getElementById("restricoes").value);

  // Criar array de variáveis
  var arrayVariaveis = [];
  for (var i = 1; i <= numVar; i++) {
    arrayVariaveis.push(i);
  }

  // Criar array de restrições
  var arrayRestricoes = [];
  for (var j = 1; j <= numRes; j++) {
    var restricao = [];
    for (var k = 1; k <= numVar; k++) {
      restricao.push(k);
    }
    arrayRestricoes.push(restricao);
  }

  // Exibir os arrays no console (apenas para verificação)
  console.log(arrayVariaveis);
  console.log(arrayRestricoes);
}