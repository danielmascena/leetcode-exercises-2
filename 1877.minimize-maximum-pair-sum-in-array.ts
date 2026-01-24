import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1877 lang=typescript
 *
 * [1877] Minimize Maximum Pair Sum in Array
 */

// @lc code=start
function minPairSum(nums: number[]): number {
  const { max } = Math;
  var mps = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
    mps = max(mps, nums[i] + nums[j]);
  }
  return mps;
}
// @lc code=end

expect(minPairSum([3, 5, 2, 3])).toBe(7);
expect(minPairSum([3, 5, 4, 2, 4, 6])).toBe(8);

/*
Accepted
37/37 cases passed (263 ms)
Your runtime beats 55.56 % of typescript submissions
Your memory usage beats 22.22 % of typescript submissions (70.9 MB)
*/
