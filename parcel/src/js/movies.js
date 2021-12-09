import {
    config
} from "./config.js";

const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const searchedMoviesDiv = document.getElementById("searched-movies");
const moviesDiv = document.getElementById("all-movies");
let searchButton = document.getElementById("search-button-movies");
const searchedTitles = document.getElementById("searched-titles");
let page = 1;

function topScroll() {
    let backToTop = document.querySelector(".back-top");

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    }

    backToTop.addEventListener('click', function toTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}

searchButton.addEventListener("click", function () {
    let userQuery = document.getElementById("title_input").value;

    let searchURL = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${userQuery}&include_adult=false`

    async function fetchSearchedMovies() {
        let data = []
        try {
            const response = await fetch(searchURL)
            const responseData = await response.json()
            data = responseData.results
            console.log(data);
        } catch (error) {
            console.log(error)
        }

        searchedTitles.style.display = "block";
        searchedMoviesDiv.innerHTML = data.map(movie => renderSingleMovie(movie)).join("")
    }
    fetchSearchedMovies();
})

async function fetchMovies(page = 1) {
    let allMoviesUrl = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    let data = []
    try {
        const response = await fetch(allMoviesUrl)
        const responseData = await response.json()
        data = responseData
        console.log(data);
    } catch (error) {
        console.log(error)
    }

    moviesDiv.innerHTML = data.results.map(movie => renderSingleMovie(movie)).join("")

    const lessButton = document.querySelector(".prev-content");
    lessButton.style.display = "none";
    if (data.page > 1) {
        lessButton.style.display = "block";
        lessButton.addEventListener("click", function () {
            page--;
            fetchMovies(page = page)
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    }

    const moreButton = document.querySelector(".next-content");
    moreButton.addEventListener("click", function () {
        page++;
        fetchMovies(page = page)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}


function renderSingleMovie(movie) {
    if (movie.poster_path != null) {
        return (
            `
            <div id="${movie.id}" class="media-div">
                <img src="${config.image_base_url + movie.poster_path}" class="featured" alt=${movie.title}>
                <p class="title-centered">${movie.title}</p>
            </div>
            `
        )
    }
}
topScroll()
fetchMovies()

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    document.querySelectorAll('.media-div').forEach(item => {
        item.addEventListener('click', e => {
            let x = e.target.getAttribute("id");
            console.log(x);
        })
    })
});