const imagem = document.querySelector('#imgpokemon');
const nomepokemon = document.querySelector('#nomepokemon')
const pesopokemon = document.querySelector('#peso')


const AudioP = document.querySelector('#musica');
const inputRange = document.querySelector('#input-range');
const buttonPlay = document.querySelector('#play');

const tipo1 = document.querySelector('#tipo1')
const tipo2 = document.querySelector('#tipo2')

const alturapokeon = document.querySelector('#altura')
const numeropokemon = document.querySelector('#numero')
const botao1 = document.querySelector('#btn1')
const botao2 = document.querySelector('#btn2')
const contador = '';
const audiopokemon = document.querySelector('#som-pokemon')
const input = document.querySelector('#input-name')
const form = document.querySelector('.busca')
const quilos =  0.453592


let idpokemon = 1;

const fetchpokemon = async (pokemon) => {
    const Apiresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await Apiresponse.json();
    return data;
}


const showPokemon = async (pokemon) => {
    const datapokemon = await fetchpokemon(pokemon);
    idpokemon = datapokemon.id;
    imagem.src = datapokemon.sprites.front_default;
    nomepokemon.innerHTML = datapokemon.name;
    pesopokemon.innerHTML = datapokemon.weight;
    
    
    

    tipo1.innerHTML = datapokemon.types[0].type.name;

    if(datapokemon.types.length>1){
        tipo2.innerHTML = datapokemon.types[1].type.name;
    }else
    tipo2.innerHTML = '';


    alturapokeon.innerHTML = datapokemon.height;
    numeropokemon.innerHTML = datapokemon.id;
    audiopokemon.src = datapokemon.cries.legacy;

}






botao1.addEventListener("click", () => {
    if (idpokemon > 1) {
        idpokemon -= 1;
        showPokemon(idpokemon);
    }
});

botao2.addEventListener("click", () => {


    idpokemon += 1;
    showPokemon(idpokemon);

});


input.addEventListener("input", () => {
    idpokemon = toString(input.value);

});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    showPokemon(input.value.toLowerCase());
}
)
showPokemon(idpokemon);


inputRange.addEventListener("input", () => { 
    AudioP.volume = inputRange.value;
});

buttonPlay.addEventListener("click", () => {
    AudioP.play();
});






