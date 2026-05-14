import { expect } from "bun:test";
/*
 * @lc app=leetcode id=643 lang=typescript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
function findMaxAverage(nums: number[], k: number): number {
  const { max } = Math;
  var sum = 0;

  for (let i = 0; i < k; i++) {
    const v = nums[i]!;
    sum += v;
  }
  var ans = sum / k;

  for (let i = k, j = 0, n = nums.length; i < n; i++, j++) {
    const v = nums[i];
    sum += v;
    sum += ~nums[j] + 1;
    ans = max(ans, sum / k);
  }
  return ans;
}
// @lc code=end

expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
expect(findMaxAverage([5], 1)).toBe(5.0);

/*
Accepted
128/128 cases passed (3 ms)
Your runtime beats 52.11 % of typescript submissions
Your memory usage beats 35.89 % of typescript submissions (69.9 MB)
*/
