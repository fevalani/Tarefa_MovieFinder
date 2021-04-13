
const promessa = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");
promessa.then(mostrarFilmes);

function mostrarFilmes(valor){
    const fundo = document.querySelector(".movies");
    
    for(let i = 0; i < valor.data.length;i++){
        const imagem = valor.data[i].imagem;
        const titulo = valor.data[i].titulo;
        const id = valor.data[i].id;
        fundo.innerHTML += `
            <div class="movie">
                <img src="${imagem}">
                <div class="title">${titulo}</div>
                <button onclick="comprar(${id})">
                    Comprar
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
            </div>
        `;
    }
}

function comprar(id){
    const site = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/' + id + '/ingresso';
    const envio = {};
    envio.nome = prompt("Digite seu nome: ");
    envio.quantidade = prompt("Digite a quantidade de assentos: ");

    const pagar = axios.post(site, envio);
    pagar.then(alerta);
    pagar.catch(avisos);

}

function alerta(){
    alert("Ingresso comprado com sucesso!!");
}

function avisos(){
    alert("Filme com ingressos esgotados!!");
}