import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2163 lang=typescript
 *
 * [2163] Minimum Difference in Sums After Removal of Elements
 */

// @lc code=start
function minimumDifference(nums: number[]): number {
  const len = nums.length;
  const n = len / 3;
  const sfn = (a: number, b: number) => a - b;
  const avail = nums.slice(0, n).sort(sfn);
  const left = nums.slice(n, n * 2).sort(sfn);
  const right = nums.slice(n * 2).sort(sfn);

  for (let i = 0, j = 0; i < n; i++) {
    const v = left[i]!;

    if (avail[j]! < v) {
      [avail[j] = 0, left[i] = 0] = [left[i], avail[j]];
      j++;
    }
  }
  avail.sort(sfn);

  for (let i = 0, j = 0; i < len; i++) {
    const v = right[i]!;

    if (avail[j]! > v) {
      [avail[j] = 0, right[i] = 0] = [right[i], avail[j]];
    }
  }
  console.log(left, right, avail);
  return left.reduce((a, c) => a + c, 0) - right.reduce((a, c) => a + c, 0);
}
// @lc code=end

expect(minimumDifference([3, 1, 2])).toBe(-1);
expect(minimumDifference([7, 9, 5, 8, 1, 3])).toBe(1);
expect(
  minimumDifference([
    16, 46, 43, 41, 42, 14, 36, 49, 50, 28, 38, 25, 17, 5, 18, 11, 14, 21, 23,
    39, 23,
  ])
).toBe(-14);
