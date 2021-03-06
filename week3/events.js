const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event) {
    event.target.classList.toggle('highlight');
}

addEventListener('keydown', highlight);

addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
        console.log('Action canceled!');
    }
});

addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A Shifty Click!');
    }
});