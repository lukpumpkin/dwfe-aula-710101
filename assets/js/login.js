const email = "admin@email.com";
const senha = "1234";

function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformado = document.getElementById("senha").value;


    if (emailInformado === email) {
        alert("senha informada corretamnet");

        if (senhaInformado === senha) {
            alert("senha informada corretamente");
            window.location = "home.html";
        } else {
            alert("senha informada incorretamente!");

    } else {
            alert("email informado incorretamente!");

        }

    }
}