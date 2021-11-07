// const previous = document.getElementById("prev");
// const next = document.getElementById("next");

// let url = `https://swapi.dev/api/starships/?page=1`;

// next.addEventListener("click", function () {
//     let url = `https://swapi.dev/api/starships/?page=2`;
// })

// fetch(url)
//     .then((response) => {
//         if (response.ok) {
//             const jsonData = response.json();
//             console.log(jsonData);
//             return jsonData;

//         }
//         throw Error(response.statusText);
//     })

//     .then((responses) => {
//         const shipList = document.getElementById("list");

//         for (let i = 0; i < responses.results.length; i++) {
//             const ship = document.createElement("li");
//             ship.innerHTML = `<h2>${responses.results[i].name}</h2>`
//             shipList.appendChild(ship);
//         }
//     })
//     // .then( response => console.log(response) )
//     .catch(error => console.log('There was an error!', error))

function getJSON(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function getShips(url) {
    return getJSON(url);
  }

  function renderShipList(ships, shipListElement) {
    const list = shipListElement.children[1];
    list.innerHTML = "";

    ships.forEach(function (ship) {
      let listItem = document.createElement("tr");
      listItem.innerHTML = `
          <td><a href="${ship.url}">${ship.name}</a></td>
          <td>${ship.length}</td>
          <td>${ship.crew}</td>
          `;
  
      listItem.addEventListener("click", function (event) {
        event.preventDefault();
        getShipDetails(ship.url);
      });
  

      list.appendChild(listItem);
    });
  }

  function renderShipDetails(shipData) {
    console.log(shipData);
  }
  
  function showShips(url = "https://swapi.dev/api/starships/") {
    getShips(url).then(function (data) {
      console.log(data);
      const results = data.results;

      const shipListElement = document.getElementById("shiplist");
      renderShipList(results, shipListElement);
  
      if (data.next) {
        const next = document.getElementById("next");
        
        next.ontouchend = () => {
          
          showShips(data.next);
        };
      }
      if (data.previous) {
        const prev = document.getElementById("prev");
  
        prev.ontouchend = () => {
          showShips(data.previous);
        };
      }
    });
  }
  
  function getShipDetails(url) {
    
    getShips(url).then(function (data) {
      renderShipDetails(data);
      
    });
  }
  showShips();