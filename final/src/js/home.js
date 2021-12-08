
import {
    getTopMovies,
    getTrendingTv,
    getTrendingMovies,
} from "./api.js";
import {
    config
} from "./config.js";

const trendingMovieDiv = document.getElementById("trending-movies");
const topMovieDiv = document.getElementById("top-movies");
const trendingTvDiv = document.getElementById("trending-tv");

export async function renderTrendingMovies() {
    const movies = await getTrendingMovies()
    console.log(movies)
    trendingMovieDiv.innerHTML = movies.map(movie => renderSingleMovie(movie)).join("")
}

export async function renderTopMovies() {
    const movies = await getTopMovies()
    console.log(movies)
    topMovieDiv.innerHTML = movies.map(movie => renderSingleMovie(movie)).join("")
}

export async function renderTrendingTv() {
    const shows = await getTrendingTv()
    console.log(shows)
    trendingTvDiv.innerHTML = shows.map(tv => renderSingleShow(tv)).join("")
}

function renderSingleMovie(movie) {
    if (movie.poster_path != null) {
        return (
            `
            <div>
                <img src="${config.image_base_url + movie.poster_path}" class="featured" alt=${movie.title}>
            </div>
            `
        )
    }
}

function renderSingleShow(tv) {
    if (tv.poster_path != null) {
        return (
            `
            <div>
                <img src="${config.image_base_url + tv.poster_path}" class="featured" alt=${tv.name}>
            </div>
            `
        )
    }
}