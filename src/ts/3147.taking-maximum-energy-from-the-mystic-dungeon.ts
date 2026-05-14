import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3147 lang=typescript
 *
 * [3147] Taking Maximum Energy From the Mystic Dungeon
 */

// @lc code=start
function maximumEnergy(energy: number[], k: number): number {
  const { min, max } = Math;
  const n = energy.length;
  const end = energy.slice(n - k);
  const prefix = [...energy.slice(0, k), ...Array(n - k).fill(0)];

  for (let i = k; i < n; i++) {
    prefix[i] = energy[i] + prefix[i - k];
  }
  const tgt = [...prefix.slice(n - k), ...end];
  let ans1 = min(...tgt);
  let ans2 = max(...tgt);

  for (let i = n - 1; i >= k; i--) {
    const v = prefix[i];
    ans1 = min(ans1, v - prefix[i - k]);
    ans2 = max(ans2, v - prefix[i - k]);
  }
  return max(ans1, ans2);
}
// @lc code=end

expect(maximumEnergy([5, 2, -10, -5, 1], 3)).toBe(3);
expect(maximumEnergy([-2, -3, -1], 2)).toBe(-1);
expect(maximumEnergy([-9, -2, -6, -5, -8, 3, 0], 1)).toBe(3);
expect(maximumEnergy([1, -3, 10, 7], 1)).toBe(17);
