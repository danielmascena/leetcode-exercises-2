import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3021 lang=typescript
 *
 * [3021] Alice and Bob Playing Flower Game
 */

// @lc code=start
function flowerGame(n: number, m: number): number {
  const { ceil, floor } = Math;
  var ans = 0;

  for (let v = 1; v <= n; v++) {
    if (v % 2) {
      ans += floor(m / 2);
    } else {
      ans += ceil(m / 2);
    }
  }
  return ans;
}
// @lc code=end

expect(flowerGame(3, 2)).toBe(3);
expect(flowerGame(1, 1)).toBe(0);

/**
 * Accepted
 * 537/537 cases passed (2 ms) [WARN] Failed to get runtime percentile.
 */
