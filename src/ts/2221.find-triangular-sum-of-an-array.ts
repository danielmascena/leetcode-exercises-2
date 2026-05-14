import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2221 lang=typescript
 *
 * [2221] Find Triangular Sum of an Array
 */

// @lc code=start
function triangularSum(nums: number[]): number {
  for (let len = nums.length; len > 1; len--) {
    let row: number[] = [];
    for (let i = 1; i < len; i++) {
      row.push((nums[i - 1]! + nums[i]!) % 10);
    }
    nums = row;
  }
  return nums[0]!;
}
// @lc code=end

expect(triangularSum([1, 2, 3, 4, 5])).toBe(8);
expect(triangularSum([5])).toBe(5);

/**
 * Accepted
 * 300/300 cases passed (96 ms)
 * Your runtime beats 58.33 % of typescript submissions
 * Your memory usage beats 87.5 % of typescript submissions (60.2 MB)
 */
