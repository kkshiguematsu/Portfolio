function carregar_tabela(){
    if (JSON.parse(localStorage.getItem("mensagem"))){
        mensagens = JSON.parse(localStorage.getItem("mensagem"));
    }else{
        var mensagens = [];
    }
    
    const table = document.getElementById("tabela_body");

    mensagens.forEach(mensagem => {
        var row = `
            <tr>
                <th scope="row">${mensagem.nome}</th>
                <th>${mensagem.sobrenome}</th>
                <th>${mensagem.email}</th>
                <th>${mensagem.telefone}</th>
                <th>${mensagem.comentario}</th>
                <th><i class="fa-solid fa-trash" onClick="deletar_linha()"></i></th>
            </tr>
        `
        table.innerHTML += row;
    });
}

function limpar_lista(){
    window.localStorage.clear();
    window.location.reload();
}

function deletar_linha(){

}