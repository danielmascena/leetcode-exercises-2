import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3227 lang=typescript
 *
 * [3227] Vowels Game in a String
 */

// @lc code=start
function doesAliceWin(s: string): boolean {
  const isVowels = (c: string) =>
    c === "a" || c === "e" || c === "i" || c === "o" || c === "u";
  var vowels = 0;

  for (const c of s) {
    if (isVowels(c)) {
      vowels++;
    }
  }
  return vowels > 0;
}
// @lc code=end

expect(doesAliceWin("leetcoder")).toBeTrue();
expect(doesAliceWin("bbcd")).toBeFalse();
expect(doesAliceWin("ifld")).toBeTrue();

/**
 * Accepted
 * 697/697 cases passed (15 ms)
 * Your runtime beats 77.78 % of typescript submissions
 * Your memory usage beats 55.56 % of typescript submissions (60.3 MB)
 */
