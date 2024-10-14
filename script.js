'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const countryFlag =
    data.flags?.svg ??
    'https://via.placeholder.com/320x240?text=No+Flag+Available'; // Valid fallback flag
  const countryName = data.name?.common ?? 'Unknown Country';

  // Ensure population is a valid number, with a fallback
  const population = data.population
    ? (+data.population / 1000000).toFixed(1)
    : 'Unknown Population';

  // Safely access language and currency with fallbacks
  const language = Object.values(data.languages ?? {})[0] ?? 'Unknown Language';
  const currency =
    Object.values(data.currencies ?? {})[0]?.name ?? 'Unknown Currency';

  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${countryFlag}" alt="Flag of ${countryName}" />
        <div class="country__data">
          <h3 class="country__name">${countryName}</h3>
          <p class="country__row"><span>👫</span>${population} million</p>
          <p class="country__row"><span>🗣️</span>${language}</p>
          <p class="country__row"><span>💰</span>${currency}</p>
        </div>
      </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////

// const getCountryAndNeighbour = function(country){
//     //Ajax call country 1
//     const request =new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     //console.log(request.responseText);
//     request.addEventListener('load',function(){
//    // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     //console.log(data);
//     // render country 1
//     renderCountry(data);
//     //Get neighbour country (2)
//     const neighbour = data.borders?.[0];
//     console.log('Neighbour Country Code:', neighbour); // Debugging for neighbor code
//     if(!neighbour)return;
//      //Ajax call country (2)
//      const request2 =new XMLHttpRequest();
//      request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
//      request2.send();
//      request2.addEventListener('load',function(){
//       // console.log(this.responseText);
//       const data2 = JSON.parse(this.responseText);
//     //    console.log(data2);
//    // console.log('Neighbour Country Data:', data2); // Debugging for the neighbor country

//     // If data2 is an array, access the first element (in case it's wrapped)
//     const neighborData = Array.isArray(data2) ? data2[0] : data2;

//     // Render the neighbor country with the 'neighbour' class
//     renderCountry(neighborData, 'neighbour');
//      });

//     });
// };
// getCountryAndNeighbour('jordan');
// getCountryAndNeighbour('palestine');

// const request =new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v3.1/name/jordan');
// console.log(request);
// const getCountryData = function(country){
//  fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
//     console.log(response);
//     return response.json();
//   }).then(function(data){
//     console.log(data);
//     renderCountry(data[0]);

//   });

// };
// getCountryData('jordan');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg}(${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then
//     (response => {
//       console.log(response);
//       if(!response.ok)
//         throw new Error(`Country not found (${response.status})`)
//         return response.json();

//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if(!neighbour)return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);

//     })
//     .then(response => {
//       if(!response.ok)
//         throw new Error(`neighbour not found (${response.status})`)
//       return response.json();
//     })
//     .then(data=>{
//       const neighborData = Array.isArray(data) ? data[0] : data;
//       renderCountry(neighborData,'neighbour');
//     }).catch(err=>{
//       renderError(`Something went wrong 🧨🧨🧨 ${err.message}. Try again!`)
//     }).finally(()=>{
//       countriesContainer.style.opacity = 1;
//     });

// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found!');

//       return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(data => {
//       const neighborData = Array.isArray(data) ? data[0] : data;
//       renderCountry(neighborData, 'neighbour');
//     })
//     .catch(err => {
//       renderError(`Something went wrong 🧨🧨🧨 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   btn.style.opacity = 0;
//   getCountryData('jordan');
// });
// getCountryData('australia');

// console.log('Test Start');
// setTimeout(()=>console.log('0 sec timer'),0);
// Promise.resolve('Resolved promise 1').then(res=>console.log(res));
// Promise.resolve('Resolved promise 2').then(res=>{
//  for(let i)
//   console.log(res);
// });

// console.log('Test end');
// const lotteryPromise= new Promise(function(resolve,reject){
//   console.log('Lotter draw is happening');
// setTimeout(function(){
//   if(Math.random() >= 0.5){
//     resolve('You WIN');
//   }else{
//     reject(new Error('You lost your money'));
//   }
// },2000);
// });
// lotteryPromise.then(res=>console.log(res)).catch(err=>console.error(err));

// // Promisifying setTimeout
// const wait = function(seconds){
// return new Promise(function(resolve){
// setTimeout(resolve,seconds * 1000);
// });
// };

// wait(1).then(()=>{
//   console.log('I second passed');
//   return wait(1);

// })
// .then(()=>{
//   console.log('2 second passed');
//   return wait(1);

// })
// .then(()=>{
//   console.log('3 second passed');
//   return wait(1);

// })

// .then(()=>  console.log('4 second passed'));

// Promise.resolve('abc').then(x=>console.log(x));
// Promise.reject(new Error('Problem!')).catch(x=>console.error(x));

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );
// console.log('Getting position');
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(position=>resolve(position),err=>reject(err));
//     //Another way
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then(pos=>console.log(pos));


//ُTODO here is also new coding and also coding challenge



// -----------------------------------------------
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(position=>resolve(position),err=>reject(err));
//     //Another way
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//  try {
//    const pos =await getPosition();
//    const {latitude:lat,longitude:lng} = pos.coords;
//    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//    if(!resGeo.ok) throw new Error('Problem getting location data');
//    const dataGeo = await resGeo.json();
//   //  console.log(dataGeo);
//   const res =  await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
//   if(!res.ok) throw new Error('Problem getting country');
//   const data = await res.json();
//   // console.log(data);
//   renderCountry(data[0]);
//   return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//  } catch (err) {
//   console.error(err);
//   renderError(`${err.message}`);
//   // Reject promise returned from async function
//   throw err;
//  }
// };
// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);
// // whereAmI().then(city=>console.log(`2: ${city}`)).catch(err=>console.error(`2: ${err.message}`)).finally(()=>console.log('3: Finished getting location'));

// //Another way
// (async function(){
// try {
//   const city = await whereAmI();
//   console.log(`2: ${city}`);
// } catch (err) {
//   console.error(`2: ${err.message}`)
// }
// console.log('3: Finished getting location');
// })();


// console.log('First');



// const get3Countries = async function(c1,c2,c3){
//   try {
//   //  const [data1] =  await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//   //  const [data2] =  await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//   //  const [data3] =  await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//   //  console.log(data1.capital,data2.capital,data3.capital);
//   const data = await Promise.all([
//     getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//     getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//     getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//    ]);
//    console.log(data.map(d=>d[0].capital));
//   } catch (error) {
//     console.error(error);
//   }
// };
// get3Countries('jordan','palestine','qatar');


// Promise.race

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),

  ]);
  console.log(res[0]);
})();

const timeout = function(sec){
  return new Promise(function(_,reject){
setTimeout(function(){
reject(new Error('Request took too long!'));
},sec * 1000);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/mexico`),
  timeout(5)
]).then(res => console.log(res[0])).catch(err=>console.log(err));

// Promise.allSettled

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.resolve('Error'),
  Promise.resolve('Another success'),

]).then(res=>console.log(res[0]));

Promise.all([
  Promise.resolve('Success'),
  Promise.resolve('Error'),
  Promise.resolve('Another success'),

]).then(res=>console.log(res[0])).catch(err=>console.log(err));

// Promise.any [ES2021]

Promise.any([
  Promise.resolve('Success'),
  Promise.resolve('Error'),
  Promise.resolve('Another success'),

]).then(res=>console.log(res[0])).catch(err=>console.log(err));


// Project channleg