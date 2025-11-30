import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1590 lang=typescript
 *
 * [1590] Make Sum Divisible by P
 */

// @lc code=start
function minSubarray(nums: number[], p: number): number {
  const rfn = (acc: number, cur: number): number => acc + cur;
  const sum = nums.reduce(rfn, 0);
  const n = nums.length;

  if (sum % p === 0) return 0;

  for (let sz = 1; sz < n; sz++) {
    for (let i = 0; i + sz <= n; i++) {
      const ssum = nums.slice(i, i + sz).reduce(rfn, 0);
      const tt = sum - ssum;

      if (tt % p === 0) {
        return sz;
      }
    }
  }
  return -1;
}

// @lc code=end
expect(minSubarray([3, 1, 4, 2], 6)).toBe(1);
expect(minSubarray([6, 3, 5, 2], 9)).toBe(2);
expect(minSubarray([1, 2, 3], 3)).toBe(0);

/*
Time Limit Exceeded
129/145 cases passed (N/A)
*/
