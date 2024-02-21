
async function fetchCurrencyRates() {
  try {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await response.json();
    return data.rates;
  } catch (error) {
    console.error("Error fetching currency rates:", error);
    return null;
  }
}

async function populateCurrencyOptions() {
  const rates = await fetchCurrencyRates();
  if (rates) {
    const baseCurrencySelect = document.getElementById("baseCurrency");
    const targetCurrencySelect = document.getElementById("targetCurrency");
    
    for (const currency in rates) {
      // Retrieve currency symbol from an API or local mapping
      const currencySymbol = await fetchCurrencySymbol(currency);
      const option1 = new Option(`${currencySymbol} (${currency})`, currency);
      const option2 = new Option(`${currencySymbol} (${currency})`, currency);
      baseCurrencySelect.add(option1);
      targetCurrencySelect.add(option2);
    }
  }
}

const fetchCurrencySymbol = async (currency) => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/currency/${currency}`);
    const data = await response.json();
    return data[0]?.currencies[currency]?.symbol || "";
  } catch (error) {
    console.error("Error fetching currency symbol:", error);
    return "";
  }
};

async function convertCurrency() {
  const amountInput = document.getElementById("amount");
  const baseCurrencySelect = document.getElementById("baseCurrency");
  const targetCurrencySelect = document.getElementById("targetCurrency");
  const convertedAmountParagraph = document.getElementById("convertedAmount");
  const conversionDateParagraph = document.getElementById("conversionDate");

  const amount = parseFloat(amountInput.value);
  const baseCurrency = baseCurrencySelect.value;
  const targetCurrency = targetCurrencySelect.value;

  const rates = await fetchCurrencyRates();
  if (rates) {
    const conversionRate = rates[targetCurrency] / rates[baseCurrency];
    const convertedAmount = amount * conversionRate;

    convertedAmountParagraph.textContent = `${amount.toFixed(2)} ${baseCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
    conversionDateParagraph.textContent = `Conversion Date: ${new Date().toLocaleString()}`;  

  }
}
 
 
function resetConverter() {
  document.getElementById("amount").value = "";
  document.getElementById("baseCurrency").selectedIndex = 0;
  document.getElementById("targetCurrency").selectedIndex = 0;
  document.getElementById("convertedAmount").textContent = "";
  document.getElementById("conversionDate").textContent = "";
} 

document.addEventListener("DOMContentLoaded", () => {
  populateCurrencyOptions();
  document.getElementById("convertButton").addEventListener("click", convertCurrency);
  document.getElementById("resetButton").addEventListener("click", resetConverter); 
});