import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASEURL = 'https://api.themoviedb.org/3/search/';

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
const KEY = "5b1449ced393d87bc0a1ea0f9fb4bc3e";


export function fetchFilms(page) {
    const arrFilms = fetch(`${BASEURL}/movie?api_key=${KEY}&page=${page}`)
return arrFilms.then( response=> {
if(!response.ok){
    Notify.failure('Oops, there is no film')
    throw new Error(response.status)
}
console.log(response);
return response.json();
})
}
