class Mensagem{
    constructor(nome,sobrenome,email,telefone,comentario){
        this.id = Math.floor(Math.random() * 10000);
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.telefone = telefone;
        this.comentario = comentario;
    }

    
}

var mensagens = [];
if (JSON.parse(localStorage.getItem("mensagem"))){
    mensagens = JSON.parse(localStorage.getItem("mensagem"));
}else{
    var mensagens = [];
}

function salvar_form(){
    const nome = document.getElementById('form_contato_nome').value;
    const sobrenome = document.getElementById('form_contato_sobrenome').value;
    const email = document.getElementById('form_contato_email').value;
    const telefone = document.getElementById('form_contato_telefone').value;
    const comentario = document.getElementById('form_contato_comentario').value;
    
    const mensagem = new Mensagem(nome,sobrenome,email,telefone,comentario);

    mensagens.push(mensagem);

    localStorage.setItem("mensagem",JSON.stringify(mensagens));
}


