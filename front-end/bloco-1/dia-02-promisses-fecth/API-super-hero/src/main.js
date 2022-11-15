import Swal from 'sweetalert2';
import './style.css';
import { fillErrorMessage } from '../../microblogs/src/utils/updateUI';

const img = document.querySelector('#img');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

const errorAPI = 800;

async function getSuperHero() {
  const numberRandom = Math.round(Math.random() * errorAPI);
  const API_randomID = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${numberRandom}.json`

  const filtroAPI = await fetch(API_randomID)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
      })
    });

  console.log(filtroAPI);
  return filtroAPI;
}
getSuperHero();

button.addEventListener('click', async (event) => {
const superHero = await getSuperHero();
name.innerHTML = superHero.name;
img.src = superHero.images.sm;
})
