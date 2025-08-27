import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2477 lang=typescript
 *
 * [2477] Minimum Fuel Cost to Report to the Capital
 */

// @lc code=start
function minimumFuelCost(roads: number[][], seats: number): number {
  const tree = new Map<number, number[]>();
  const seen = new Set<number>([0]);
  var ans = 0;
  const traverse = (num: number, fuel = 0, seatz = { q: seats - 1 }): void => {
    if (seen.has(num)) {
      return;
    }
    const arr = tree.get(num)!;

    if (seatz.q <= 0 || arr.length === 1) {
      ans += fuel;
    }
    seen.add(num);
    arr.forEach((v) => {
      if (!seen.has(v)) {
        seatz.q--;
        traverse(v, fuel + 1, seatz);
      }
    });
  };
  (roads as [number, number][]).forEach(([a, b]) => {
    tree.set(a, [...(tree.get(a) ?? []), b]);
    tree.set(b, [...(tree.get(b) ?? []), a]);
  });
  console.log(tree);
  tree.get(0)?.forEach((v) => traverse(v, 1));
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
