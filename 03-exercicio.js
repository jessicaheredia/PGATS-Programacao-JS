/*
Hands-on
Validador de idade mínima para adoção
Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.
Use os operadores adequados e exiba:
Nome do dog
Idade
Se está apto ou não para adoção
Extra: aplique uma regra com operador lógico para permitir que se o cão for de pequeno porte, pode ser adotado independente da idade. 
*/

const cachorro = [
    {nome:"Aumigo",
    idade: 1,
    porte: 'grande'
    }
]
const idadeMinima = 2

const adocao = cachorro[0].idade >= idadeMinima || cachorro[0].porte === "pequeno"
              ? 'APTO para adoção'
              : 'Não APTO para adoção'

console.log("---------Aptidão para adoção---------")
console.log("Nome:", cachorro[0].nome)
console.log("Idade:", cachorro[0].idade)
console.log(adocao)