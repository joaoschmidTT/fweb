let textValue = '';

function addNumber(Number) {
    textValue += Number;
    updateText();

}

function addOperetor(Oparator) {
    textValue += Oparator;
    updateText();

}

function addDecimal() {
    textValue += '.';
    updateText();

}

function cleartext() {
    textValue = '';
    updateText();
}

function updateText() {
    document.querySelector('#display').value = textValue;
}

function calculate() {
    textValue = eval(textValue);
    updateText();
}

function deltext() {
    textValue = textValue.slice(0, -1);
    updateText();

}