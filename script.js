let listaPokemon = [
 
];
 
let divPrincipal = document.querySelector('body');
divPrincipal.className = 'divPrincipal';
 
let cabecalho = document.createElement('header');
cabecalho.className = 'cabecalho';
 
let logoPokemon = document.createElement('img');
logoPokemon.src ='https://logosmarcas.net/wp-content/uploads/2020/05/Pokemon-Logo.png';
logoPokemon.className = 'logo';
 
cabecalho.appendChild(logoPokemon);
document.body.appendChild(cabecalho);
 
let barraPesquisa = document.createElement('input');
barraPesquisa.className = 'barraPesquisa';
divPrincipal.appendChild(barraPesquisa);
 
let botaoPesquisa = document.createElement('button');
botaoPesquisa.className = 'botaoPesquisa';
botaoPesquisa.innerText = 'Buscar';
botaoPesquisa.onclick = filtroTabela;
divPrincipal.appendChild(botaoPesquisa);
 
function pokemon() {
    fetch('https://prof-poke-api.herokuapp.com/api/pokedex/')
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                data.forEach(function (element) {
                    listaPokemon.push(element);
                });
                divPrincipal.appendChild(criarTabela());
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}
 
pokemon();
 
function criarTabela(){
    let atualTabela = document.querySelector('table');
 
    if(atualTabela){
        atualTabela.remove();
    }
   
    const tabela = document.createElement('table');
    const linha = document.createElement('tr');
    const colunaImagem = document.createElement('th');
    const colunaNome = document.createElement('th');
    const botaoPesquisa = document.createElement('th');
 
    colunaNome.innerText = 'Imagem';
    botaoPesquisa.innerText = 'Nome';
 
    tabela.appendChild(linha);
    linha.appendChild(colunaImagem);
    linha.appendChild(colunaNome);
    linha.appendChild(botaoPesquisa);
 
    listaPokemon.forEach(function (element) {
        const linhaTabela = dadosTabela(
            element.id,
            element.name,
            element.url_icon,
            element.url_icon_2
            );
 
        tabela.appendChild(linhaTabela);
        }
    )
        return tabela;
}
 
function dadosTabela(id,name,url_icon, url_icon_2) {
    const linha = document.createElement('tr');
    const colunaImagem = document.createElement('td');
    const colunaNome = document.createElement('td');
    const button = document.createElement('td');
    const botaoPesquisa = document.createElement('button');
    const linkBotao = document.createElement('a');
    const imgPokemon = document.createElement('img');
 
    linkBotao.innerText = 'Conferir Dados';
    linkBotao.href = './Pokemon/index.html?'+id;
 
    imgPokemon.src = url_icon;
    colunaNome.innerText = name;

    imgPokemon.onerror = function () {
        imgPokemon.src = url_icon_2;
    }
 
    imgPokemon.className = 'imagemPokemon';

    colunaImagem.appendChild(imgPokemon);
    button.appendChild(botaoPesquisa);
    botaoPesquisa.appendChild(linkBotao);
    linha.appendChild(button);
    linha.appendChild(colunaImagem);  
    linha.appendChild(colunaNome);  
    linha.appendChild(botaoPesquisa);
 
    return linha;
}
 

function filtroTabela() {
    let filtro = listaPokemon.filter(function (element) {
        return element.name.startsWith(barraPesquisa.value);
    });
    criarTabelaFiltro(filtro);
}
 
function criarTabelaFiltro(filtro){
    let atualTabela = document.querySelector('table');
 
    if(atualTabela){
        atualTabela.remove();
    }

    const tabela = document.createElement('table');
    const linha = document.createElement('tr');
    const colunaImagem = document.createElement('th');
    const colunaNome = document.createElement('th');
    const botaoPesquisa = document.createElement('th');
 
    colunaNome.innerText = 'Imagem';
    botaoPesquisa.innerText = 'Nome';
 
    tabela.appendChild(linha);
    linha.appendChild(colunaImagem);
    linha.appendChild(colunaNome);  
    linha.appendChild(botaoPesquisa);
 
    filtro.forEach(function (element) {
        const linhaTabela = dadosTabela(
            element.id,
            element.name,
            element.url_icon,
            element.url_icon_2
            );
 
        tabela.appendChild(linhaTabela);
        }
    )
       
    divPrincipal.appendChild(tabela);
       
    return tabela;
}

