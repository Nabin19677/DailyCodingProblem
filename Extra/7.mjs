// Good morning! Here's your coding interview problem for today.

// This problem was asked by Facebook.

// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.
import assert from "assert";
function solution(str) {
  return count(str, str.length);
}

function count(str, len) {
  if (len == 0) {
    return 1;
  }
  let strLen = str.length - len;
  let res = count(str, len - 1);

  if (len >= 2 && parseInt(str.substring(strLen, strLen + 2)) < 27) {
    res += count(str, len - 2);
  }
  return res;
}

assert.equal(solution("111"), 3);
