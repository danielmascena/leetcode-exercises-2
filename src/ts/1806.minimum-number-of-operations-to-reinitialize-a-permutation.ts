import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1806 lang=typescript
 *
 * [1806] Minimum Number of Operations to Reinitialize a Permutation
 */

// @lc code=start
function reinitializePermutation(n: number): number {
  let arr = Array.from({ length: n }, (_, i) => i);
  let count = 0;
  const sarr = String(arr);

  do {
    const perm: number[] = Array(n);
    arr.forEach((v) => {
      if (v % 2) {
        perm[v] = arr[n / 2 + (v - 1) / 2]!;
      } else {
        perm[v] = arr[v / 2]!;
      }
    });
    arr = perm;
    count++;
  } while (String(arr) !== sarr);
  return count;
}
// @lc code=end

expect(reinitializePermutation(2)).toBe(1);
expect(reinitializePermutation(4)).toBe(2);

/**
 * Accepted
 * 66/66 cases passed (118 ms) [WARN] Failed to get runtime percentile.
 */
