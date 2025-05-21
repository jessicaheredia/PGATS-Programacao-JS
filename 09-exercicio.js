/**Entregador de brinquedos para os dogs
 * 
 * Dado que voce tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino
 * Crie um script que passe pela lista de brinquedos e entregue um por vez.
 * Exiba o nome de cada brinquedo que for entregue.
 * 
 * Use a estrutura de repetição forEach.
 * 
 * Extra: transforme a logica em uma função (da forma que conseguir)
 */

const i = 0
const listaDeBrinquedos = [
   'Bola',
    'Osso',
    'Corda',
    'Sino'
]

listaDeBrinquedos.forEach(brinquedo => {
console.log(`O brinquedo entregue foi o ${brinquedo}.`)
})
console.log('Todos os brinquedos foram entregues.')

console.log('-----------------------------------')

listaDeBrinquedos.forEach(function (brinquedo){
console.log(`O brinquedo entregue foi o ${brinquedo}.`)
})
console.log('Todos os brinquedos foram entregues.')

console.log('-----------------------------------')

function entregarBrinquedos(listaDeBrinquedos){
    listaDeBrinquedos.forEach((brinquedo, i) =>{
        console.log(`Entregando brinquedo ${i + 1}: ${brinquedo}`)
    })
}
entregarBrinquedos(listaDeBrinquedos)