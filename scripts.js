var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

request.onload = function () {

  var data = JSON.parse(this.response);

 if (request.status >= 200 && request.status < 400) {
   data.forEach(country => {

     console.log(country);
     
     const card = document.createElement('div');
     card.setAttribute('class', 'card');

     const h1 = document.createElement('h1');
     h1.textContent = country.name;

     const h2 = document.createElement('h2');
     h2.textContent = 'Capital: ' + country.capital;

     const img = document.createElement('img');
     img.className = 'flag';
     img.src = country.flag;

     const h3 = document.createElement('h3');
     h3.textContent = 'Population ' + country.population;

     container.appendChild(card);

     card.appendChild(h1);
     card.appendChild(h2);
     card.appendChild(img);
     card.appendChild(h3);
   });
 } else {
   console.log('error');
 }
  }

// Send request
request.send()


const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);