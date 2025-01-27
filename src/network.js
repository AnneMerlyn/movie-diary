// import "dotenv/config";
require("dotenv").config();

const popularMoviePath = "https://api.themoviedb.org/3/movie/popular";
const searchPath = "https://api.themoviedb.org/3/search/movie";

const API_KEY = process.env.API_KEY;
const BEARER_TOKEN = process.env.BEARER_TOKEN;
console.log(process.env.API_KEY); // Should log your API key
console.log(process.env.BEARER_TOKEN); // Should log your bearer token

const pathKey = `?api_key=${API_KEY}`;

//fetching PopularMovies
export const fetchPopularMovies = async () => {
    try {
        console.log(process.env.API_KEY); // Should log your API key
        console.log(process.env.BEARER_TOKEN); // Should log your bearer token

        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        };

        const response = await fetch(
            `${popularMoviePath}${pathKey}?language=en-US&page=1`,
            options
        );
        if (!response.ok) {
            throw new Error("Error in fetching movies!");
        }
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(`${e} Error fetching popular movies`);
    }
};

//fetching searchFilm
export const searchFilm = async (query) => {
    try {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${BEARER_TOKEN}`,
            },
        };
        const response = await fetch(
            `${searchPath}${pathKey}&query=${encodeURIComponent(
                query
            )}&include_adult=false&language=en-US&page=1`,
            options
        );

        if (!response.ok) {
            throw new Error("Error in fetching movies!");
        }
        const data = response.json();
        return data;
    } catch (e) {
        console.log(`${e} Error searching movie`);
    }
};
