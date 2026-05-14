import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1437 lang=typescript
 *
 * [1437] Check If All 1's Are at Least Length K Places Away
 */

// @lc code=start
function kLengthApart(nums: number[], k: number): boolean {
  for (let i = 0, p = -1, n = nums.length; i < n; i++) {
    const j = nums.indexOf(1, i);

    if (j < 0) {
      break;
    }
    if (p !== -1 && j - p - 1 < k) {
      return false;
    }
    p = i = j;
  }
  return true;
}
// @lc code=end

expect(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)).toBeTrue();
expect(kLengthApart([1, 0, 0, 1, 0, 1], 2)).toBeFalse();

/**
 * Accepted
 * 69/69 cases passed (2 ms)
 * Your runtime beats 28.57 % of typescript submissions
 * Your memory usage beats 85.71 % of typescript submissions (61.7 MB)
 */
