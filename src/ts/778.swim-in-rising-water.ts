/*
 * @lc app=leetcode id=778 lang=typescript
 *
 * [778] Swim in Rising Water
 */

// @lc code=start
function swimInWater(grid: number[][]): number {
  const n = grid.length;
  let time = 0;
  let y = 0;
  let x = 0;

  while (y === n - 1 && x === n - 1) {
    time++;
  }
}
// @lc code=end
