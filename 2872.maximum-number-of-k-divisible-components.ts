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
  const meg = Array.from({ length: n }, (_) => new Array<number>());
  const bkts: string[] = [];
  const opts = new Set<number[]>();
  let zeros = 0;
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

    const val = values[idx];
    seen.add(idx);

    if (val) {
      sum += val;
      nodes += `${idx},`;
    }

    if (val) {
      if (sum % k === 0) {
        bkts.push(
          nodes
            .split(",")
            .slice(0, -1)
            .map(Number)
            .sort((a, b) => a - b)
            .join(",")
        );
        meg?.[idx].forEach((j) => snd(j, new Set(seen)));
      }
      meg[idx].forEach((j) => snd(j, new Set(seen), nodes, sum));
    } else {
      zeros++;
      meg?.[idx].forEach((j) => snd(j, new Set(seen)));
    }
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
  return new Set(bkts).size + zeros;
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
