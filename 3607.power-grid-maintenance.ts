import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3607 lang=typescript
 *
 * [3607] Power Grid Maintenance
 */

// @lc code=start
function processQueries(
  c: number,
  connections: number[][],
  queries: number[][]
): number[] {
  const { min } = Math;
  const powergrids = new Map<number, Set<number>>();
  const seen = new Set<number>();
  const ans: number[] = [];
  const stts = new Array(c).fill(1);
  const conns = new Map<number, number[]>(
    Array.from({ length: c }, (_, i) => [i + 1, new Array<number>()])
  );
  const trkRsh = (v: number): number[] => {
    if (seen.has(v)) {
      return [];
    }
    seen.add(v);
    return conns
      .get(v)
      ?.reduce((acc, cur): number[] => [...acc, ...trkRsh(cur)], [v])!;
  };

  for (const [a, b] of connections) {
    conns.get(a)?.push(b);
    conns.get(b)?.push(a);
  }
  for (let i = 1; i <= c; i++) {
    if (!seen.has(i)) {
      const arr = [trkRsh(i)];
      const pwgd = new Set<number>(arr.flat());
      pwgd.forEach((v) => powergrids.set(v, pwgd));
    }
  }
  //console.log({ powergrids });

  for (const [b, x] of queries) {
    if (b === 2) {
      stts[x - 1] = 0;
      powergrids.get(x)?.delete(x);
      continue;
    }
    if (stts[x - 1]) {
      ans.push(x);
    } else {
      const mn = min(...powergrids.get(x));

      if (Number.isFinite(mn)) {
        ans.push(mn);
      } else {
        ans.push(-1);
      }
    }
  }
  return ans;
}
// @lc code=end

expect(
  processQueries(
    5,
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ],
    [
      [1, 3],
      [2, 1],
      [1, 1],
      [2, 2],
      [1, 2],
    ]
  )
).toEqual([3, 2, 3]);
expect(
  processQueries(
    3,
    [],
    [
      [1, 1],
      [2, 1],
      [1, 1],
    ]
  )
).toEqual([1, -1]);

/**
 * Time Limit Exceeded
 * 668/671 cases passed (N/A)
 */
