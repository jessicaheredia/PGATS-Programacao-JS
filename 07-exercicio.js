/**Contador de Satisfação de passeio
 * Crie um script que avise quando o Dog ja passeou o suficiente.
 * Para saber, vamos considerar que ele se sentirá satisfeito somente a partir de 5 voltas na quadra.
 * 
 * Use a estrutura de repetição while;
 * Exiba:
 * Qual o numero da volta atual
 * Quando o dog estiver satisfeito
 * 
 * Extra: transforme a logica em uma função (da forma que conseguir)
 */


function verificaSatisfacao(){
let voltasAteFicarSatisfeito = 5
let quantidadeVoltasAtual = 1

while(quantidadeVoltasAtual <= voltasAteFicarSatisfeito){
    console.log(`Essa é a volta ${quantidadeVoltasAtual}`)
    quantidadeVoltasAtual++

}
console.log("Dog já esta satisfeito com o passeio.")
}

verificaSatisfacao()
 