let textValue = ''; //variavel zero

function addNumber(Number) {
    textValue += Number;          //criando uma funlao para que possa add numeros 
                                  //textvaleu sevre para armazeanar um string
    updateText();

}

function addOperetor(Oparator) {
    textValue += Oparator;             //basicamente a mesma coisa que antes soque com opertaor
    updateText();              

}

function addDecimal() {
    textValue += '.';                 //posbiblitando a criaçao de numeros quebrados
    updateText();

}

function cleartext() {
    textValue = '';                   //criando um negocio para apagar tudo
    updateText();
}

function updateText() {
    document.querySelector('#display').value = textValue;                   //salavdo e as e mostrado na barra de pesquisa
}

function calculate() {
    textValue = eval(textValue);              /*calcualando as coisas com eval*/
    updateText();
}

function deltext() {
    textValue = textValue.slice(0, -1);
    updateText();                               //diminuindo as trings com slice

}