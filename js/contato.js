const AudioP = document.querySelector('#musica');

const inputRange = document.querySelector('#input-range');

const buttonPlay = document.querySelector('#play');

inputRange.addEventListener("input", () => { 
    AudioP.volume = inputRange.value;
});

buttonPlay.addEventListener("click", () => {
    AudioP.play();
});

$('.parallax-window').parallax({imageSrc: './img/goku.png'});