import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3350 lang=typescript
 *
 * [3350] Adjacent Increasing Subarrays Detection II
 */

// @lc code=start
function maxIncreasingSubarrays(nums: number[]): number {
  const n = nums.length;
  const { max, floor, min } = Math;
  const idxs = new Map<number, number>();
  let ans = 1;
  let l = 0;
  let r = 1;

  while (l < n) {
    while (r < n && nums[r - 1]! < nums[r]!) {
      idxs.set(l, r++);
      ans = max(ans, floor((r - l) / 2));
    }
    l++;

    if (r <= l) {
      r = l + 1;
    }
  }
  for (const [start, end] of idxs) {
    const eor = end + 1;
    let len = eor - start;

    if (idxs.has(eor)) {
      const fl = idxs.get(eor)!;
      ans = max(ans, min(len, fl + 1 - eor));
    }
  }
  return ans;
}
// @lc code=end

expect(maxIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1])).toBe(3);
expect(maxIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7])).toBe(2);
expect(maxIncreasingSubarrays([19, 5])).toBe(1);

/**
 * Accepted
 * 1111/1111 cases passed (119 ms)
 * Your runtime beats 16.67 % of typescript submissions
 * Your memory usage beats 8.33 % of typescript submissions (83.6 MB)
 */
