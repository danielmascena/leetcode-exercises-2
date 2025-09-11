import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2785 lang=typescript
 *
 * [2785] Sort Vowels in a String
 */

// @lc code=start
function sortVowels(s: string): string {
  const vowelArr: string[] = [];
  const vowelIdx: number[] = [];
  const vowelsRegex = /[aeiou]/i;
  const t = Array.from(s);

  for (let i = 0, len = s.length; i < len; i++) {
    const c = s.charAt(i);

    if (vowelsRegex.test(c)) {
      vowelArr.push(c);
      vowelIdx.push(i);
    }
  }
  vowelArr.sort();

  for (let i = 0, len = vowelArr.length; i < len; i++) {
    const vwl = vowelArr[i]!;
    const idx = vowelIdx[i]!;
    t[idx] = vwl;
  }
  return t.join("");
}
// @lc code=end

expect(sortVowels("lEetcOde")).toEqual("lEOtcede");
expect(sortVowels("lYmpH")).toEqual("lYmpH");

/**
 * Accepted
 * 2216/2216 cases passed (73 ms)
 * Your runtime beats 50 % of typescript submissions
 * Your memory usage beats 16.67 % of typescript submissions (77.3 MB)
 */
