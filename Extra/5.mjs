// Good morning! Here's your coding interview problem for today.

// This problem was asked by Jane Street.

// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:

// def cons(a, b):
//     def pair(f):
//         return f(a, b)
//     return pair
// Implement car and cdr.

import assert from "assert";
function cons(a, b) {
  function pair(f) {
    return f(a, b);
  }
  return pair;
}

function car(fn) {
  return fn((a) => {
    return a;
  });
}

function cdr(fn) {
  return fn((_, b) => {
    return b;
  });
}

assert.equal(car(cons(3, 4)), 3);
assert.equal(cdr(cons(3, 4)), 4);
