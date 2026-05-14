import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3349 lang=typescript
 *
 * [3349] Adjacent Increasing Subarrays Detection I
 */

// @lc code=start
function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  const n = nums.length;
  const idxs = new Set<number>();
  let left = 0;
  let right = 1;

  while (left <= n - k) {
    while (right < left + k && nums[right]! > nums[right - 1]!) {
      right++;
    }
    if (right === left + k) {
      idxs.add(left);
    }
    left++;

    if (left >= right) {
      right = left + 1;
    }
  }
  for (const i of idxs) {
    if (idxs.has(i + k)) {
      return true;
    }
  }
  return false;
}
// @lc code=end

expect(hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3)).toBeTrue();
expect(hasIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5)).toBeFalse();

/**
 * Accepted
 * 1422/1422 cases passed (51 ms)
 * Your runtime beats 87.5 % of typescript submissions
 * Your memory usage beats 75 % of typescript submissions (58.2 MB)
 */
