import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3005 lang=typescript
 *
 * [3005] Count Elements With Maximum Frequency
 */

// @lc code=start
function maxFrequencyElements(nums: number[]): number {
  const { max } = Math;
  const freq = Array(100).fill(0);
  let mf = 0;
  let ans = 0;
  nums.forEach((num) => (mf = max(mf, ++freq[num - 1])));
  freq.forEach((q) => {
    if (q === mf) {
      ans++;
    }
  });
  return ans * mf;
}
// @lc code=end

expect(maxFrequencyElements([1, 2, 2, 3, 1, 4])).toBe(4);
expect(maxFrequencyElements([1, 2, 3, 4, 5])).toBe(5);

/**
 * Accepted
 * 623/623 cases passed (1 ms)
 * Your runtime beats 90.2 % of typescript submissions
 * Your memory usage beats 62.74 % of typescript submissions (57.9 MB)
 */
