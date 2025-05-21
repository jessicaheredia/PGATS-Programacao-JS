/**
 * Controle de petiscos
 * Crie um script que receba uma quantidade de petiscos e de 1 por vez até o dog estiver satisfeito.
 * Use a estrutura de repetição for contado.
 * 
 * Exiba:
 * Cada vez que um petisco for entregue
 * Quando o dog estiver satisfeito ( que é quando terminar os petiscos)
 * 
 *  Extra: transforme a logica em uma função (da forma que conseguir)
 */

const quantidadeDePetiscoDisponivel = 5

for (let petisco = 1; petisco <= quantidadeDePetiscoDisponivel; petisco++){
    console.log(`Dando o petisco ${petisco} para o dog.`)
   
}
console.log(`Satisfeito, chega de petiscos por hoje.`)

console.log(`-----------------------------`)

const alimentarDog = (quantidadeDePetisco) => {
    for(let i = 1; i<= quantidadeDePetisco; i++) {
        console.log(i <= quantidadeDePetisco ? `Ganhei ${i} petisco(s). Quero mais!` : 'Agora estou satisfeito!')
    }
}
alimentarDog(4)