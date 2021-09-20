function getInput() {
    let text = document.getElementById('user').value;

    document.getElementById('output').innerHTML = text;
}

function addNumber() {
    let number = parseInt(document.getElementById('number').value);
    
    let sum = number * (number + 1) / 2;

    document.getElementById('outputTwo').innerHTML = sum;
}

function addingMachine() {
    
}