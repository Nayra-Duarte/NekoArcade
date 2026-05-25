window.onload = function(){
    const intro = document.getElementById("hero");

    setTimeout(()=>{
        intro.classList.add("efeito-out");

        setTimeout(()=>{
            intro.style.display="none";
            content.classList.remove("hidden");
            content.classList.add("efeito-in");
        },500)
    },1500)
}

const produtosHome = [
    {
        nome: 'Funko Pop Star Wars 818 The Mandalorian e Grogu',
        categoria: 'Funko',
        imagem: "./src/assets/img/funko-grogu-mandalorian.png",
        descricao:'Funko Pop exclusivo do Mandalorian com Grogu inspirado em Star Wars.',
        preco: 269.90
    },
    {
        nome: "Headset Gamer RGB",
        categoria: "Periféricos",
        imagem: "./src/assets/img/headset.png",
        descricao: "Headset com áudio imersivo, iluminação RGB e microfone integrado.",
        preco: 349.90
    },

    {
        nome: "Nintendo Switch 2",
        categoria: "Consoles",
        imagem: "./src/assets/img/nintendo-switch2.png",
        descricao: "Nova geração do console da Nintendo com gráficos aprimorados e desempenho avançado.",
        preco: 4499.90
    },

    {
        nome: "Teclado Mecânico Neon",
        categoria: "Periféricos",
        imagem: "./src/assets/img/teclado-neon.png",
        descricao: "Teclado mecânico gamer com iluminação RGB e switches rápidos.",
        preco: 429.90
    },

    {
        nome: "Pelúcia Snorlax",
        categoria: "Colecionáveis",
        imagem: "./src/assets/img/pelucia-snorlax.png",
        descricao: "Pelúcia super macia do Snorlax perfeita para decorar setups gamers.",
        preco: 149.90
    },
    //cards a mais
    {
        nome: 'Funko Pop Star Wars 818 The Mandalorian e Grogu',
        categoria: 'Funko',
        imagem: "./src/assets/img/funko-grogu-mandalorian.png",
        descricao:'Funko Pop exclusivo do Mandalorian com Grogu inspirado em Star Wars.',
        preco: 269.90
    },
    {
        nome: "Headset Gamer RGB",
        categoria: "Periféricos",
        imagem: "./src/assets/img/headset.png",
        descricao: "Headset com áudio imersivo, iluminação RGB e microfone integrado.",
        preco: 349.90
    },

    {
        nome: "Nintendo Switch 2",
        categoria: "Consoles",
        imagem: "./src/assets/img/nintendo-switch2.png",
        descricao: "Nova geração do console da Nintendo com gráficos aprimorados e desempenho avançado.",
        preco: 4499.90
    },

    {
        nome: "Teclado Mecânico Neon",
        categoria: "Periféricos",
        imagem: "./src/assets/img/teclado-neon.png",
        descricao: "Teclado mecânico gamer com iluminação RGB e switches rápidos.",
        preco: 429.90
    },

    {
        nome: "Pelúcia Snorlax",
        categoria: "Colecionáveis",
        imagem: "./src/assets/img/pelucia-snorlax.png",
        descricao: "Pelúcia super macia do Snorlax perfeita para decorar setups gamers.",
        preco: 149.90
    }




]

const produtosDestaque = document.getElementById("produtos-destaque");
produtosHome.forEach((produtos) => {
    produtosDestaque.innerHTML += `
        <div class='card-home'>
            <h3>${produtos.nome}</h3>
            <img src='${produtos.imagem}' alt="${produtos.nome}">
            <p class='categoria-produto-home'>${produtos.categoria}</p>
            <p class='descricao-produto'>${produtos.descricao}</p>
            <h4>R$${produtos.preco}</h4>
            <button>COMPRAR</button>
        </div>
        `;
});