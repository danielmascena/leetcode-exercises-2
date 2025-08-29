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
  var ans = 0;
  const traverse = (
    num: number,
    seen = new Set<number>(),
    zeats = seats,
    fuel = 1
  ) => {
    seen.add(num);
    tree.get(num)?.forEach((v) => {
      if (num === 0) {
        ans += fuel;
        return;
      }
      if (!seen.has(v)) {
        const sn = new Set(seen);
        if (zeats > 0 && !gotSeat.has(v)) {
          gotSeat.add(num);
          zeats--;
          traverse(v, sn, zeats, fuel);
        } else {
          traverse(v, sn, zeats);
        }
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
  console.log(leaves, gotSeat);
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
