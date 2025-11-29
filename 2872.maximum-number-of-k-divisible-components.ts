import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2872 lang=typescript
 *
 * [2872] Maximum Number of K-Divisible Components
 */

// @lc code=start
function maxKDivisibleComponents(
  n: number,
  edges: number[][],
  values: number[],
  k: number
): number {
  const { max } = Math;
  const meg = Array.from({ length: n }, (_) => new Array<number>());
  const bkts: string[] = [];
  const opts = new Set<number[]>();
  let ans = 0;
  const snd = (
    idx: number,
    seen = new Set<number>(),
    nodes = "",
    sum = 0
  ): void => {
    if (seen.has(idx)) {
      return;
    }
    console.log({ idx }, { seen }, { nodes }, { sum });

    seen.add(idx);
    sum += values[idx];
    nodes += `${idx},`;

    if (sum % k === 0) {
      bkts.push(nodes);
      meg?.[idx].forEach((j) => snd(j, new Set(seen)));
    }
    meg[idx].forEach((j) => snd(j, new Set(seen), nodes, sum));
  };

  for (const [a, b] of edges) {
    meg[b].push(a);
    meg[a].push(b);
  }
  meg.forEach((a, i) => {
    if (a.length === 1) {
      snd(i);
    }
  });
  console.log(meg, bkts);
  return ans;
}
// @lc code=end

expect(
  maxKDivisibleComponents(
    5,
    [
      [0, 2],
      [1, 2],
      [1, 3],
      [2, 4],
    ],
    [1, 8, 1, 4, 4],
    6
  )
).toBe(2);
expect(
  maxKDivisibleComponents(
    7,
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
    ],
    [3, 0, 6, 1, 5, 2, 1],
    3
  )
).toBe(3);
expect(
  maxKDivisibleComponents(
    5,
    [
      [0, 2],
      [1, 2],
      [1, 3],
      [2, 4],
    ],
    [1, 8, 1, 4, 4],
    6
  )
).toBe(2);
