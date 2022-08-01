// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function square(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}

// console.log(square(4));

function logFunc(n) {
  if (n === 0) return 'Done';
  n = Math.floor(n / 2);
  console.log(n);
  return logFunc(n);
}

// console.log(logFunc(8));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr = [];
let start = 0;

let target = 99;

for (let i = 1; i <= 1024; i++) {
  arr.push(i);
}

let end = arr.length - 1;
// console.log(arr)

function binarySearch(arr, start, end, target) {
  if (start > end) return false;
  let midIndex = Math.floor((start + end) / 2);
  if (arr[midIndex] === target) return true;

  if (arr[midIndex] > target)
    return binarySearch(arr, start, midIndex - 1, target);
  else return binarySearch(arr, midIndex + 1, end, target);
}

// console.log(binarySearch(arr, start, end, target));

function nLogNFunc(n) {
  let y = n;
  while (n > 1) {
    n = Math.floor(n / 2);
    for (let i = 1; i <= y; i++) {
      console.log(i);
    }
  }
}

// nLogNFunc(4)

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex += 1;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }
  return resultArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}

let arrr = [12, 3, 16, 6, 5, 1];

let _arrr = ['Areae', 'zendo', 'cow', 'James', 'Ayoua', 'Belinda'];

// console.log(mergeSort(_arrr));

// console.log('Another', _arrr.sort());

function fib(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(4))

// O(n!)
function factorial(n) {
  // let sum = 1;
  if (n === 0) {
    console.log('****');
    return;
  }
  // let sum = 1;
  // for (let i = 1; i <= n; i++) {
  //   sum *= i;
  // }
  // return sum;

  for (let i = 1; i <= n; i++) {
    factorial(n - 1);
  }
}
// console.log(factorial(3));

function factorialArray(n) {
  // if(n===0) return 1

  function factoria(k) {
    return k * factoria(k - 1);
  }

  function _facto(l) {
    let s = 1;
    for (let i = 1; i <= l; i++) {
      s *= i;
    }
    return s;
  }
  console.log(n);
  console.log(n.map((p) => _facto(p)));

  // let num =1
  // n.map(d => {
  //   for(let i=1; i<=d; i++){
  //     num += i
  //   }
  //   console.log(num)
  // })
  // return num
}

console.log(factorialArray([2, 3, 5, 7, 8]));
