import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3034 lang=typescript
 *
 * [3034] Number of Subarrays That Match a Pattern I
 */

// @lc code=start
function countMatchingSubarrays(nums: number[], pattern: number[]): number {
  const m = pattern.length;
  let ans = 0;

  for (let i = 0, n = nums.length; i + m <= n; i++) {
    let prev = nums[i]!;
    let count = 0;

    for (let j = 1; j <= m; j++) {
      const num = nums[i + j]!;
      const ptn = pattern[j - 1]!;

      if (
        (ptn > 0 && num > prev) ||
        (ptn < 0 && num < prev) ||
        (ptn === 0 && num === prev)
      ) {
        count++;
      }
      prev = num;
    }
    if (count === m) {
      ans++;
    }
  }
  return ans;
}
// @lc code=end

expect(countMatchingSubarrays([1, 2, 3, 4, 5, 6], [1, 1])).toBe(4);
expect(countMatchingSubarrays([1, 4, 4, 1, 3, 5, 5, 3], [1, 0, -1])).toBe(2);
/**
 * Accepted
 * 792/792 cases passed (1 ms)
 * Your runtime beats 90.91 % of typescript submissions
 * Your memory usage beats 81.82 % of typescript submissions (58 MB)
 */
