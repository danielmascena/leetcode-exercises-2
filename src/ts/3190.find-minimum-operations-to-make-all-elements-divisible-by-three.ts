import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3190 lang=typescript
 *
 * [3190] Find Minimum Operations to Make All Elements Divisible by Three
 */

// @lc code=start
/**
 * @author Daniel Mascena
 */
function minimumOperations(nums: number[]): number {
  const { min } = Math;
  const calcDist = (num: number, step: number) => {
    let opt = 0;

    while (num % 3) {
      num += step;
      opt++;
    }
    return opt;
  };
  let ans = 0;

  for (const n of nums) {
    ans += min(calcDist(n, 1), calcDist(n, -1));
  }
  return ans;
}
// @lc code=end

expect(minimumOperations([1, 2, 3, 4])).toBe(3);
expect(minimumOperations([3, 6, 9])).toBe(0);

/*
    Accepted
    660/660 cases passed (2 ms)
    Your runtime beats 8.7 % of typescript submissions
    Your memory usage beats 13.04 % of typescript submissions (58.1 MB)
*/
