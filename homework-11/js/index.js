function visitLink(path) {
  let currentValue = localStorage.getItem(path)
    ? parseInt(localStorage.getItem(path))
    : 0;
  let newValue = currentValue + 1;
  localStorage.setItem(path, newValue);
}

function viewResults() {
  const btn = document.getElementsByClassName('btn-primary')[0];
  const div = document.createElement('div');
  div.insertAdjacentHTML(
    'beforeend',
    `<ul> 
	 <li>You visited Page1 ${localStorage.getItem('Page1')} times</li> 
	 <li>You visited Page2 ${localStorage.getItem('Page2')} times</li> 
	 <li>You visited Page3 ${localStorage.getItem('Page3')} times</li> 
	   </ul>`
  );

  btn.insertAdjacentHTML(
	  'afterEnd', div.outerHTML
  );

  localStorage.removeItem('Page1');
  localStorage.removeItem('Page2');
  localStorage.removeItem('Page3');
}
