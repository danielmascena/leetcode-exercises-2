import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2300 lang=typescript
 *
 * [2300] Successful Pairs of Spells and Potions
 */

// @lc code=start
function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const sfn = ([a = 0]: number[], [b = 0]: number[]) => a - b;
  const tfn = (v: number, i: number) => [v, i];
  const sps = spells.map(tfn).sort(sfn);
  const pts = potions.map(tfn).sort(sfn);
  const n = spells.length;
  const m = potions.length;
  let i = 0;
  let ans = new Array<number>(n);

  while (i < n) {
    if (sps[i]?.[0]! * pts[0]?.[0]! >= success) {
      while (i < n) {
        ans[sps[i++]?.[1]!] = m;
      }
    } else {
      const sp = sps[i++]!;
      const [v = 0, p = 0] = sp;
      let j = 0;

      for (; j < m && v * pts[j]?.[0]! < success; j++);

      ans[p] = m - j;
    }
  }
  return ans;
}
// @lc code=end

expect(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)).toEqual([4, 0, 3]);
expect(successfulPairs([3, 1, 2], [8, 5, 8], 16)).toEqual([2, 0, 2]);
