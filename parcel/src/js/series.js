import {
    config,
} from "./config.js";

const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const searchedSeriesDiv = document.getElementById("searched-series");
const seriesDiv = document.getElementById("all-series");
let searchButton = document.getElementById("search-button-series");
const searchedTitles = document.getElementById("searched-titles-tv");
let page = 1;

function topScroll() {
    let backToTop = document.querySelector(".back-top");

    // When the user scrolls down 20px from the top of the document, show the button
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

    backToTop.addEventListener('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
}

searchButton.addEventListener("click", function () {
    let userQuery = document.getElementById("title_input_tv").value;

    let searchURL = `${BASE_URL}search/tv?api_key=${API_KEY}&language=en-US&query=${userQuery}&include_adult=false`

    async function fetchSearchedSeries() {
        let data = []
        try {
            const response = await fetch(searchURL)
            const responseData = await response.json()
            data = responseData.results
            console.log(data);
        } catch (error) {

        }
        searchedTitles.style.display = "block";
        searchedSeriesDiv.innerHTML = data.map(tv => renderSingleShow(tv)).join("")

        document.querySelectorAll('.media-div').forEach(item => {
            item.addEventListener('click', e => {
                let x = e.currentTarget.getAttribute("id");
                console.log(x);
            })
        })
    }
    fetchSearchedSeries();
})

async function fetchSeries() {
    let allSeriesUrl = `${BASE_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
    let data = []
    try {
        const response = await fetch(allSeriesUrl)
        const responseData = await response.json()
        data = responseData
        console.log(data);
    } catch (error) {

    }
    seriesDiv.innerHTML = data.results.map(tv => renderSingleShow(tv)).join("")

    document.querySelectorAll('.media-div').forEach(item => {
        item.addEventListener('click', e => {
            let x = e.currentTarget.getAttribute("id");
            console.log(x);
        })
    })

    const lessButton = document.querySelector(".prev-content");
    lessButton.style.display = "none";
    if (data.page > 1) {
        lessButton.style.display = "block";
        lessButton.addEventListener("click", function () {
            page--;
            fetchSeries(page = page)
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    }

    const moreButton = document.querySelector(".next-content");
    moreButton.addEventListener("click", function () {
        page++;
        fetchSeries(page = page)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
}

function renderSingleShow(tv) {
    if (tv.poster_path != null) {
        return (
            `
            <div id="${tv.id}" class="media-div">
                <img src="${config.image_base_url + tv.poster_path}" class="featured" alt=${tv.name}>
                <p class="title-centered">${tv.name}</p>
            </div>
            `
        )
    }
}

topScroll()
fetchSeries();