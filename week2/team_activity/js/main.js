function getInput() {
    let text = document.getElementById('user').value;
    document.getElementById('output').innerHTML = text;
}

function addNumber() {
    let number = parseInt(document.getElementById('integer').value);

    let sum = number * (number + 1) / 2;

    if (number !== NaN) {
        document.getElementById('outputTwo').innerHTML = sum;
    }
}

function addingMachine() {
    let one = parseInt(document.getElementById("inputOne").value);
    let two = parseInt(document.getElementById("inputTwo").value);

    if ((one !== NaN) & (two !== NaN)) {
        let add = one + two;
        document.getElementById('outputThree').innerHTML = add;
    }
}