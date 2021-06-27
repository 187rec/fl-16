/* START TASK 1: Your code goes here */
const table = document.getElementsByTagName('table')[0];
table.onclick = function (event) {
  const el = event.target;

  if (el.className === 'special') {
    const blankItems = document.querySelectorAll('td:not(.blue):not(.yellow)');
    Array.from(blankItems).forEach(td => {
      td.className = 'yellow';
    });
  }

  el.className = 'yellow';

  const row = el.parentNode;
  if (el === row.children[0]) {
    if (!row.querySelectorAll('td.yellow').length) {
      Array.from(row.children).forEach(td => {
        td.className = 'blue';
      });

    }
    console.log(row);
  }

  console.log(event.target, row);
}
/* END TASK 1 */

/* START TASK 2: Your code goes here */

/* END TASK 2 */

/* START TASK 3: Your code goes here */

/* END TASK 3 */
