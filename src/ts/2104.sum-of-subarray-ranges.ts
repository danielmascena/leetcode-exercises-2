import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2104 lang=typescript
 *
 * [2104] Sum of Subarray Ranges
 */

// @lc code=start
function subArrayRanges(nums: number[]): number {
  const { max, min } = Math;
  const len = nums.length;
  let sum = 0;
  nums.forEach((v, i) => {
    let v1 = v;
    let v2 = v;

    for (let j = i + 1; j < len; j++) {
      const z = nums[j]!;
      v1 = min(v1, z);
      v2 = max(v2, z);
      sum += v2 - v1;
    }
  });
  return sum;
}
// @lc code=end

expect(subArrayRanges([1, 2, 3])).toBe(4);
expect(subArrayRanges([1, 3, 3])).toBe(4);
expect(subArrayRanges([4, -2, -3, 4, 1])).toBe(59);

/**
 * Accepted
 * 71/71 cases passed (84 ms)
 * Your runtime beats 10 % of typescript submissions
 * Your memory usage beats 10 % of typescript submissions (62.4 MB)
 */
