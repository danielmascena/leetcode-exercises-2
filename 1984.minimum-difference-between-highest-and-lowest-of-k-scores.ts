import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1984 lang=typescript
 *
 * [1984] Minimum Difference Between Highest and Lowest of K Scores
 */

// @lc code=start
function minimumDifference(nums: number[], k: number): number {
  const { min } = Math;
  var ans = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);

  for (let i = 0, n = nums.length; i <= n - k; i++) {
    ans = min(ans, nums[i + k - 1] - nums[i]);
  }
  return ans;
}
// @lc code=end

expect(minimumDifference([90], 1)).toBe(0);
expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2);

/*
Accepted
118/118 cases passed (9 ms)
Your runtime beats 55.74 % of typescript submissions
Your memory usage beats 29.51 % of typescript submissions (58.3 MB)
*/
