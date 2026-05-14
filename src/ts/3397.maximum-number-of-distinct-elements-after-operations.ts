import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3397 lang=typescript
 *
 * [3397] Maximum Number of Distinct Elements After Operations
 */

// @lc code=start
function maxDistinctElements(nums: number[], k: number): number {
  const ans = new Set<number>();
  const grp = new Map<number, number>();
  nums.sort((a, b) => a - b);

  for (const num of nums) {
    grp.set(num, (grp.get(num) ?? 0) + 1);
  }
  for (let [num, qut] of grp) {
    for (let kk = -k; qut && kk <= k; kk++) {
      if (!ans.has(num + kk)) {
        ans.add(num + kk);
        qut--;
      }
    }
  }
  return ans.size;
}
// @lc code=end

expect(maxDistinctElements([1, 2, 2, 3, 3, 4], 2)).toBe(6);
expect(maxDistinctElements([4, 4, 4, 4], 1)).toBe(3);
expect(maxDistinctElements([7, 8, 10, 10, 7, 6, 7], 1)).toBe(7);

/**
 * Time Limit Exceeded
 * 632/633 cases passed (N/A)
 */
