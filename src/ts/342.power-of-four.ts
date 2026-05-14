import { expect } from "bun:test";
/*
 * @lc app=leetcode id=342 lang=typescript
 *
 * [342] Power of Four
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
  const { pow } = Math;
  let lmt = 0;

  for (let v = 0; lmt < n; v++) {
    if ((lmt = pow(4, v)) === n) {
      return true;
    }
  }
  return false;
}
// @lc code=end
expect(isPowerOfFour(16)).toBeTrue();
expect(isPowerOfFour(5)).toBeFalse();
expect(isPowerOfFour(1)).toBeTrue();
expect(isPowerOfFour(0)).toBeFalse();
expect(isPowerOfFour(2)).toBeFalse();
expect(isPowerOfFour(9)).toBeFalse();
expect(isPowerOfFour(4)).toBeTrue();
expect(isPowerOfFour(64)).toBeTrue();
expect(isPowerOfFour(129140164)).toBeFalse();
expect(isPowerOfFour(387420488)).toBeFalse();
expect(isPowerOfFour(-2147483648)).toBeFalse();

/**
 * Accepted
 * 1063/1063 cases passed (2 ms)
 * Your runtime beats 3.47 % of typescript submissions
 * Your memory usage beats 63.89 % of typescript submissions (57.6 MB)
 */
