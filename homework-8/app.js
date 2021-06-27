function reverseNumber(num) {
  return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
}
console.log(reverseNumber(12345))
console.log(reverseNumber(-56789))

function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
  return arr;
}

forEach([2, 5, 8], function (el) {
  console.log(el);
})

function map(arr, func) {
  let newArr = [];
  forEach(arr, function (el) {
    newArr.push(func(el));
  });
  return newArr;
}

console.log(map([2, 5, 8], function (elToChange) {
  return elToChange + 3;
})); // returns [5, 8, 11]
console.log(map([1, 2, 3, 4, 5], function (elToChange) { 
  return elToChange * 2; 
})); // returns [2, 4, 6, 8, 10]

function filter(arr, func) {
  let filterArr = [];
  forEach(arr, function (el) {
    if (func(el)) {
      filterArr.push(el);
    }
  });
  return filterArr;
}

console.log(filter([2, 5, 1, 3, 8, 6], function (el) { 
  return el > 3 
})) // returns [5, 8, 6]
console.log(filter([1, 4, 6, 7, 8, 10], function (el) { 
  return el % 2 === 0 
})) //returns [4, 6, 8, 10]

function getAdultAppleLovers(data) {
  let peopleArr = filter(data, function (el) {
    return el.age > 18 && el.favoriteFruit === 'apple';
  });

  return map(peopleArr, function (el) {
    return el.name;
  });
}

const data = [{
  '_id': '5b5e3168c6bf40f2c1235cd6',
  'index': 0,
  'age': 39,
  'eyeColor': 'green',
  'name': 'Stein',
  'favoriteFruit': 'apple'
}, {
  '_id': '5b5e3168e328c0d72e4f27d8',
  'index': 1,
  'age': 38,
  'eyeColor': 'blue',
  'name': 'Cortez',
  'favoriteFruit': 'strawberry'
},
{
  '_id': '5b5e3168cc79132b631c666a',
  'index': 2,
  'age': 2,
  'eyeColor': 'blue',
  'name': 'Suzette',
  'favoriteFruit': 'apple'
}, {
  '_id': '5b5e31682093adcc6cd0dde5',
  'index': 3,
  'age': 17,
  'eyeColor': 'green',
  'name': 'Weiss',
  'favoriteFruit': 'banana'
}
];
console.log(getAdultAppleLovers(data));

function getKeys(obj) {
  let keysArr = [];
  for (let key in obj) {
    keysArr.push(key);
  }
  return keysArr;
}
console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

function getValues(obj) {
  let valueArr = [];
  for (let key in obj) {
    valueArr.push(obj[key]);
  }
  return valueArr;
}
console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }))

function showFormattedDate(dateObj) {
  return `It's ${dateObj.getDate()} of ${dateObj.getMonth()}, ${dateObj.getFullYear()}`;
}
console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));


