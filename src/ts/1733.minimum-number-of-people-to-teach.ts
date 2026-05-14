import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1733 lang=typescript
 *
 * [1733] Minimum Number of People to Teach
 */

// @lc code=start
function minimumTeachings(
  n: number,
  languages: number[][],
  friendships: number[][]
): number {
  const m = languages.length;
  const unl = Array.from({ length: m }, (): number[] => []);
  const gph: number[][] = new Array(m);
  const dp1 = (u: number, t: number, seen = Array(m).fill(0)) => {
    if (seen[u]) {
      return;
    }
    unl[t]?.push(...(languages[u] ?? []));
    seen[u] = 1;
    gph[u]?.forEach((f) => dp1(f, t, seen));
  };
  friendships.forEach(
    ([u = 0, v = 0]) => (gph[u - 1] = [...(gph[u - 1] ?? []), v - 1])
  );
  for (let i = 0; i < m; i++) {
    dp1(i, i);
  }
  unl.forEach((a, i) => {
    const bkt = new Set(a);
    languages[i]?.forEach((v) => bkt.delete(v));
    unl[i] = [...bkt];
  });
  console.log(gph, unl);
}
// @lc code=end

expect(
  minimumTeachings(
    2,
    [[1], [2], [1, 2]],
    [
      [1, 2],
      [1, 3],
      [2, 3],
    ]
  )
).toBe(1);
expect(
  minimumTeachings(
    3,
    [[2], [1, 3], [1, 2], [3]],
    [
      [1, 4],
      [1, 2],
      [3, 4],
      [2, 3],
    ]
  )
).toBe(2);
//expect(minimumTeachings()).toBe()
