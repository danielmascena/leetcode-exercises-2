import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2348 lang=typescript
 *
 * [2348] Number of Zero-Filled Subarrays
 */

// @lc code=start
function zeroFilledSubarray(nums: number[]): number {
  const zeros: number[] = [];
  const memo = new Map<number, number>();
  let ans = 0;
  let cnt = 0;

  for (let idx = 0, len = nums.length; idx < len; idx++) {
    if (nums[idx]) {
      if (cnt) zeros.push(cnt);
      cnt = 0;
    } else {
      cnt++;
    }
  }
  if (cnt) {
    zeros.push(cnt);
  }
  zeros.forEach((q) => {
    if (memo.has(q)) {
      return (ans += memo.get(q)!);
    }
    let ttl = 0;

    for (let v = 0; v < q; v++) {
      ttl += q - v;
    }
    memo.set(q, ttl);
    ans += ttl;
  });
  return ans;
}
// @lc code=end

expect(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4])).toBe(6);
expect(zeroFilledSubarray([0, 0, 0, 2, 0, 0])).toBe(9);
expect(zeroFilledSubarray([2, 10, 2019])).toBe(0);

/**
 * Accepted
 * 48/48 cases passed (10 ms)
 * Your runtime beats 25.64 % of typescript submissions
 * Your memory usage beats 38.46 % of typescript submissions (69.7 MB)
 */
