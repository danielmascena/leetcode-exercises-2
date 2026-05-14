import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1343 lang=typescript
 *
 * [1343] Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 */

// @lc code=start
function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const n = arr.length;
  let ans = 0;
  let acc = arr.slice(0, k).reduce((a, c) => a + c, 0);

  for (let i = k; i < n; i++) {
    if (acc / k >= threshold) {
      ans++;
    }
    acc -= arr[i - k]!;
    acc += arr[i]!;
  }
  if (acc / k >= threshold) {
    ans++;
  }
  return ans;
}
// @lc code=end

expect(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)).toBe(3);
expect(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)).toBe(6);

/**
 * Accepted
 * 69/69 cases passed (2 ms)
 * Your runtime beats 60.81 % of typescript submissions
 * Your memory usage beats 35.13 % of typescript submissions (63.6 MB)
 */
