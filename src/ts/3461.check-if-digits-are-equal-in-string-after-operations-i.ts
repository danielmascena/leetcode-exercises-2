import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3461 lang=typescript
 *
 * [3461] Check If Digits Are Equal in String After Operations I
 */

// @lc code=start
function hasSameDigits(s: string): boolean {
  const sarr = Array.from(s, Number);

  for (let len = s.length; len > 2; len--) {
    for (let i = 1; i < len; i++) {
      sarr[i - 1] = (sarr[i]! + sarr[i - 1]!) % 10;
    }
  }
  return sarr[0] === sarr[1];
}
// @lc code=end

expect(hasSameDigits("3902")).toBeTrue();
expect(hasSameDigits("34789")).toBeFalse();
expect(hasSameDigits("323")).toBeTrue;

/**
 * Accepted
 * 706/706 cases passed (3 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 96.55 % of typescript submissions (58 MB)
 */
