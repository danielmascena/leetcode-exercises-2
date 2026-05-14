import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2438 lang=typescript
 *
 * [2438] Range Product Queries of Powers
 */

// @lc code=start
function productQueries(n: number, queries: number[][]): number[] {
  const binum = n.toString(2);
  const powers: number[] = [];

  for (let i = binum.length - 1, v = 1; i >= 0; i--, v <<= 1) {
    if (binum.charAt(i) === "1") {
      powers.push(v);
    }
  }
  return queries.map(([b = 0, e = 0]) => {
    var t = 1;
    while (b <= e) {
      t *= powers[b++]!;
    }
    return t % (1e9 + 7);
  });
}
// @lc code=end

expect(
  productQueries(15, [
    [0, 1],
    [2, 2],
    [0, 3],
  ])
).toEqual([2, 4, 64]);
expect(productQueries(2, [[0, 0]])).toEqual([2]);
expect(
  productQueries(13, [
    [1, 2],
    [1, 1],
  ])
).toEqual([32, 4]);

/**
 * Accepted
 * 70/70 cases passed (42 ms)
 * Your runtime beats 55.56 % of typescript submissions
 * Your memory usage beats 100 % of typescript submissions (86.4 MB)
 */
