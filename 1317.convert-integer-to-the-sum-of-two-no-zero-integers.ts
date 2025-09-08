import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1317 lang=typescript
 *
 * [1317] Convert Integer to the Sum of Two No-Zero Integers
 */

// @lc code=start
function getNoZeroIntegers(n: number): number[] {
  var inc = 1;

  while (inc <= n) {
    const dif = n - inc;
    const sdif = String(dif);
    const sinc = String(inc);

    if (sdif.indexOf("0") === -1 && sinc.indexOf("0") === -1) {
      return [inc, dif];
    }
    inc++;
  }
}
// @lc code=end

expect(getNoZeroIntegers(2)).toEqual([1, 1]);
expect(getNoZeroIntegers(11)).toEqual([2, 9]);

/**
 * Accepted
 * 207/207 cases passed (0 ms)
 * Your runtime beats 100 % of typescript submissions
 * Your memory usage beats 35.71 % of typescript submissions (55.5 MB)
 */
