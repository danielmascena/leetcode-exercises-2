import { expect } from "bun:test";
/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  const { max, min } = Math;
  const len = height.length;
  const prefix: [number, number][] = [];
  let ans = 0;
  height.forEach((v, i) => {
    const [pv = 0, pi = 0] = prefix[i - 1] ?? [];

    if (v > pv && v - pv > i - pi) {
      prefix[i] = [v, i];
    } else {
      prefix[i] = [pv, pi];
    }
  });
  console.log(prefix);
  height.forEach((v, i) => {
    const [pv, pi] = prefix[i]!;
    const dt = i - pi;
    const av = min(v, pv);
    ans = max(ans, dt * av);
  });
  return ans;
}
// @lc code=end

expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
expect(maxArea([1, 1])).toBe(1);
expect(maxArea([1, 2, 1])).toBe(2);
expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toBe(17);
expect(maxArea([1, 2, 4, 3])).toBe(4);
expect(maxArea([8, 10, 14, 0, 13, 10, 9, 9, 11, 11])).toBe(80);
