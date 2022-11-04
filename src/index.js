import './css/styles.css';
import { fetchFilms } from "./fetchFilms";
import { fetchFilmsPopular } from "./fetchFilmsPopular";
import { fetchFilmId } from "./fetchFilmId"
import debounce from "lodash.debounce"
import { Notify } from 'notiflix/build/notiflix-notify-aio';


// const countryListEl = document.querySelector('.country-list');
// const countryInfoEl = document.querySelector('.country-info');

const inputBtnEl = document.querySelector(".search-form__btn")
const inputEl = document.querySelector(".search-form__input")
const formEl = document.querySelector(".search-form")
const galleryEl = document.querySelector(".gallery")
const modalBtnEL = document.querySelector(".modal-button")
const backdropEl = document.querySelector(".backdrop")
const modalEl =document.querySelectorAll(".modalEl")


console.log("formEl", formEl[0]);
console.log("Hi");

// inputBtnEl.addEventListener('click', onFilm)
galleryEl.addEventListener('click', onFilmFromId)
modalBtnEL.addEventListener('click', onClouseModal)

let page=1;
let arrFilms;
let id;
let arrFilmId =[];

function onClouseModal(el) {
  backdropEl.classList.add("is-hidden")
  // backdropEl.classList.remove("is-hidden")
}

fetchFilmsPopular(page).then(response => {
    console.log("response 1", response);
    console.log("response.results 1", response.results);
    arrFilms=response.results;
    console.log("arrFilms 1", arrFilms);

    const imgMarkUp = createMarkup(response.results);
    galleryEl.insertAdjacentHTML('beforeend', imgMarkUp);
} ) 

function onFilmFromId(evt){
  evt.preventDefault();

  backdropEl.classList.remove("is-hidden");

  console.log("id film", evt.target.id);
  id=evt.target.id;
 

  fetchFilmId(page,id).then(respons => {
    console.log("respons_film 2", respons);

    // const MarkUpFilmId = createMarkupFilm(respons)

    // console.log("MarkUpFilmId 2", MarkUpFilmId);
    arrFilmId =[respons]
    console.log("respons-[]-2");
    return
    // const MarkUpFilmId = createMarkupFilm(respons);
    // modalEl.insertAdjacentHTML('beforeend', film);
    // console.log("film", film)
  })

 }

    function createMarkup(arrFilms) {
        return arrFilms
          .map((arr) => {
             return `<div class="film-card">
            <a class="film-card__link link" href="">
              <img class="film-card__img"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face${arr.backdrop_path}"
                alt="${arr.original_title}"
                id="${arr.id}"
              />
              <div class="film-card__info">
                <p class="film-card__name film-card__item">
                  ${arr.original_title}
                </p>
                <p class="film-card__genre film-card__item">
                  Genre
                </p>
                <p class="film-card__year film-card__item">
                  ${arr.release_date}
                </p>
              </div>
            </a>
          </div>`;
          })
          .join('');
      }


      function createMarkupFilm(arr) {
        return arr.map(e =>{ 
           
       return `<div>Test ${e.title}</div>
       `}).join('')
   }

      // function createMarkupFilm(arr) {
      //   console.log("arr_film", arr.title);
     
      //     return (
      //       `<div>Test ${arr.title}</div>`)
      // //     return `<img class="film-card__img"
      // //        src="https://www.themoviedb.org/t/p/w220_and_h330_face${e.backdrop_path}"
      // //        alt="${e.original_title}"
      // //        id="${e.id}"
      // //      />
      // //        <h2>${e.title}</h2>
      // //        <ul>
      // //          <li class="list">Vote/Votes <span>${e.vote_average}/${e.vote_count}</span></li>
      // //          <li class="list">Popularity <span>${e.popularity}</span></li>
      // //          <li class="list">Original Title <span>${e.original_title}</span></li>
      // //        </ul>
      // //        <p>
      // //          <h3>About</h3>
      // //          <div>>${e.orerview}</div>
      // //        </p>`
      
      //     .join('');
             
      // }

  
    //   async function onFilm(evt) {
    //     evt.preventDefault();
    //     page=1;
    //     name = inputEl.value.trim()
    //     await fetchFilms(page)
    //     .then(data => {   
    //       console.log(data);
    //     } ) 
    //     // const marcup = createMarkup(data)
    //     // galleryEl.innerHTML = marcup;
    // }

















// let name = "";
// // const DEBOUNCE_DELAY = 300;
// // const inputEl = document.querySelector('input')

// // inputEl.addEventListener("input", debounce(onInput,DEBOUNCE_DELAY))

// function onInput(e) {
//     name = e.target.value.trim();
    
//     if(name === ""){
//         clearMarkup()
//         return
//     }
        
//     fetchFilms(name)
//     .then(data => { 
//         // console.log("data", data);
//         // console.log('data.length', data.length);
//         // console.log('name', name); 
 
//             if(data.length >= 10){
//                 clearMarkup()
//                 Notify.info('Too many matches found. Please enter a more specific name.');
//                 return
//             }
       
//             if(data.length > 1 & data.length < 10 ){
//                 clearMarkupInfo()
//                 const marcup = createMarkup(data)
//                 countryListEl.innerHTML = marcup;
//                 return
//             }
            
//             if(data.length === 1){ 
//                 countryListEl.innerHTML = '';
//                 const marcupInfo = createMarkupInfo(data);
//                 countryInfoEl.innerHTML = marcupInfo
//                 return
//            }     
     
//     })
//     .catch(err => clearMarkup())
//     }

// function  createMarkup(arr) {
//     console.log("arr.length", arr.length);
//     return arr.map(country => `<li>
//     <img src="${country.flags.svg}" alt="flags" class="flag" width = 20 >
//     <h2>${country.name.common}</h2>
//     </li>`).join('')
// }

// function createMarkupInfo(arr) {
//      return arr.map(country =>{ 
//         const language = Object.values(country.languages)
//     return `<li>
//     <img src="${country.flags.svg}" alt="flags" class="flag" width = 30 >
//     <h2 class ="title-info">${country.name.common}</h2>
//     <ul>
//     <li><span class ="info">capital:</span> ${country.capital}</li>
//     <li><span class ="info">population:</span> ${country.population}</li>
//     <li><span class ="info">languages:</span> ${language}</li>
//     </ul>
//     </li>
//     `}).join('')
// }


// function clearMarkup() {
//     countryListEl.innerHTML = '';
//     countryInfoEl.innerHTML = '';
// }

// function clearMarkupInfo() {
//     countryInfoEl.innerHTML = '';
// }

