import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1493 lang=typescript
 *
 * [1493] Longest Subarray of 1's After Deleting One Element
 */

// @lc code=start
function longestSubarray(nums: number[]): number {
  const { max, min } = Math;
  const len = nums.length;
  let n1s = 0;
  let n0s = 0;
  let ans = 0;
  let left = 0;
  let right = 0;

  while (left < len) {
    while (right < len && n0s < 2) {
      if (nums[right++]) {
        n1s++;
      } else {
        n0s++;
      }
    }
    ans = max(ans, n1s);
    const num = nums[left++];

    if (num) {
      n1s--;
    } else if (--n0s === 0) {
      n1s = 0;
    }
  }
  return min(len - 1, ans);
}
// @lc code=end

expect(longestSubarray([1, 1, 1])).toBe(2);
expect(longestSubarray([1, 1, 0, 1])).toBe(3);
expect(longestSubarray([1, 0, 0, 0, 0])).toBe(1);
expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5);
expect(longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1])).toBe(4);

/**
 * Accepted
 * 82/82 cases passed (3 ms)
 * Your runtime beats 26.82 % of typescript submissions
 * Your memory usage beats 78.15 % of typescript submissions (61.1 MB)
 */
