/** Calculadora de ração diaria
 
Crie um script que receba o peso do dog em kg + estoque atual de ração em gramas. 
Calcule a quantidade diaria de ração com base na seguinte formula

Gramas por dia = Peso X 30 gramas

Exiba:
Nome do dog
Peso
Quantidade de ração recomendada por dia
Quantos dias o estoque atual vai durar
 */

const nome = "Mel"
const peso = 10
const estoque = 5000

const gramasPorDia = peso * 30
const duracaoEstoque = estoque / gramasPorDia

console.log(`Nome do dog: ${ nome }`)
console.log(`Peso: ${ peso }`)
console.log(`Gramas por dia: ${ gramasPorDia }`)
console.log(`O estoque vai durar ${ duracaoEstoque }`)

