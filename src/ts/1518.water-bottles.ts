import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1518 lang=typescript
 *
 * [1518] Water Bottles
 */

// @lc code=start
function numWaterBottles(numBottles: number, numExchange: number): number {
  let ans = 0;
  let empty = 0;

  while (numBottles > 0) {
    ans += numBottles;
    empty += numBottles;
    const q = Math.floor(empty / numExchange);
    numBottles = q;
    empty -= q * numExchange;
  }
  return ans;
}
// @lc code=end

expect(numWaterBottles(9, 3)).toBe(13);
expect(numWaterBottles(15, 4)).toBe(19);

/**
 * Accepted
 * 70/70 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 54.55 % of typescript submissions (55 MB)
 */
