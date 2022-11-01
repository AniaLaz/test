import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASEURL = 'https://api.themoviedb.org/3/trending/';
const KEY = "5b1449ced393d87bc0a1ea0f9fb4bc3e";

// https://developers.themoviedb.org/3/trending/get-trending

export function fetchFilmsPopular(page) {
    const arrFilms = fetch(`${BASEURL}movie/week?api_key=${KEY}&page=${page}`)
return arrFilms.then( response=> {
if(!response.ok){
    Notify.failure('Oops, there is no film')
    throw new Error(response.status)
}
console.log(response);
return response.json();
})
}
