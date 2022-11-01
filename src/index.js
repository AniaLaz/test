import './css/styles.css';
import { fetchFilms } from "./fetchFilms";
import { fetchFilmsPopular } from "./fetchFilmsPopular";
import debounce from "lodash.debounce"
import { Notify } from 'notiflix/build/notiflix-notify-aio';


// const countryListEl = document.querySelector('.country-list');
// const countryInfoEl = document.querySelector('.country-info');

const inputBtnEl = document.querySelector(".search-form__btn")
const inputEl = document.querySelector(".search-form__input")
const formEl = document.querySelector(".search-form")
const galleryEl = document.querySelector(".gallery")

console.log("formEl", formEl[0]);
console.log("Hi");

inputBtnEl.addEventListener('click', onFilm)
let page=1;
let name;




fetchFilmsPopular(page).then(response => {
    console.log("response", response);
    console.log("response.results", response.results);
   

    const imgMarkUp = createMarkup(response.results);
    galleryEl.insertAdjacentHTML('beforeend', imgMarkUp);
} ) 

    function createMarkup(arrFilms) {
        return arrFilms
          .map((arr) => {
             return `<div class="film-card">
            <a class="film-card__link link" href="">
              <img class="film-card__img"
                src="https://www.themoviedb.org/t/p/w220_and_h330_face${arr.backdrop_path}"
                alt=""
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



      async function onFilm(evt) {
        evt.preventDefault();
        page=1;
        name = inputEl.value.trim()
        await fetchFilms(page)
        .then(data => {   
        } ) 
        // const marcup = createMarkup(data)
        // galleryEl.innerHTML = marcup;
    }

// function onPicture(e) {

//          await fetchPicture(name,page)
//           .then(data => {
//               totalHits = data.totalHits;
//               pageNow = totalHits/40;
//               console.log("pageNow",pageNow);
//               // page = 1;
//               observer.observe(guardEl)
//               dataLength = data.hits.length;
            
//           if (dataLength === 0){
//             galleryEl.innerHTML = "";
      
//               Notify.failure('Sorry, there are no images matching your search query. Please try again.');
//               return
//           }
//           else if (name === ""){
//             galleryEl.innerHTML = "";
      
//             return
//           }
//           else if (dataLength < 40){ 
//             Notify.info(`Hooray! We found ${totalHits} images.`);
//             const marcup = createMarkup(data)
//             galleryEl.innerHTML = marcup;
//             lightbox.refresh()
//             observer.unobserve(guardEl);
//             return
//           }
      
//           else{
//               const marcup = createMarkup(data)
//               galleryEl.innerHTML = marcup;
//               Notify.info(`Hooray! We found ${totalHits} images.`);
//               page +=1;
        
//               lightbox.refresh()
//               return}})
//           .catch(err => console.log(err))
//       }


















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

