import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1304 lang=typescript
 *
 * [1304] Find N Unique Integers Sum up to Zero
 */

// @lc code=start
function sumZero(n: number): number[] {
  var arr: number[] = [];
  var v = 1;

  while (n >= 2) {
    arr.push(v, -v);
    v++;
    n -= 2;
  }
  if (n === 1) {
    arr.push(0);
  }
  return arr;
}
// @lc code=end

expect(sumZero(3)).toEqual([-1, 0, 1]);
expect(sumZero(1)).toEqual([0]);
/**
 * Accepted
 * 42/42 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 96.55 % of typescript submissions (54.5 MB)
 */
