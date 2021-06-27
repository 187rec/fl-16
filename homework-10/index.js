function isEquals(x, y) {
  return x === y;
}
// console.log(isEquals(4, 5));

function isBigger(x, y) {
  return x > y;
}
// console.log(isBigger(5, -1));

function storeNames() {
  return Array.from(arguments);
}
// console.log(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy'));

function getDifference(x, y) {
  return x - y >= 0 ? x - y : y - x;
}
// console.log(getDifference(5, 3)) // => 2
// console.log(getDifference(5, 8)) // => 3

function negativeCount(array) {
  return array.filter(value => value < 0).length;
}
// console.log(negativeCount([4, 3, 2, 9])) // => 0 
// console.log(negativeCount([0, -3, 5, 7])) // => 1

function letterCount(x, y) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i).toLowerCase() === y) {
      count += 1;
    }
  }
  return count;
}
// console.log(letterCount('MaRRrry', 'r')); // => 2  
// console.log(letterCount('Barny', 'y')); // => 1 
// console.log(letterCount('', 'z')); // => 0

function countPoints(array) {
  let c = 0;
  let threePoints = 3;
  for (let i = 0; i < array.length; i++) {
    let team = array[i].split(':');
    let x = parseInt(team[0]);
    let y = parseInt(team[1]);
    if (x > y) {
      c += threePoints;
    } else if (x === y) {
      c += 1;
    }
  }
  return c;
}
// console.log(countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100'])) // => 17

