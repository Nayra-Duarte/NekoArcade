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

const produtosPortifolio = [

    /*====================
        FUNKOS
    =====================*/

    {
        nome: "Funko Pop Star Wars 818 The Mandalorian e Grogu",
        categoria: "Funko",
        imagem: "../assets/img/funko-grogu-mandalorian.png",
        descricao: "Funko Pop exclusivo do Mandalorian com Grogu inspirado em Star Wars.",
        preco: 269.90
    },

    {
        nome: "Funko Pop Miles Morales",
        categoria: "Funko",
        imagem: "../assets/img/funko-miles.png",
        descricao: "Funko estilizado do Miles Morales inspirado no universo Spider-Verse.",
        preco: 219.90
    },

    {
        nome: "Funko Pop Naruto",
        categoria: "Funko",
        imagem: "../assets/img/funko-naruto.png",
        descricao: "Colecionável do Naruto Uzumaki em edição especial.",
        preco: 199.90
    },

    {
        nome: "Funko Pop Pikachu",
        categoria: "Funko",
        imagem: "../assets/img/funko-pikachu.png",
        descricao: "Funko Pop do Pikachu inspirado em Pokémon.",
        preco: 189.90
    },

    {
        nome: "Funko Pop Batman",
        categoria: "Funko",
        imagem: "../assets/img/funko-batman.png",
        descricao: "Versão clássica do Batman em Funko Pop.",
        preco: 229.90
    },



    /*====================
        CONSOLES
    =====================*/

    {
        nome: "Nintendo Switch 2",
        categoria: "Consoles",
        imagem: "../assets/img/nintendo-switch2.png",
        descricao: "Nova geração do console da Nintendo.",
        preco: 4499.90
    },

    {
        nome: "PlayStation 5",
        categoria: "Consoles",
        imagem: "../assets/img/ps5.png",
        descricao: "Console de nova geração da Sony.",
        preco: 4299.90
    },

    {
        nome: "Xbox Series X",
        categoria: "Consoles",
        imagem: "../assets/img/xbox-seriesx.png",
        descricao: "Performance extrema para jogos em 4K.",
        preco: 4099.90
    },

    {
        nome: "Nintendo Switch OLED",
        categoria: "Consoles",
        imagem: "../assets/img/switch-oled.png",
        descricao: "Versão OLED do Nintendo Switch.",
        preco: 2499.90
    },

    {
        nome: "PlayStation 4 Slim",
        categoria: "Consoles",
        imagem: "../assets/img/ps4.png",
        descricao: "Console clássico da Sony.",
        preco: 2399.90
    },



    /*====================
        PERIFÉRICOS
    =====================*/

    {
        nome: "Headset Gamer RGB",
        categoria: "Periféricos",
        imagem: "../assets/img/headset.png",
        descricao: "Headset gamer RGB com áudio imersivo.",
        preco: 349.90
    },

    {
        nome: "Teclado Mecânico Neon",
        categoria: "Periféricos",
        imagem: "../assets/img/teclado-neon.png",
        descricao: "Teclado mecânico RGB gamer.",
        preco: 429.90
    },

    {
        nome: "Mouse Gamer RGB",
        categoria: "Periféricos",
        imagem: "../assets/img/mouse-gamer.png",
        descricao: "Mouse gamer ergonômico com RGB.",
        preco: 199.90
    },

    {
        nome: "Controle PS5 DualSense",
        categoria: "Periféricos",
        imagem: "../assets/img/dualsense.png",
        descricao: "Controle oficial do PlayStation 5.",
        preco: 449.90
    },

    {
        nome: "Controle Xbox",
        categoria: "Periféricos",
        imagem: "../assets/img/controle-xbox.png",
        descricao: "Controle sem fio Xbox.",
        preco: 399.90
    },



    /*====================
        COLECIONÁVEIS
    =====================*/

    {
        nome: "Pelúcia Snorlax",
        categoria: "Colecionáveis",
        imagem: "../assets/img/pelucia-snorlax.png",
        descricao: "Pelúcia super macia do Snorlax.",
        preco: 149.90
    },

    {
        nome: "Pelúcia Kirby",
        categoria: "Colecionáveis",
        imagem: "../assets/img/pelucia-kirby.png",
        descricao: "Pelúcia inspirada no Kirby.",
        preco: 139.90
    },

    {
        nome: "Mini Arcade Retrô",
        categoria: "Colecionáveis",
        imagem: "../assets/img/mini-arcade.png",
        descricao: "Mini máquina arcade decorativa.",
        preco: 329.90
    },

    {
        nome: "Luminária Pokébola",
        categoria: "Colecionáveis",
        imagem: "../assets/img/pokebola-lamp.png",
        descricao: "Luminária geek inspirada em Pokémon.",
        preco: 119.90
    },

    {
        nome: "Action Figure Mario",
        categoria: "Colecionáveis",
        imagem: "../assets/img/action-mario.png",
        descricao: "Figure colecionável do Mario.",
        preco: 249.90
    }

]

const produtosPort = document.getElementById("produtos-portifolio");

function mostrarProdutos(categoria){
    produtosPort.innerHTML = "";
    const produtosFiltrados = categoria === "Todos"
        ? [...produtosPortifolio].sort(() => Math.random() - 0.5)
        : produtosPortifolio.filter((produto) => produto.categoria === categoria);
    produtosFiltrados.forEach((produto)=>{
        produtosPort.innerHTML += `
            <div class="card-portifolio">
                <h3>${produto.nome}</h3>
                <img src="${produto.imagem}" alt="${produto.nome}">
                <p class="categoria-produto-portifolio">${produto.categoria}</p>
                <p class="descricao-produto-portifolio">${produto.descricao}</p>
                <h4>R$${produto.preco}</h4>
                <button>COMPRAR</button>
            </div>`;
    });

}

mostrarProdutos("Todos");