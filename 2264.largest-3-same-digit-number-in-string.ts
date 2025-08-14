import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2264 lang=typescript
 *
 * [2264] Largest 3-Same-Digit Number in String
 */

// @lc code=start
function largestGoodInteger(num: string): string {
  for (let v = 9; v >= 0; v--) {
    const tg = `${v}`.repeat(3);
    if (num.includes(tg)) {
      return tg;
    }
  }
  return "";
}
// @lc code=end

expect(largestGoodInteger("6777133339")).toBe("777");
expect(largestGoodInteger("2300019")).toBe("000");
expect(largestGoodInteger("42352338")).toBe("");

/**
 * Accepted
 * 141/141 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 100 % of typescript submissions (53.9 MB)
 */
