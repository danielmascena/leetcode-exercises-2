import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3512 lang=typescript
 *
 * [3512] Minimum Operations to Make Array Sum Divisible by K
 */

// @lc code=start
function minOperations(nums: number[], k: number): number {
  return nums.reduce((acc, cur) => acc + cur, 0) % k;
}
// @lc code=end

expect(minOperations([3, 9, 7], 5)).toBe(4);
expect(minOperations([4, 1, 3], 4)).toBe(0);
expect(minOperations([3, 2], 6)).toBe(5);

/*
Accepted
855/855 cases passed (1 ms)
Your runtime beats 86.15 % of typescript submissions
Your memory usage beats 44.62 % of typescript submissions (58.7 MB)
 */
