let eventName = prompt('Please enter event name', ['meeting']);

function validateForm() {
  let n = document.getElementById('name').value;
  let t = document.getElementById('datetime').value;
  let p = document.getElementById('place').value;
  let isValid = /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/.test(t);

  if (n === '') {
    alert('Input all data');
    return false;
  }

  if (t === '') {
    alert('Input all data');
    return false;
  }

  if (isValid === false) {
    alert('Enter time in format hh:mm');
    return isValid;
  }

  if (p === '') {
    alert('Input all data');
    return false;
  }

  console.log(n + ' has a meeting today at ' + t + ' somewhere in ' + p);
  return false;
}

function getEuro(text) {
  let val = parseFloat(text);
  if (!isNaN(val) && `${val}` === text) {
    return val;
  }
  return 0;
}

function convertAmount() {
  let inputEuro = getEuro(prompt('Please input amount of Euro'));
  let inputDollar = getEuro(prompt('Please input amount of Dollar'));
  if (inputEuro > 0 && inputDollar > 0) {
    alert(inputEuro + ' euros are equal ' + (inputEuro * 33.52).toFixed(2) + 
    ' , ' + inputDollar + ' dollars are equal ' + (inputDollar * 100).toFixed(2));
  } 
}



