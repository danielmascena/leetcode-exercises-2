import { expect } from "bun:test";
/*
 * @lc app=leetcode id=3494 lang=typescript
 *
 * [3494] Find the Minimum Amount of Time to Brew Potions
 */

// @lc code=start
function minTime(skill: number[], mana: number[]): number {
  const n = skill.length;
  const m = mana.length;
  const { abs } = Math;
  const cost = Array.from({ length: n }, (_) => new Array<number>(m));
  let ans = 0;
  mana.forEach((pn, i) => {
    const row = cost[i]!;
    let sum = 0;
    let prev = 0;
    skill.forEach((sl, j) => {
      if (prev) {
        const dif = abs(prev - sl);
        sum -= dif * pn;
      }
      row[j] = sum += sl * pn;
    });
  });
  let prev = cost[0]?.at(-1);
  console.log(cost);

  for (let i = 1; i < n; i++) {
    const row1 = cost[i - 1];
    const row = cost[i];
    const last = row1?.at(-1);
    const lastLast = row1?.at(-2);
    const [first, second] = row1;
    let st = 0;

    if (prev - lastLast < first) {
      st = second + 1;
    } else {
      st = last - lastLast;
    }
    console.log("st ", st);

    for (let j = 0; j < m - 1; j++) {
      const df = row[j + 1] - row[j];
      prev = row[j] = st += df;
    }
    row[m - 1] = prev;
    console.log(prev);
  }
  console.log(cost);
}
// @lc code=end

expect(minTime([1, 5, 2, 4], [5, 1, 4, 2])).toBe(110);
expect(minTime([1, 1, 1], [1, 1, 1])).toBe(5);
