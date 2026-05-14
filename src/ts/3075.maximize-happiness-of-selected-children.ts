import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3075 lang=typescript
 *
 * [3075] Maximize Happiness of Selected Children
 */

// @lc code=start
function maximumHappinessSum(happiness: number[], k: number): number {
  const { max } = Math;
  let ans = 0;
  let d = 0;
  happiness.sort((a, b) => b - a);

  for (let i = 0, n = happiness.length; k && i < n; i++, d++, k--) {
    ans += max(happiness[i] - d, 0);
  }
  return ans;
}
// @lc code=end

expect(maximumHappinessSum([1, 2, 3], 2)).toBe(4);
expect(maximumHappinessSum([1, 1, 1, 1], 2)).toBe(1);
expect(maximumHappinessSum([2, 3, 4, 5], 1)).toBe(5);

/*
Accepted
674/674 cases passed (202 ms)
Your runtime beats 100 % of typescript submissions
Your memory usage beats 100 % of typescript submissions (73.2 MB)
*/
