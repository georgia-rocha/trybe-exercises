import Swal from 'sweetalert2';
import './style.css' 

const searchButton = document.querySelector('.search-btn');
const coinInput = document.querySelector('#coin-input');
const coinsList = document.querySelector('.coins');


function fecthAPI(coin) {
	const url = `https://api.exchangerate.host/latest?base=${coin}`;
	return fetch(url)
	.then((response) => response.json())
	.then((data) => {
		if(data.base !== coin.toUpperCase()){
			throw new Error('moeda não encontrada')
		}
		return data.rates;
	})
}

function renderCoins(coins) {
	coinsList.innerHTML = '';
	const coinsArray = Object.entries(coins);
	console.log(coinsArray);

	coinsArray.forEach((coin) => {
		const [coinName, value] = coin;
		console.log(coinName);
		console.log(value);
		
		const li = document.createElement('li');
		li.textContent = `${coinName}: ${value}`;
		coinsList.appendChild(li)
	})
}

function handleSearch() {
	const coin = coinInput.value.toUpperCase();

	if(!coin){
		Swal.fire({
			icon: "error",
			title: 'Opssss...',
			text: 'Voce precisa digitar uma moeda'
		})
		return;
	}
	fecthAPI(coin)
	.then(renderCoins) //.then(console.log) já retorna data.rates
	.catch((error) => {
		Swal.fire({
			icon: "error",
			title: 'Opssss...',
			text: error.message
		})
	})
}

searchButton.addEventListener('click',handleSearch);
