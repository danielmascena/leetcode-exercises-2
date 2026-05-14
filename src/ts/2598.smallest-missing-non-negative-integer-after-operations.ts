import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2598 lang=typescript
 *
 * [2598] Smallest Missing Non-negative Integer After Operations
 */

// @lc code=start
function findSmallestInteger(nums: number[], value: number): number {
  const n = nums.length;
  const { max, min, ceil, abs } = Math;
  let mex = 0;
  let hasDiv = 0;

  for (let i = 0; i < n; i++) {
    const v = nums[i]!;

    if (v < 0) {
      const t = abs(ceil(v / value));
      nums[i] = v + t * value;
    }
    if (v / value === 0) {
      hasDiv = 1;
    }
  }
  nums.sort((a, b) => a - b);
  const uniq = new Set(nums);
  let mx = max(...nums);
  console.log(nums);

  for (let i = 0; i < n; i++, mex++) {
    if (!uniq.has(mex)) {
      let v1 = value + mex;
      let fnd = false;

      while (v1 <= mx) {
        if (uniq.has(v1)) {
          fnd = true;
        }
        v1 += value;
      }
      if (!fnd && uniq.has(0) && hasDiv) {
        fnd = true;
      }
      if (!fnd) {
        return mex;
      }
    }
  }
  return mex;
}
// @lc code=end

expect(findSmallestInteger([1, -10, 7, 13, 6, 8], 5)).toBe(4);
expect(findSmallestInteger([1, -10, 7, 13, 6, 8], 7)).toBe(2);
expect(findSmallestInteger([3, 0, 3, 2, 4, 2, 1, 1, 0, 4], 5)).toBe(10);
