import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1716 lang=typescript
 *
 * [1716] Calculate Money in Leetcode Bank
 */

// @lc code=start
function totalMoney(n: number): number {
  let total = 0;
  let monday = 1;
  let curr = monday;
  let days = 0;

  while (n) {
    total += curr++;

    if (++days % 7 === 0) {
      curr = ++monday;
    }
    n--;
  }
  return total;
}
// @lc code=end

expect(totalMoney(4)).toBe(10);
expect(totalMoney(10)).toBe(37);
expect(totalMoney(20)).toBe(96);

/**
 * Accepted
 * 106/106 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 60.87 % of typescript submissions (55.3 MB)
 */
