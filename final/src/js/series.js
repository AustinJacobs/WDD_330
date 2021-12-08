
import {
    config
} from "./config.js";

const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const searchedSeriesDiv = document.getElementById("searched-series");
const seriesDiv = document.getElementById("all-series");
let searchButton = document.getElementById("search-button-series");
const searchedTitles = document.getElementById("searched-titles-tv");

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
    }
    fetchSearchedSeries();
})

async function fetchSeries() {
    let page = 1;
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
}
fetchSeries();

function renderSingleShow(tv) {
    if (tv.poster_path != null) {
        return (
            `
            <div>
                <img src="${config.image_base_url + tv.poster_path}" class="featured" alt=${tv.name}>
                <p class="title-centered">${tv.name}</p>
            </div>
            `
        )
    }
}