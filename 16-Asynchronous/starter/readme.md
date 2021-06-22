# Async

- Request-response model | client <-> web server
- Client Server Architecture

#### Client

1. https//www.google.com/applications/maps

   - https// = Protocol
   - www.google.com = domain
   - applications/maps = ressources

2. Client -> DNS
   - Domain name -> Ip adress

#### Ajax call

const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
request.send();

request.addEventListener('load', function () {
const [data] = JSON.parse(this.responseText);
console.log(data);

#### fetch('url')

1. const awaitFunction = await function () {
   try{
   const response = await fetch('url');
   const data = await response.json();
   if (!response.ok) throw new Error ('Problem loading url');
   } catch (err) {console.error(err.statut, err.message)}
   }

# New Code

1. let currentImg;

- createImage('img/img-1.jpg')
  .then(img => {
  currentImg = img;
  return wait(2);
  })
  .then(() => {
  currentImg.style.display = 'none';
  return createImage('img/img-2.jpg');
  })
  .then(img => {
  currentImg = img;
  return wait(2);
  })
  .then(() => {
  currentImg.style.display = 'none';
  return createImage('img/img-3.jpg');
  })
  .catch(err => console.log(err, err.message));

//////////////////

2. const loadNPause = async function () {
   try {
   // img 1
   let img = await createImage('img/img-1.jpg');
   // if (!img.ok) throw new Error(err => console.error('pic1', err.message));
   await wait(2);
   img.style.display = 'none';
   // img 2
   img = await createImage('img/img-2.jpg');
   // if (!img.ok) throw new Error(err => console.error('pic2', err.message));
   await wait(2);
   img.style.display = 'none';
   // pic3
   img = await createImage('img/img-3.jpg');
   // if (!img.ok) throw new Error(err => console.error('pic1', err.message));
   await wait(2);
   } catch (err) {
   console.log(err.message);
   }
   };

// loadNPause();

3.  const loadAll = async function (imgArr) {
    try {
    let arrPromise = imgArr.map(async img => await createImage(img));
    let array = await Promise.all(arrPromise);
    console.log(array);
    array.forEach(arr => arr.classList.add('parallel'));
    } catch (err) {
    console.log(err.message);
    }
    };

        loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
