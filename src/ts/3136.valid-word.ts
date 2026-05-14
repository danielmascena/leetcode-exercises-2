/*
 * @lc app=leetcode id=3136 lang=typescript
 *
 * [3136] Valid Word
 */

// @lc code=start
function isValid(word: string): boolean {

  if (word.length < 3 || /[@#$]/.test(word)) {
    return false;
  }
  word = word.replaceAll(/[0-9]/g, '');
  const len = word.length;
  const len2 = word.replaceAll(/[aeiou]/gi, '').length;
  return len2 > 0 && len !== len2;

};
// @lc code=end

console.log(isValid("234Adas")); // true
console.log(isValid("b3")); // false
console.log(isValid("a3$e")); // false
console.log(isValid("3pp")); // false
console.log(isValid("8LSO")); // true
console.log(isValid("UuE6")); // false
console.log(isValid("AhI")); // true

/**
 * Accepted
 * 677/677 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 72.73 % of typescript submissions (57.2 MB)
 */