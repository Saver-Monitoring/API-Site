function validarSessao() {
    aguardar();

    var login = sessionStorage.LOGIN_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var h1Titulo = document.getElementById("h1_titulo");

    if (login != "null" && nome != null) {
        window.alert(`Seja bem-vindo, ${nome}!`);
        h1Titulo.innerHTML = `${login}`;

        finalizarAguardar();
    } else {
        window.location = "login.html";
    }
}

function sair() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "login.html";
}