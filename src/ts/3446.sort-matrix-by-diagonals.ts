import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3446 lang=typescript
 *
 * [3446] Sort Matrix by Diagonals
 */

// @lc code=start
function sortMatrix(grid: number[][]): number[][] {
  // 1 7 3 9 8 2 4 5 6
  // * # # * * # * * *
  const n = grid.length;
  const t = n * n;
  const arr = new Array<string>(t);
  const mn = new Set(grid[0]?.map((_, i) => `0-${i}`));

  for (let i = 0, z = 0; i < n; i++) {
    for (let j = 0; j < n; j++, z++) {
      arr[z] = `${i}-${j}`;
    }
  }
  for (let i = 1; i < n; i++) {
    mn.add(`${i}-0`);
  }
  const mp = new Map([...mn].map((k) => [k, [k]]));

  for (let i = 0, x = n + 1; i < t; i++) {
    const k = arr[i]!;
    const nx = arr[i + x];

    if (!nx) {
      break;
    }
    if (mn.has(nx)) {
      continue;
    }
    mp.get(k)?.push(nx);
    arr[i + x] = k;
  }
  const ans = Array.from({ length: n }, (_) => new Array<number>(n));
  const sifn = (a: number, b: number) => a - b;
  const sdfn = (a: number, b: number) => b - a;
  mp.forEach((a, z) => {
    const [y, x] = z.split("-") as [string, string];
    const sa = a.map((k) => {
      const [y, x] = k.split("-");
      return grid?.[+y!]?.[+x]!;
    });
    if (+x!) {
      sa.sort(sifn);
    } else {
      sa.sort(sdfn);
    }
    a.forEach((k, i) => {
      const [y, x] = k.split("-");
      ans[Number(y)]![Number(x)] = sa[i] as number;
    });
  });
  return ans;
}
// @lc code=end

expect(
  sortMatrix([
    [1, 7, 3],
    [9, 8, 2],
    [4, 5, 6],
  ])
).toEqual([
  [8, 2, 3],
  [9, 6, 7],
  [4, 5, 1],
]);
expect(
  sortMatrix([
    [0, 1],
    [1, 2],
  ])
).toEqual([
  [2, 1],
  [1, 0],
]);
expect(sortMatrix([[1]])).toEqual([[1]]);

/**
 * Accepted
 * 1306/1306 cases passed (52 ms)
 * Your runtime beats 12.5 % of typescript submissions
 * Your memory usage beats 12.5 % of typescript submissions (66.4 MB)
 */
