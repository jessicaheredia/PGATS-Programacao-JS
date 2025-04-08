const cachorro = [
    {nome:"   lElê ",
    idade: 3,
    peso: 4.5,
    raca: "Shitzu",
    adotado: true,
    }
]
    const nomeSemFormatar = cachorro[0].nome;
    const nome = nomeSemFormatar.trim();
    const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    const nomeUnico = nome.split(" ");
    const umNome = nomeUnico.length === 1;
    
    if(umNome){
        console.log("NOME VÁLIDO");
        console.log("Nome sem formatação: " + nomeSemFormatar);
        console.log("Nome formatado: " + nomeFormatado);
    }else{
        console.log("Nome Inválido")
    }