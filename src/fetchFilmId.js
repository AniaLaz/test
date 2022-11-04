import { Notify } from 'notiflix/build/notiflix-notify-aio';
const BASEURL = 'https://api.themoviedb.org/3/';

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
const KEY = "5b1449ced393d87bc0a1ea0f9fb4bc3e";


export function fetchFilmId(page,movie_id) {
    const arrFilms = fetch(`${BASEURL}/movie/${movie_id}?api_key=${KEY}&page=${page}`)
return arrFilms.then( response=> {
if(!response.ok){
    Notify.failure('Oops, there is no film')
    throw new Error(response.status)
}
console.log(response);
return response.json();
})
}