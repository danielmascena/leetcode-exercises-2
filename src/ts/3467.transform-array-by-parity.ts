import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3467 lang=typescript
 *
 * [3467] Transform Array by Parity
 */

// @lc code=start
function transformArray(nums: number[]): number[] {
  const ans = Array(nums.length).fill(0);
  let evens = 0;
  nums.forEach((num) => num % 2 && evens++);

  for (let i = nums.length - 1; evens > 0; i--, evens--) {
    ans[i] = 1;
  }
  return ans;
}

// @lc code=end

expect(transformArray([4, 3, 2, 1])).toEqual([0, 0, 1, 1]);
expect(transformArray([1, 5, 1, 4, 2])).toEqual([0, 0, 1, 1, 1]);

/**
 * Accepted
 * 804/804 cases passed (1 ms)
 * Your runtime beats 96.23 % of typescript submissions
 * Your memory usage beats 77.36 % of typescript submissions (57.9 MB)
 */
