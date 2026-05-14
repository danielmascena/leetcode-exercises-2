import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2303 lang=typescript
 *
 * [2303] Calculate Amount Paid in Taxes
 */

// @lc code=start
function calculateTax(brackets: number[][], income: number): number {
  const { min } = Math;
  let ans = 0;
  let prev = 0;

  for (let i = 0, n = brackets.length; i < n && income > 0; i++) {
    const [v, p] = brackets[i];
    const z = min(income, v - prev);
    ans += z * (p / 100);
    income -= z;
    prev = v;
  }
  return ans;
}
// @lc code=end

expect(
  calculateTax(
    [
      [3, 50],
      [7, 10],
      [12, 25],
    ],
    10
  )
).toBe(2.65);
expect(
  calculateTax(
    [
      [1, 0],
      [4, 25],
      [5, 50],
    ],
    2
  )
).toBe(0.25);
expect(calculateTax([[2, 50]], 0)).toBe(0);

/**
 * Accepted
 * 227/227 cases passed (2 ms)
 * Your runtime beats 61.54 % of typescript submissions
 * Your memory usage beats 73.08 % of typescript submissions (57.6 MB)
 */
