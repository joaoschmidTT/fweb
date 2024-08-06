function validaBusca(){
    if(document.querySelector('#inputlupa').value == ''){
   alert("não pode ter deixado em branco a busca");
   return false;
    } 
}

document.querySelector('#form-busca').onsubmit = function() {
    return validaBusca();

}