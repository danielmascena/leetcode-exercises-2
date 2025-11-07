import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3452 lang=typescript
 *
 * [3452] Sum of Good Numbers
 */

// @lc code=start
function sumOfGoodNumbers(nums: number[], k: number): number {
  let ans = 0;

  for (let i = 0, n = nums.length; i < n; i++) {
    const num = nums[i]!;

    if (num > (nums[i - k] ?? 0) && num > (nums[i + k] ?? 0)) {
      ans += num;
    }
  }
  return ans;
}
// @lc code=end

expect(sumOfGoodNumbers([1, 3, 2, 1, 5, 4], 2)).toBe(12);
expect(sumOfGoodNumbers([2, 1], 1)).toBe(2);

/**
 * Accepted
 * 803/803 cases passed (2 ms)
 * Your runtime beats 26.67 % of typescript submissions
 * Your memory usage beats 20 % of typescript submissions (58.3 MB)
 */
