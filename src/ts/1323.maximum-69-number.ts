import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1323 lang=typescript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
function maximum69Number(num: number): number {
  return +String(num).replace("6", "9");
}
// @lc code=end

expect(maximum69Number(9669)).toBe(9969);
expect(maximum69Number(9996)).toBe(9999);
expect(maximum69Number(9999)).toBe(9999);

/**
 * Accepted
 * 153/153 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 57.32 % of typescript submissions (55.2 MB)
 */
