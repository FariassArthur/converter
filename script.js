const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)
console.log('pser')
const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e) {
	e.preventDefault(); //não deixa o submit recarregar a página

	if(!inputValue.value || inputValue.value < 0) {
		alert('Informe um valor correto');
		return;
	} else if(!selectedCurrency.value) {
		alert('Escolha uma moeda');
		return;
	}

	converter();
};

function converter() {
	if(selectedCurrency.value === 'eur') {
		valueConverted = inputValue.value / 5.53;
		result.innerHTML = valueFormatter('pt-BR', 'EUR');

		animatedResult();

	} else if(selectedCurrency.value === 'dol') {
		valueConverted = inputValue.value / 5.04;
		result.innerHTML = valueFormatter('en-US', 'USD');

		animatedResult
	}

	inputValue.value = '';
	selectedCurrency.value = '';
};

function valueFormatter(Locale, currency) {
	const value = valueConverted.toLocaleString(`${Locale}`, { style: 'currency', currency: `${currency}`});
	return value;
};

function animatedResult() {
	return result.animate([
		{transform: 'translateY(-150px)'},
		{ transform: 'translateY(0px)'},
	], { duration: 600 })
}