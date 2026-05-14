import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2048 lang=typescript
 *
 * [2048] Next Greater Numerically Balanced Number
 */

// @lc code=start
function nextBeautifulNumber(n: number): number {
  const sarr = Array.from(String(n), Number);
  const len = sarr.length;
  let idx = 0;
}
// @lc code=end

expect(nextBeautifulNumber(1)).toBe(22);
expect(nextBeautifulNumber(1000)).toBe(1333);
expect(nextBeautifulNumber(3000)).toBe(3133);
