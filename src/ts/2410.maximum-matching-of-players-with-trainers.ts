/*
 * @lc app=leetcode id=2410 lang=typescript
 *
 * [2410] Maximum Matching of Players With Trainers
 */

// @lc code=start
function matchPlayersAndTrainers(
  players: number[],
  trainers: number[]
): number {
  const sfn = (a: number, b: number) => b - a;
  //    ^?
  var ans = 0;
  players.sort(sfn);
  trainers.sort(sfn);
  var i1 = players.length - 1;
  var i2 = trainers.length - 1;

  while (i1 >= 0 && i2 >= 0) {
    const p = players[i1]!;

    while (i2 >= 0 && p > trainers[i2]!) {
      i2--;
    }
    if (i2 >= 0 && p <= trainers[i2]!) {
      ans++;
      i2--;
    }
    i1--;
  }
  return ans;
}
// @lc code=end

console.log(matchPlayersAndTrainers([4, 7, 9], [8, 2, 5, 8]));
console.log(matchPlayersAndTrainers([1, 1, 1], [10]));

/**
 * Accepted
 * 35/35 cases passed (95 ms)
 * Your runtime beats 64.29 % of typescript submissions
 * Your memory usage beats 85.71 % of typescript submissions (67.5 MB)
 */
