import { expect } from "bun:test";
/*
 * @lc app=leetcode id=869 lang=typescript
 *
 * [869] Reordered Power of 2
 */

// @lc code=start
function reorderedPowerOf2(n: number): boolean {
  return n.toString(2).split("").map(Number).filter(Boolean).length === 1;
}
// @lc code=end

expect(reorderedPowerOf2(1)).toBeTrue();
expect(reorderedPowerOf2(10)).toBeFalse();
expect(reorderedPowerOf2(16)).toBeTrue();
