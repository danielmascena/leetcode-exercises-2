import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3487 lang=typescript
 *
 * [3487] Maximum Unique Subarray Sum After Deletion
 */

// @lc code=start
function maxSum(nums: number[]): number {
  return (
    [...new Set(nums)].filter((n) => n > 0).reduce((a, c) => a + c, 0) ||
    Math.max(...nums)
  );
}
// @lc code=end

expect(maxSum([1, 2, 3, 4, 5])).toBe(15);
expect(maxSum([1, 1, 0, 1, 1])).toBe(1);
expect(maxSum([1, 2, -1, -2, 1, 0, -1])).toBe(3);
expect(maxSum([-100])).toBe(-100);
expect(maxSum([20, -20])).toBe(20);
expect(maxSum([0])).toBe(0);
expect(maxSum([-1])).toBe(-1);
expect(maxSum([6, 4, 6, 1, 4, 2, -2, -7, 5, -6])).toBe(18);
expect(maxSum([0, 3, -10, -9, 6, -9, 2, 7, -2, -8])).toBe(18);
expect(maxSum([-6, 8, -6, 8, -10, -3, 4, -7, 1, 6])).toBe(19);
expect(maxSum([-7, -6, -6, -6, 0, -4, -8, -3, -2, -7])).toBe(0);
expect(maxSum([-86, -73, -2, -84, -22, -72, -55, -97, -34, -3])).toBe(-2);
expect(
  maxSum([
    -59, 77, 81, -32, -58, -73, 22, -28, 48, -43, -34, -43, -45, 3, 78, 78, 6,
    -74, -91, -84, 6, -47, 80, 0, -88, 4, -44, 8, 42, 99, 72, -96, -13, -32, 12,
    91, 59, -26, 18, -11, 60, 85, -67, 14, -85, 20, -34, -95, -91, 62, 75, -87,
    14, -81, 30, 5, -31, -43, 68, 74, 71, 9, 36, -72, 38, -55, 38, 1, -13, 31,
    -62, 37, -44, -38, 28, 75, -54, -43, 22, -20, -23, 36, -30, -23, 27, -24, 2,
    50, -14, -2, -78, 81, 31, 32, -70, -20, 11, 39, 58, 23,
  ])
).toBe(1786);

/**
 * Accepted
 * 927/927 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 55 % of typescript submissions (57.7 MB)
 */
