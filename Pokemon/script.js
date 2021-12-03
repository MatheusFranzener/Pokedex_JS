let userName = document.location.search;
userName = userName.replace('?', '');

let divPrincipal = document.querySelector('body');

pokemon(userName);

let divNome = document.createElement('div');
divNome.appendChild(nomePokemon);

function pokemon() {
    fetch('https://prof-poke-api.herokuapp.com/api/pokemon/'+userName)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                nomePokemon(data);
                imagemPokemon(data);
                ataquePokemon(data);
                defesaPokemon(data);
                ataqueSPokemon(data);
                defesaSPokemon(data);
               
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function nomePokemon(userName){
    divNome = document.createElement('div');
    divNome.innerText = userName.name;
    divPrincipal.appendChild(divNome);
}

function imagemPokemon(userName){
    divImagem = document.createElement('img');
    divImagem.src = userName.url_icon;
    divPrincipal.appendChild(divImagem);
}

function ataquePokemon(userName){
    divAtaque = document.createElement('div');
    divAtaque.innerText = userName.atk;
    divPrincipal.appendChild(divAtaque);
}

function defesaPokemon(userName){
    divDefesa = document.createElement('div');
    divDefesa.innerText = userName.def;
    divPrincipal.appendChild(divDefesa);
}

function ataqueSPokemon(userName){
    divAtaqueS = document.createElement('div');
    divAtaqueS.innerText = userName.atks;
    divPrincipal.appendChild(divAtaqueS);
}

function defesaSPokemon(userName){
    divDefesaS = document.createElement('div');
    divDefesaS.innerText = userName.defs;
    divPrincipal.appendChild(divDefesaS);
}



