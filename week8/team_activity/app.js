let page = 1;
console.log(page);

const previous = document.getElementById("prev");
const next = document.getElementById("next");


let url = `https://swapi.dev/api/starships/?page=${page}`;


fetch(url)
    .then((response) => {
        if (response.ok) {
            const jsonData = response.json();
            console.log(jsonData);
            return jsonData;

        }
        throw Error(response.statusText);
    })

    .then((responses) => {
        const shipList = document.getElementById("list");

        for (let i = 0; i < responses.results.length; i++) {
            const ship = document.createElement("li");
            ship.innerHTML = `<h2>${responses.results[i].name}</h2>`
            shipList.appendChild(ship);
        }
    })
    // .then( response => console.log(response) )
    .catch(error => console.log('There was an error!', error))