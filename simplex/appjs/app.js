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

let v= new Array()
let r= new Array()

function gerar(variaveis, restricoes) {
  v.push(variaveis)
  r.push(restricoes)  
  console.log(v, r)
}