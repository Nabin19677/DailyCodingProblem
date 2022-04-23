// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
import assert from "assert";
// O(n)
function isSum(arr, k) {
  let al = arr.length;
  let i = 0;
  let j = 0;
  let cont = true;
  while (cont) {
    if (i >= al) {
      i = 0;
      ++j;
    }
    if (arr[i] + arr[j] == k) {
      return true;
    }
    if (i + 1 == al && j + 1 == al) {
      cont = false;
    }
    i++;
  }
  return false;
}

// O(n^2)
// function isSum(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == k) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

assert(isSum([10, 15, 3, 7], 17));
