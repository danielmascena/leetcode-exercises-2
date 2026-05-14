import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1664 lang=typescript
 *
 * [1664] Ways to Make a Fair Array
 */

// @lc code=start
function waysToMakeFair(nums: number[]): number {
  const len = nums.length;
  const oarr = new Array<number>(len);
  const earr = new Array<number>(len);
  let frarr = 0;

  for (let i = len - 1, odds = 0, evens = 0; i >= 0; i--) {
    const num = nums[i]!;

    if (i % 2 === 0) {
      evens += num;
    } else {
      odds += num;
    }
    oarr[i] = odds;
    earr[i] = evens;
  }

  for (let i = 0, odds = 0, evens = 0; i < len; i++) {
    const num = nums[i]!;
    const nodds = oarr[i + 1] ?? 0;
    const nevens = earr[i + 1] ?? 0;

    if (odds + nevens === evens + nodds) {
      frarr++;
    }
    if (i % 2 === 0) {
      evens += num;
    } else {
      odds += num;
    }
  }
  return frarr;
}
// @lc code=end

expect(waysToMakeFair([2, 1, 6, 4])).toBe(1);
expect(waysToMakeFair([1, 1, 1])).toBe(3);
expect(waysToMakeFair([1, 2, 3])).toBe(0);

/**
 * Accepted
 * 105/105 cases passed (17 ms)
 * Your runtime beats 57.14 % of typescript submissions
 * Your memory usage beats 42.86 % of typescript submissions (70.5 MB)
 */
