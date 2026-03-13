function fazerLogin(){

let usuario = document.getElementById("usuario").value;
let senha = document.getElementById("senha").value;

if(usuario === "admin" && senha === "1234"){
    
    window.location.href = "index.html";

}else{

    document.getElementById("erro").innerText = "Usuário ou senha inválidos";

}

}
function abrirCadastro(){

window.location.href = "cadastro.html";

}