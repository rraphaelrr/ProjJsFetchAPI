const informacoesCliente = [
    {
        cpf: 66809433023,
        nome: "Jairo"
    },
    {
        cpf: 66809433023,
        nome: "Monica"
    }
]

const bodyTable = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome) => {
    const linha = document.createElement('tr');
    const contLini = `
        <td>${cpf}</td>
        <td>${nome}</td>`;

    linha.innerHTML = contLini;

    return linha;

}

informacoesCliente.forEach(indice => {
    bodyTable.appendChild(exibeCliente(indice.cpf, indice.nome));
})