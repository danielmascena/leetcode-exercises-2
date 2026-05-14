import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1488 lang=typescript
 *
 * [1488] Avoid Flood in The City
 */

// @lc code=start
function avoidFlood(rains: number[]): number[] {
  const len = rains.length;
  const seen = new Set<number>();
  const { min } = Math;
  const bk = new Set<number>();
  let zeroRep: number[] = [];

  for (let i = 0; i < len; i++) {
    const l = rains[i];

    if (l) {
      if (seen.has(l)) {
        bk.add(l);
      } else {
        seen.add(l);
        bk.delete(l);
      }
    } else {
      let j = len;
      let fk = 1;
      seen.forEach((lk) => {
        const z = rains.indexOf(lk, i);
        fk = lk;

        if (z >= 0) {
          j = min(j, z);
        }
      });
      const v = rains[j];
      zeroRep.push(v ?? fk);
      seen.delete(v ?? 0);
    }
  }
  const ans = rains.map((lk) => {
    if (lk) {
      return -1;
    }
    return zeroRep.shift() ?? 1;
  });
  return bk.size ? [] : ans;
}
// @lc code=end

expect(avoidFlood([69, 0, 0, 0, 69])).toEqual([-1, 69, 1, 1, -1]);
expect(avoidFlood([1, 2, 3, 4])).toEqual([-1, -1, -1, -1]);
expect(avoidFlood([1, 2, 0, 0, 2, 1])).toEqual([-1, -1, 2, 1, -1, -1]);
expect(avoidFlood([1, 2, 0, 1, 2])).toEqual([]);
expect(avoidFlood([1, 1, 0, 0])).toEqual([]);
expect(avoidFlood([0, 1, 1])).toEqual([]);
expect(avoidFlood([1, 0, 2, 0, 2, 1])).toEqual([-1, 1, -1, 2, -1, -1]);
expect(avoidFlood([1, 2, 0, 2, 3, 0, 1])).toEqual([-1, -1, 2, -1, -1, 1, -1]);
