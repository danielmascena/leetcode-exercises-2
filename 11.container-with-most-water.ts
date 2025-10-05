import { expect } from "bun:test";
/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  const { max, min, abs } = Math;
  const cpos = height
    .map((v, i): [number, number] => [v, i])
    .sort(([a, b], [c, d]) => a - c);
  let ans = 0;

  for (let idx = cpos.length - 1; idx > 0; idx--) {
    const [v, i] = cpos[idx]!;
    let t = ans;

    for (let j = idx - 1; j >= 0; j--) {
      const [v2, i2] = cpos[j]!;
      const t2 = min(v, v2) * abs(i - i2);

      t = max(t, t2);
    }
    ans = max(ans, t);
  }
  return ans;
}
// @lc code=end

expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
expect(maxArea([1, 1])).toBe(1);
expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toBe(17);
expect(maxArea([8, 10, 14, 0, 13, 10, 9, 9, 11, 11])).toBe(80);
