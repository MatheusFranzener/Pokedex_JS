let userPokemon = document.location.search;
userPokemon = userPokemon.replace('?', '');

let divPrincipal = document.querySelector('body');

pokemon(userPokemon);

function pokemon() {
    fetch('https://prof-poke-api.herokuapp.com/api/pokemon/'+userPokemon)
        .then(function (resultado) {
            resultado.json().then(function (data) {
                console.log('User Data:', data);
                nomePokemon(data);
                imagemPokemon(data);
                ataquePokemon(data);
                ataqueSPokemon(data);
                defesaPokemon(data);
                defesaSPokemon(data);
               
            });
        }).catch(function (erro) {
            console.log('erro:', erro);
        });
}

function nomePokemon(userPokemon){
    divNome = document.createElement('div');
    divNome.innerText = userPokemon.name;
    divPrincipal.appendChild(divNome);
}

function imagemPokemon(userPokemon){
    divImagem = document.createElement('img');
    divImagem.src = userPokemon.url_icon;
    divPrincipal.appendChild(divImagem);

    divImagem.onerror = function () {
        divImagem.src = userPokemon.url_icon_2;
    }
}

function ataquePokemon(userPokemon){
    divAtaque = document.createElement('div');
    divAtaque.innerText = userPokemon.atk;
    divPrincipal.appendChild(divAtaque);
}

function defesaPokemon(userPokemon){
    divDefesa = document.createElement('div');
    divDefesa.innerText = userPokemon.def;
    divPrincipal.appendChild(divDefesa);
}

function ataqueSPokemon(userPokemon){
    divAtaqueS = document.createElement('div');
    divAtaqueS.innerText = userPokemon.atks;
    divPrincipal.appendChild(divAtaqueS);
}

function defesaSPokemon(userPokemon){
    divDefesaS = document.createElement('div');
    divDefesaS.innerText = userPokemon.defs;
    divPrincipal.appendChild(divDefesaS);
}
