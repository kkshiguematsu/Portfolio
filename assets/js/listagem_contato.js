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
                <td class="mensagem_id" style="display:none;">${mensagem.id}</td>
                <td scope="row">${mensagem.nome}</td>
                <td>${mensagem.sobrenome}</td>
                <td>${mensagem.email}</td>
                <td>${mensagem.telefone}</td>
                <td>${mensagem.comentario}</td>
                <td><i class="fa-solid fa-trash" onClick="deletar_linha()"></i></td>
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
    var mensagens = JSON.parse(localStorage.getItem("mensagem"));

    // $(document).on("click",".fa-trash",function(){
        // var id = $(this).closest("tr").find(".mensagem_id").text();
        
    for(var i=0; i<mensagens.length ;i++){
        if(mensagens[i].id == id){
            if(i==0){
                mensagens.shift(); 
                var mensagens_new = mensagens;
                break;
            }
            if(i == mensagens.length-1){
                mensagens.pop(); 
                var mensagens_new = mensagens;
                break;
            }
            var mensagens_new = mensagens.splice(0,i);
            mensagens_new.pop();
            mensagens_new = mensagens_new.concat(mensagens);
            console.log(mensagens_new);
            break;
        }
    }
        
        localStorage.setItem("mensagem",JSON.stringify(mensagens_new));
        window.location.reload();
    // });
}