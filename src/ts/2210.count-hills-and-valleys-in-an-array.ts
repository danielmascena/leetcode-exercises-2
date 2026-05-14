import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2210 lang=typescript
 *
 * [2210] Count Hills and Valleys in an Array
 */

// @lc code=start
function countHillValley(nums: number[]): number {
  let [prev = 0] = nums;
  return nums.reduce((hav, num, idx, arr) => {
    const next = arr[idx + 1] ?? num;

    if ((num < prev && num < next) || (num > prev && num > next)) {
      prev = num;
      return hav + 1;
    }
    return hav;
  }, 0);
}
// @lc code=end

expect(countHillValley([2, 4, 1, 1, 6, 5])).toBe(3);
expect(countHillValley([6, 6, 5, 5, 4, 1])).toBe(0);
expect(countHillValley([5, 7, 7, 1, 7])).toBe(2);

/**
 * Accepted
 * 121/121 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 68.42 % of typescript submissions (55.5 MB)
 */
