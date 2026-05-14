import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1625 lang=typescript
 *
 * [1625] Lexicographically Smallest String After Applying Operations
 */

// @lc code=start
function findLexSmallestString(s: string, a: number, b: number): string {
  const odds = new Map<number, number>();
  const { min } = Math;
  const n = s.length;
  let sarr = Array.from(s);

  for (let i = 1; i < n; i += 2) {
    const num = Number.parseInt(s.charAt(i), 10);

    if (!odds.has(num)) {
      let v = num;
      let mn = v;

      while (v <= mn) {
        v = (v + a) % 10;
        mn = min(mn, v);
      }
      odds.set(num, mn);
    }
    sarr[i] = String(odds.get(num));
  }
  console.log(odds);
  let ans = sarr.join("");
  let prev = "9" + ans;

  while (prev > ans) {
    sarr = sarr.slice(n - b).concat(sarr.slice(0, n - b));
    prev = sarr.join("");

    if (prev < ans) {
      ans = prev;
    }
    console.log(prev, ans, sarr);
  }
  return ans;
}
// @lc code=end

expect(findLexSmallestString("5525", 9, 2)).toBe("2050");
expect(findLexSmallestString("74", 5, 1)).toBe("24");
