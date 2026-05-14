import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3100 lang=typescript
 *
 * [3100] Water Bottles II
 */

// @lc code=start
function maxBottlesDrunk(numBottles: number, numExchange: number): number {
  let ans = 0;
  let empty = 0;

  while (numBottles) {
    ans += numBottles;
    empty += numBottles;
    numBottles = 0;

    if (empty >= numExchange) {
      empty -= numExchange;
      numBottles++;
      numExchange++;
    }
  }
  return ans;
}
// @lc code=end

expect(maxBottlesDrunk(13, 6)).toBe(15);
expect(maxBottlesDrunk(10, 3)).toBe(13);

/**
 * Accepted
 * 958/958 cases passed (40 ms)
 * Your runtime beats 97.14 % of typescript submissions
 * Your memory usage beats 100 % of typescript submissions (55.4 MB)
 */
