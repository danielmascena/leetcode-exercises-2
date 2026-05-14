import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1935 lang=typescript
 *
 * [1935] Maximum Number of Words You Can Type
 */

// @lc code=start
function canBeTypedWords(text: string, brokenLetters: string): number {
  return text.split(" ").reduce((tow, word) => {
    for (const c of word) {
      if (brokenLetters.includes(c)) {
        return tow;
      }
    }
    return tow + 1;
  }, 0);
  //const bk = Array(26).fill(0);
  //var ans = 0;

  //for (const c of brokenLetters) {
  //  bk[c.codePointAt(0)! - 97] = 1;
  //}
  //main: for (const word of text.split(" ")) {
  //  for (const ascii of Buffer.from(word)) {
  //    if (bk[ascii - 97] === 1) {
  //      continue main;
  //    }
  //  }
  //  ans++;
  //}
  //return ans;
}
// @lc code=end

expect(canBeTypedWords("hello world", "ad")).toBe(1);
expect(canBeTypedWords("leet code", "lt")).toBe(1);
expect(canBeTypedWords("leet code", "e")).toBe(0);

/**
 * Accepted #1
 * 20/20 cases passed (5 ms)
 * Your runtime beats 36.36 % of typescript submissions
 * Your memory usage beats 18.18 % of typescript submissions (58.4 MB)
 */

/**
 * Accepted #2
 * 20/20 cases passed (12 ms)
 * Your runtime beats 9.09 % of typescript submissions
 * Your memory usage beats 9.09 % of typescript submissions (60.2 MB)
 */
