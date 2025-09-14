import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3541 lang=typescript
 *
 * [3541] Find Most Frequent Vowel and Consonant
 */

// @lc code=start
function maxFreqSum(s: string): number {
  const letters = new Array<number>(26).fill(0);
  const { max } = Math;
  const [A, E, I, O, U] = Buffer.from("aeiou");
  var vowel = 0;
  var consonant = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    const p = s.codePointAt(i)!;

    switch (p) {
      case A:
      case E:
      case I:
      case O:
      case U:
        vowel = max(vowel, ++letters[p - 97]!);
        break;
      default:
        consonant = max(consonant, ++letters[p - 97]!);
    }
  }
  return vowel + consonant;
}
// @lc code=end

expect(maxFreqSum("successes")).toBe(6);
expect(maxFreqSum("aeiaeia")).toBe(3);

/**
 * Accepted
 * 812/812 cases passed (7 ms)
 * Your runtime beats 46.3 % of typescript submissions
 * Your memory usage beats 50 % of typescript submissions (58.7 MB)
 */
