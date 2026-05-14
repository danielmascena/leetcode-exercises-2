import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3346 lang=typescript
 *
 * [3346] Maximum maxFrequency of an Element After Performing Operations I
 */

// @lc code=start
function maxFrequency(
  nums: number[],
  k: number,
  numOperations: number
): number {
  const { min, max } = Math;
  const grp = new Map<number, number>();
  const psb = new Map<number, number>();
  let ans = 0;
  nums.forEach((v, i) => {
    const q = (grp.get(v) ?? 0) + 1;
    grp.set(v, q);
    ans = max(ans, q);

    for (let z = -k; z <= k; z++) {
      const w = v + z;
      if (z) psb.set(w, (psb.get(w) ?? 0) + 1);
    }
  });
  console.log(">>> /", ans);

  grp.forEach((q, v) => {
    ans = max(ans, q + min(numOperations, psb.get(v) ?? 0));
  });
  psb.forEach((q) => {
    ans = max(ans, min(numOperations, q));
  });
  return ans;
}
// @lc code=end

expect(maxFrequency([1, 4, 5], 1, 2)).toBe(2);
expect(maxFrequency([5, 11, 20, 20], 5, 1)).toBe(2);
expect(maxFrequency([23, 54], 77, 1)).toBe(2);
expect(maxFrequency([1, 90], 76, 1)).toBe(1);

/**
 * Time Limit Exceeded
 * 629/635 cases passed (N/A)
 */
