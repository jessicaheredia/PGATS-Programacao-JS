/**
 * Console API
 */

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([
    {
    fruta: "Laranja",
    quantidade: 2
    },
    {
    fruta: "Pera",
    quantidade: 3
    }
]
)

//informações que nao mudam
const nome = 'Loki'
const raca = 'SRD'
const sexo = 'Macho'

//informações que mudam
let idade = 5
let vacinado = true
let castrado = false
let tamanho = 'M'

const irmaos = [
    {
    nome: "Thor",
    idade: 2
    },
    {
    nome: "Hela",
    idade: 3
    }
]
console.table(irmaos)




/**
 * Tipos de dados - cadeia, inteiro, real, logito, vetor, matriz
 * (funções - leia e escreva)
 * 
 * cadeia: String
 * inteiro/real - Number
 * logico - Boolean
 * vetor/matriz - Array
 * 
 * Undefined
 * Null
 * BigInt - Number para numeros extremamento grandes;
 * Symbol - Identificador unico
 * 
 */

const turma = "02"

console.log("Aula 03 da Turma " + turma + " no Sabado dia 05 de Abril") // concatenação

console.log(`Aula 03 da Turma ${ turma} no Sabado dia 05 de Abril`) // interpolação