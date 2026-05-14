import { expect } from "bun:test";
/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
  if (!n) {
    return false;
  }
  const isEven = n % 2 === 0;

  if (isEven) {
    return true;
  }
  const end = Math.ceil(n / 2);
  for (let v = 1; v <= end; v += 2) {
    if (v ** 2 === n) {
      return true;
    }
  }
  return false;
}
// @lc code=end

expect(isPowerOfTwo(1)).toBeTrue();
expect(isPowerOfTwo(16)).toBeTrue();
expect(isPowerOfTwo(0)).toBeFalse();
expect(isPowerOfTwo(67108865)).toBeFalse();
expect(isPowerOfTwo(8)).toBeTrue();
expect(isPowerOfTwo(6)).toBeFalse();
