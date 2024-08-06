var banners = ["./img/pheonix.png","./img/cypheranimado.png"];
var bannerAtual = 0; 
function trocaBanner(){
bannerAtual = (bannerAtual + 1) % 2;
document.querySelector('#destaques img').src =
banners[bannerAtual];
}

setInterval(trocaBanner, 3000);

