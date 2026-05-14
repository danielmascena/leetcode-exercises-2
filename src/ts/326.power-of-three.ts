import { expect } from "bun:test";
/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
  const { pow } = Math;
  for (let v = 0, r = 0; r <= n; v++) {
    if ((r = pow(3, v)) === n) {
      return true;
    }
  }
  return false;
}
// @lc code=end

expect(isPowerOfThree(27)).toBeTrue();
expect(isPowerOfThree(599076)).toBeFalse();
expect(isPowerOfThree(594441)).toBeFalse();
expect(isPowerOfThree(597529)).toBeFalse();
expect(isPowerOfThree(591361)).toBeFalse();
expect(isPowerOfThree(129140162)).toBeFalse();
expect(isPowerOfThree(387420489)).toBeTrue();
expect(isPowerOfThree(387420488)).toBeFalse();

/**
 * Accepted
 * 21040/21040 cases passed (12 ms)
 * Your runtime beats 17.7 % of typescript submissions
 * Your memory usage beats 6.64 % of typescript submissions (66.4 MB)
 */
