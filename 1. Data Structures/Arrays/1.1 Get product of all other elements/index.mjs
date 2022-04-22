// 1.1 Get product of all other elements
// Given an array of integers, return a new array such that each element at index i of
// the new array is the product of all the numbers in the original array except the one
// at i.
// For example, if our input was [ 1, 2, 3, 4, 5], the expected output would be [ 120,
// 60, 40, 30, 24]. Ifourinputwas [3, 2, 1],theexpectedoutputwouldbe [2, 3, 6].

import assert from "assert";

function getProductDivision(arr) {
  let newArr = [];
  let total = arr.reduce((prevValue, currentValue) => {
    return prevValue * currentValue;
  }, 1);
  for (let i = 0; i < arr.length; i++) {
    newArr.push(total / arr[i]);
  }
  return newArr;
}

function getProductWithOutDivision(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(
      arr.reduce((prevValue, currentValue, index) => {
        if (index != i) {
          return prevValue * currentValue;
        }
        return prevValue;
      }, 1)
    );
  }
  return newArr;
}

assert.deepEqual(
  getProductWithOutDivision([1, 2, 3, 4, 5]),
  [120, 60, 40, 30, 24]
);
assert.deepEqual(getProductWithOutDivision([3, 2, 1]), [2, 3, 6]);
assert.deepEqual(getProductDivision([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
assert.deepEqual(getProductDivision([3, 2, 1]), [2, 3, 6]);
