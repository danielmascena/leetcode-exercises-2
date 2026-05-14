import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3480 lang=typescript
 *
 * [3480] Maximize Subarrays After Removing One Conflicting Pair
 */

// @lc code=start
function maxSubarrays(n: number, conflictingPairs: [number, number][]): number {
  //const nums = [...(function* (): Generator<number, void, void> { for (let i = 1; i <= n; i++) yield i; })()];
  const { min, max } = Math;
  const scp: readonly [number, number][] = conflictingPairs.toSorted(
    ([a, b], [c, d]) => {
      const sa = min(a, b);
      const bb = max(b, a);
      const d1 = bb - sa;
      const sc = min(d, c);
      const bd = max(d, c);
      const d2 = bd - sc;
      return d1 === d2 ? sc - sa : d1 - d2;
    }
  );
  const m = new Map(conflictingPairs);
  const z = scp?.[0]?.[0];
  const dp = (i: number, e: number): number => {
    if (i === e) {
      return 0;
    }
    console.log(i, e);
    const nx = i + 1;
    return dp(nx, m.get(nx) ?? e) + 1;
  };
  var ans = 0;

  if (typeof z !== "undefined") {
    m.delete(z);
  }
  console.log(m, z);
  for (let i = 1; i <= n; i++) {
    console.log("***", i);
    ans += dp(i, m.get(i) ?? n + 1);
  }
  return ans;
}
// @lc code=end

expect(
  maxSubarrays(4, [
    [2, 3],
    [1, 4],
  ])
).toBe(9);
expect(
  maxSubarrays(5, [
    [1, 2],
    [2, 5],
    [3, 5],
  ])
).toBe(12);
expect(
  maxSubarrays(10, [
    [10, 5],
    [3, 8],
  ])
).toBe(50);
