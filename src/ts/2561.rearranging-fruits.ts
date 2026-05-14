import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2561 lang=typescript
 *
 * [2561] Rearranging Fruits
 */

// @lc code=start
function minCost(basket1: number[], basket2: number[]): number {
  const { abs, max, min } = Math;
  const n = basket1.length;
  const tgt = new Map<number, number>();
  const grp = new Map<number, number>();
  const grp1 = new Map<number, number>();
  const grp2 = new Map<number, number>();
  var ans = 0;
  basket1.forEach((v) => {
    grp.set(v, (grp.get(v) ?? 0) + 1);

    grp1.set(v, (grp1.get(v) ?? 0) + 1);
  });
  basket2.forEach((v) => {
    grp.set(v, (grp.get(v) ?? 0) + 1);
    grp2.set(v, (grp2.get(v) ?? 0) + 1);
  });
  var dif = 0;

  for (const [v, q] of grp) {
    if (q % 1) return -1;

    const hf = q / 2;
    if (!Number.isInteger(hf)) {
      return -1;
    }
    const q1 = grp1.get(v) ?? 0;
    const q2 = grp2.get(v) ?? 0;

    if (q1 === q2 && hf === q1) {
      grp1.delete(v);
      grp2.delete(v);
    } else {
      const mq = min(q1, q2);
      if (q1 < hf) {
        dif += hf - q1;
      }
      if (q2 < hf) {
        dif += hf - q2;
      }
      grp1.set(v, q1 - mq);
      grp2.set(v, q2 - mq);
      tgt.set(v, hf - mq);
    }
  }
  const t1 = [...grp1].sort(([a = 0], [b = 0]) => a - b);
  const t2 = [...grp2].sort(([a = 0], [b = 0]) => a - b);
  console.log(tgt, t1, t2, dif);
  var l1 = 0;
  var r1 = t1.length - 1;
  var l2 = 0;
  var r2 = t2.length - 1;

  while (dif) {
    let [x1, z1] = t1[l1];
    let [x2, z2] = t2[l2];
    let [w1, k1] = t1[r1];
    let [w2, k2] = t2[r2];
    const gl = tgt.get(x1)!;
    const gr = tgt.get(w1)!;
    const dl = max(z1, z2, 0);
    const dr = max(k1, k2, 0);

    if (x1 !== x2 || w1 !== w2) {
      return -1;
    } else if (dl === dr) {
      const u = abs(gl - dl);
      ans += x1 * u;
      dif -= dl;
    } else {
    }
  }
  return ans;
}
// @lc code=end

expect(minCost([4, 2, 2, 2], [1, 4, 1, 2])).toBe(1);
expect(minCost([2, 3, 4, 1], [3, 2, 5, 1])).toBe(-1);
