import { expect } from "bun:test";
/*
 * @lc app=leetcode id=756 lang=typescript
 *
 * [756] Pyramid Transition Matrix
 */

// @lc code=start
function pyramidTransition(bottom: string, allowed: string[]): boolean {
  var ans = false;
  const mp = new Map<string, string[]>();
  const df = (s: string): void => {
    const n = s.length;

    if (s.length === 1) {
      ans = true;
    }
    if (ans) {
      return;
    }
    const a: string[] = [""];
    for (let i = 1; i < n; i++) {
      const x: string[] = [];
      mp?.get(s.charAt(i - 1) + s.charAt(i))?.forEach((c) =>
        a.forEach((ss) => x.push(ss + c))
      );
      x.forEach((ss) => a.push(ss));
    }
    a.forEach((ss) => {
      if (ss.length === n - 1) {
        df(ss);
      }
    });
  };
  for (const [a, b, c] of allowed) {
    mp.set(a + b, [...(mp.get(a + b) ?? []), c]);
  }
  df(bottom);
  return ans;
}
// @lc code=end

expect(pyramidTransition("BCD", ["BCC", "CDE", "CEA", "FFF"])).toBeTrue();
expect(
  pyramidTransition("AAAA", ["AAB", "AAC", "BCD", "BBE", "DEF"])
).toBeFalse();

/*
Accepted
63/63 cases passed (1735 ms) [WARN] Failed to get runtime percentile.
*/
