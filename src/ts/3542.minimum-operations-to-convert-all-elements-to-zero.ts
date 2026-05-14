import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3542 lang=typescript
 *
 * [3542] Minimum Operations to Convert All Elements to Zero
 */

// @lc code=start
function minOperations(nums: number[]): number {
  const { min } = Math;
  let ans = 0;

  if (!nums.filter(Boolean).length) {
    return ans;
  }
  const arr = nums
    .map((v) => (v === 0 ? "%" : String(v)))
    .join(",")
    .split("%")
    .map((s) => s.split(",").filter(Boolean).map(Number))
    .filter((a) => a.length);

  while (arr.length) {
    const curr = arr.shift();
    const sm = min(...curr);
    let a: number[] = [];

    for (const v of curr) {
      if (v === sm) {
        if (a.length) {
          arr.push(a);
        }
        a = [];
      } else {
        a.push(v);
      }
    }
    if (a.length) {
      arr.push(a);
    }
    ans++;
  }
  return ans;
}
// @lc code=end

expect(minOperations([0, 2])).toBe(1);
expect(minOperations([3, 1, 2, 1])).toBe(3);
expect(minOperations([1, 2, 1, 2, 1, 2])).toBe(4);
expect(minOperations([0])).toBe(0);
expect(minOperations([7, 2, 0, 4, 2])).toBe(4);
expect(minOperations([100000, 99999, 99998, 99997, 99996, 99995])).toBe(6);

/**
 * Time Limit Exceeded
 * 953/968 cases passed (N/A)
 */
