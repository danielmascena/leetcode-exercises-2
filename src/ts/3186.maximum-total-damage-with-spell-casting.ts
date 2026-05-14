import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3186 lang=typescript
 *
 * [3186] Maximum Total Damage With Spell Casting
 */

// @lc code=start
function maximumTotalDamage(power: number[]): number {
  const { max } = Math;
  const grp = new Map<number, number>();
  const uniq = new Set(power.toSorted((a, b) => a - b));
  const uarr = [...uniq];
  const [fst = 0] = uarr;
  const n = uniq.size;
  const dp = (i: number, t = 0) => {
    if (i >= n) {
      ans = max(ans, t);
      return;
    }
    const v = uarr[i]!;
    let j = i + 1;

    if (uniq.has(v + 1)) {
      dp(j, t);
      j++;
    }
    if (uniq.has(v + 2)) {
      dp(j, t);
      j++;
    }
    dp(j, t + grp.get(v)!);
  };
  let ans = 0;
  power.forEach((v) => grp.set(v, (grp.get(v) ?? 0) + v));
  dp(0);

  if (uniq.has(fst + 1)) dp(1);
  if (uniq.has(fst + 2)) dp(2);
  return ans;
}
// @lc code=end

expect(maximumTotalDamage([1, 1, 3, 4])).toBe(6);
expect(maximumTotalDamage([7, 1, 6, 6])).toBe(13);
expect(
  maximumTotalDamage([
    3, 4, 5, 6, 6, 7, 1, 1, 1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6,
  ])
).toBe(104);
expect(
  maximumTotalDamage([
    5, 5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    4, 4,
  ])
).toBe(72);
expect(
  maximumTotalDamage([
    5, 58, 45, 54, 60, 6, 34, 26, 3, 64, 47, 58, 13, 31, 41, 32, 49, 10, 51, 27,
    12, 24, 37, 15, 11, 29, 6, 41, 10, 61, 17, 6, 23, 36, 63, 58, 50, 64, 55,
    52, 46, 13, 33, 64, 27, 41, 65, 27, 11, 27, 59, 53, 60, 37, 66, 10, 28, 32,
    38, 26, 9, 45, 55, 9, 48, 22, 22, 61, 62, 8, 41, 14, 23, 61, 40, 40, 5, 42,
    60, 4, 55, 50, 30, 3, 58, 33, 27, 25, 6, 32, 8, 33, 16, 34, 20, 14, 7, 19,
    22,
  ])
).toBe(1652);
