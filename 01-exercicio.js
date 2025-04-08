const dogLet = [{nome:"Lelê",
    idade: 3,
    peso: "4.5",
    raca: "shiTZu",
    adotado: true,
    }]

    console.log(`Nome: ${dogLet[0].nome} \nRaça: ${ dogLet[0].raca.slice(0, 1).toUpperCase()}${dogLet[0].raca.slice(1).toLowerCase()}\nPeso: ${dogLet[0].peso}`);