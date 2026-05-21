import { dados_das_noticias } from "./db.js";

let vetor_das_noticias = [];
const container_das_noticias = document.getElementById("noticias");
const opcao_noticia =document.getElementById("opcao_noticia");

opcao_noticia.addEventListener("click", (e) =>{
    alternarApresentacaoDasNoticias();
});

function alternarApresentacaoDasNoticias() {
    if(vetor_das_noticias.length == 0); {
        carregarNoticias();
        apresentarNoticias();
    } else {
        container_das_noticias.innerHTML = "";
        vetor_das_noticias = [];
    }
}

const carregar