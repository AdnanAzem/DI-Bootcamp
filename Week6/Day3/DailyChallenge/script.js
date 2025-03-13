const API_KEY = 'aeaa1c4c7141d19cc82cb711'; 
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

// DOM Elements
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convertBtn');
const switchBtn = document.getElementById('switchBtn');
const resultDiv = document.getElementById('result');

// Fetch supported currencies and populate dropdowns
async function fetchCurrencies() {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/codes`);
    const data = await response.json();
    if (data.result === 'success') {
      const currencies = data.supported_codes;
      populateDropdown(fromCurrency, currencies);
      populateDropdown(toCurrency, currencies);
    } else {
      console.error('Error fetching currencies:', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function populateDropdown(dropdown, currencies) {
  currencies.forEach(([code, name]) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = `${code} - ${name}`;
    dropdown.appendChild(option);
  });
}

// Fetch conversion rate and calculate the result
async function fetchConversionRate(from, to, amount) {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/pair/${from}/${to}/${amount}`);
    const data = await response.json();
    if (data.result === 'success') {
      const convertedAmount = data.conversion_result;
      resultDiv.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
    } else {
      console.error('Error fetching conversion rate:', data);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Event listeners
convertBtn.addEventListener('click', () => {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }
  fetchConversionRate(from, to, amount);
});

switchBtn.addEventListener('click', () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;

  const amount = parseFloat(amountInput.value);
  if (!isNaN(amount) && amount > 0) {
    fetchConversionRate(fromCurrency.value, toCurrency.value, amount);
  }
});

// Initialize the app
fetchCurrencies();