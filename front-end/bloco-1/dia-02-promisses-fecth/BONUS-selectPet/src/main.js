const API_randomDog = 'https://dog.ceo/api/breeds/image/random';
const API_randomCat ='https://aws.random.cat/meow';
import './style.css';

const buttonDog = document.querySelector('#button-dog');
const buttonCat = document.querySelector('#button-cat');
const buttonSurprise = document.querySelector('#button-surprise');
const imgPet = document.querySelector('#img');

buttonDog.addEventListener('click', (event) => {
    fetch(API_randomDog)
    .then((response) => response.json())
    .then((data) => {
        const srcDog = data.message;
        imgPet.src = srcDog;
    })
})

buttonCat.addEventListener('click', (event) => {
    fetch(API_randomCat)
    .then((response) => response.json())
    .then((data) => {
        const srcCat = data.file;
        imgPet.src = srcCat;
    })
})
buttonSurprise.addEventListener('click', (event) => {
    Promise.any([
        fetch(API_randomDog),
        fetch(API_randomCat)
    ])
    .then((response) => response.json())
    .then((data) => {
        const petURL = data.message || data.file;
        imgPet.src = petURL;
    })
})
