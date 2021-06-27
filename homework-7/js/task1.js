function getNumber(text) {
  let val = parseInt(text);
  if (isNaN(val) && `${val}` === text) {
    return val;
  }
  return 0;
}

function getFloat(text) {
  let val = parseFloat(text);
  if (isNaN(val) && `${val}` === text) {
    return val;
  }
  return 0;
}

let amountMoney = getFloat(prompt('Please enter your initial amount of money'));
if (amountMoney >= 1000) {
  document.getElementById('money').innerHTML =
    'Initial amount: ' + amountMoney;
} else {
  alert('Invalid input data');
}

let numberYears = getNumber(prompt('Please enter your number of years'));
if (numberYears >= 1) {
  document.getElementById('years').innerHTML =
    'Number of years: ' + numberYears;
} else {
  alert('Invalid input data');
}

let percentageYear = getFloat(prompt('Please enter your percentage of a year'));
if (percentageYear > 0 && percentageYear <= 100) {
  document.getElementById('percentages').innerHTML =
    'Percentage of year: ' + percentageYear;
} else {
  alert('Invalid input data');
}

let totalAmount = Math.pow(1 + percentageYear / 100, numberYears) * amountMoney;
document.getElementById('total-amount').innerHTML =
  'Total amount: ' + totalAmount.toFixed(2);

let totalProfit = totalAmount - amountMoney;
document.getElementById('total-profit').innerHTML =
  'Total profit: ' + totalProfit.toFixed(2);

alert(`Total profit: ${totalProfit.toFixed(2)} \nTotal amount: ${totalAmount.toFixed(2)}`);
