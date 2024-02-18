"use strict";

const whereAmI = (lat, lng) => {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((reponse) => {
      if (!reponse.ok)
        throw new Error(`Problem with geocoding ${reponse.status}`);
      return reponse.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`)
        .then((response) => {
          if (!response.ok)
            throw new Error(`Country not found (${response.status})`);
          return response.json();
        })
        .then((data) => renderCountry(data[0]));
    })
    .catch((err) => {
      console.error(`${err.message} 🎇🎆🎈`);
    });
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
