import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2477 lang=typescript
 *
 * [2477] Minimum Fuel Cost to Report to the Capital
 */

// @lc code=start
function minimumFuelCost(roads: number[][], seats: number): number {
  const tree = new Map<number, number[]>();
  const gotSeat = new Set<number>([0]);
  const leaves: number[] = [];
  const trk = new Map<number, number>();
  const rfn = (acc: number, cur: number) => acc + cur;
  const seen = new Set<number>();
  var ans = 0;
  const traverse = (num: number, zeats = seats - 1, fuel = [1]) => {
    seen.add(num);
    tree.get(num)?.forEach((v) => {
      if (v === 0) {
        ans += fuel.reduce(rfn, 0);
        return;
      } else if (!seen.has(v)) {
        fuel.forEach((_, i) => fuel[i]!++);

        if (zeats > 0 && !gotSeat.has(v)) {
          gotSeat.add(v);
          trk.set(v, --zeats);
        } else {
          fuel.push(1);
        }
        traverse(v, zeats, [...fuel]);
      } else if (trk.has(v) && trk.get(v)! > 0) {
        ans += fuel.reduce(rfn, 0);
        gotSeat.add(v);
        trk.set(v, trk.get(v)! - 1);
      }
    });
  };
  (roads as [number, number][]).forEach(([a, b]) => {
    tree.set(a, [...(tree.get(a) ?? []), b]);
    tree.set(b, [...(tree.get(b) ?? []), a]);
  });
  tree.forEach((a, v) => {
    if (a.length === 1) {
      leaves.push(v);
    }
  });
  leaves.forEach((v) => traverse(v));
  return ans;
}
// @lc code=end

expect(
  minimumFuelCost(
    [
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    5
  )
).toBe(3);
expect(
  minimumFuelCost(
    [
      [3, 1],
      [3, 2],
      [1, 0],
      [0, 4],
      [0, 5],
      [4, 6],
    ],
    2
  )
).toBe(7);
expect(minimumFuelCost([], 1)).toBe(0);
expect(
  minimumFuelCost(
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
    ],
    5
  )
).toBe(4);
