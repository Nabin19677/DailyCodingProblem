// Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

import assert from "assert";

function allProduct(arr) {
  let prefix = [];
  let suffix = [];

  for (let i = 0; i < arr.length; i++) {
    if (prefix.length != 0) {
      prefix.push(prefix[i - 1] * arr[i]);
    } else {
      prefix.push(arr[i]);
    }
  }

  for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
    if (suffix.length != 0) {
      suffix.push(suffix[j - 1] * arr[i]);
    } else {
      suffix.push(arr[i]);
    }
  }

  suffix.reverse();

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      result.push(suffix[i + 1]);
    } else if (i == arr.length - 1) {
      result.push(prefix[i - 1]);
    } else {
      result.push(prefix[i - 1] * suffix[i + 1]);
    }
  }

  return result;
}

assert.deepEqual(allProduct([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
assert.deepEqual(allProduct([3, 2, 1]), [2, 3, 6]);
