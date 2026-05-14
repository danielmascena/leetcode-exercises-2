import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1202 lang=typescript
 *
 * [1202] Smallest String With Swaps
 */

// @lc code=start
function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  const { max } = Math;
  const nav = new Map<number, number[]>();
  const lstEdges = new Map<number, number[]>();
  const sfn = (a: number, b: number) => a - b;
  const ms: [string, number][] = Array.from(s, (v, i) => [v, i]);
  ms.sort(([a], [b]) => (a?.codePointAt(0) ?? 0) - (b?.codePointAt(0) ?? 0));
  let maxVal = 0;
  const dfs = (
    num: number,
    arr = new Array<number>(),
    orig = num,
    seen = new Array<number>()
  ): void => {
    if (seen[num]) {
      return;
    }
    let ret = maxVal;
    seen[num] = 1;
    arr.push(num);
    nav.get(num)?.forEach((val) => {
      if (val !== orig) dfs(val, arr, orig, seen);
    });
  };

  if (pairs.length === 0) {
    return s;
  }

  pairs.forEach(([a = 0, b = 0]) => {
    maxVal = max(maxVal, a, b);
    nav.set(a, [...(nav.get(a) ?? []), b]);
    nav.set(b, [...(nav.get(b) ?? []), a]);
  });
  const ans = Array(maxVal + 1).fill("");
  Array.from(nav.keys()).forEach((val) => {
    const arr: number[] = [];
    dfs(val, arr);
    lstEdges.set(val, arr);
  });
  ms?.forEach(([c, i]) => {
    const a = (lstEdges.get(i) ?? []).sort(sfn);

    for (const j of a) {
      if (ans[j] === "") {
        ans[j] = c;
        break;
      }
    }
  });
  return ans.join("");
}
// @lc code=end

expect(
  smallestStringWithSwaps("dcab", [
    [0, 3],
    [1, 2],
    [0, 2],
  ])
).toBe("abcd");
expect(
  smallestStringWithSwaps("dcab", [
    [0, 3],
    [1, 2],
  ])
).toBe("bacd");
expect(
  smallestStringWithSwaps("cba", [
    [0, 1],
    [1, 2],
  ])
).toBe("abc");
expect(smallestStringWithSwaps("dcab", [])).toBe("dcab");
expect(
  smallestStringWithSwaps("udyyek", [
    [3, 3],
    [3, 0],
    [5, 1],
    [3, 1],
    [3, 4],
    [3, 5],
  ])
).toBe("deykuy");
