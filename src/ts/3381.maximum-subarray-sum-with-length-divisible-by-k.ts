import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3381 lang=typescript
 *
 * [3381] Maximum Subarray Sum With Length Divisible by K
 */

// @lc code=start
function maxSubarraySum(nums: number[], k: number): number {
  const { max } = Math;
  const n = nums.length;
  let sz = n - (n % k);
  let sum = nums.slice(0, sz).reduce((acc, cur) => acc + cur, 0);
  let mx = sum;

  while (sz >= k) {
    let t = sum;

    for (let i = 0, j = sz; j < n; i++, j++) {
      mx = max(mx, t);
      t += nums[j];
      t -= nums[i];
    }
    mx = max(mx, t);

    for (let v = k; v; v--) {
      sum -= nums[--sz];
    }
  }
  return mx;
}
// @lc code=end

expect(maxSubarraySum([1, 2], 1)).toBe(3);
expect(maxSubarraySum([-1, -2, -3, -4, -5], 4)).toBe(-10);
expect(maxSubarraySum([-5, 1, 2, -3, 4], 2)).toBe(4);
