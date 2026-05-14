import { expect } from "bun:test";

/*
 * @lc app=leetcode id=3010 lang=typescript
 *
 * [3010] Divide an Array Into Subarrays With Minimum Cost I
 */

// @lc code=start
function minimumCost(nums: number[]): number {
  const n = nums.length;
  var [a, b, c] = nums;
  var lt = 2;

  for (let i = 2; i < n; i++) {
    const v = nums[i];

    if (v <= c) {
      c = v;
      lt = i;
    }
  }
  for (let i = 1; i < n; i++) {
    const v = nums[i];

    if (v < b && i !== lt) {
      b = v;
    }
  }
  return a + b + c;
}
// @lc code=end

expect(minimumCost([1, 2, 3, 12])).toBe(6);
expect(minimumCost([5, 4, 3])).toBe(12);
expect(minimumCost([10, 3, 1, 1])).toBe(12);
expect(minimumCost([1, 6, 1, 5])).toBe(7);

/*
Accepted
988/988 cases passed (0 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 87.5 % of typescript submissions (57.6 MB)
*/
