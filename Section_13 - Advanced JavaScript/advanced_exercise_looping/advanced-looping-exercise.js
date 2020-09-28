const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

// for in (use for objects) - properties
// not iterating, enumerating - an obj is enumerable when it allows us to see the properties
for (item in detailedBasket) {
  console.log(item);
}

// for of
// iterable - arrays, strings
for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let max = 0;
  let a = arr.length;
  for (i = 0; i < a; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
biggestNumberInArray(array);

function biggestNumberInArray2(arr) {
  let max = 0;
  arr.forEach(item => {
    if (max < item) {
      max = item
    }
  })
  return max;
}
biggestNumberInArray2(array2);

function biggestNumberInArray3(arr) {
  let max = 0;
  for (item of arr) {
    if (max < item) {
      max = item;
    }
  }
  return max;
}
biggestNumberInArray3(array3);

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  for (let item in basket) {
    if (basket[item] === lookingFor) {
      return `${lookingFor} is in your basket!`
    }
  }
  return 'That does not exist in your basket!'
}
checkBasket(amazonBasket, amazonBasket.floss)
