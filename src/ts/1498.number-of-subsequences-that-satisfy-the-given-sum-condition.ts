import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1498 lang=typescript
 *
 * [1498] Number of Subsequences That Satisfy the Given Sum Condition
 */

// @lc code=start
function numSubseq(nums: number[], target: number): number {
  const { max, min } = Math;
  const ssq: [number, number][] = [];

  for (const num of nums) {
    const arr: [number, number][] = [];
    ssq.forEach(([a, b]) => {
      const [mn, mx] = [min(a, num), max(b, num)];
      if (mn + mx <= target) {
        arr.push([mn, mx]);
      }
    });
    ssq.push(...arr, [num, num]);
  }
  return ssq.filter(([a, b]) => a + b <= target).length;
}
// @lc code=end

expect(numSubseq([3, 5, 6, 7], 9)).toBe(4);
expect(numSubseq([3, 3, 6, 8], 10)).toBe(6);
expect(numSubseq([2, 3, 3, 4, 6, 7], 12)).toBe(61);
expect(
  numSubseq(
    [
      14, 4, 6, 6, 20, 8, 5, 6, 8, 12, 6, 10, 14, 9, 17, 16, 9, 7, 14, 11, 14,
      15, 13, 11, 10, 18, 13, 17, 17, 14, 17, 7, 9, 5, 10, 13, 8, 5, 18, 20, 7,
      5, 5, 15, 19, 14,
    ],
    22
  )
).toBe(272187084);
