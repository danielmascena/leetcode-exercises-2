import { expect } from "bun:test";
/*
 * @lc app=leetcode id=950 lang=typescript
 *
 * [950] Reveal Cards In Increasing Order
 */

// @lc code=start
function deckRevealedIncreasing(deck: number[]): number[] {
  const { floor } = Math;
  const target = deck.toSorted((a, b) => a - b);
  const len = deck.length;
  const ans = new Array<number>(len);
  let left = floor(len / 2);
  let stt = 0;
  let idx = 0;
  console.log(target);

  while (target.length) {
    const tmp: number[] = [];

    for (let i = stt; i < len && target.length; i += 2) {
      const v = target.shift();
      ans[i] = v!;
    }
  }
}
// @lc code=end

expect(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])).toContainAllValues([
  2, 13, 3, 11, 5, 17, 7,
]);
expect(deckRevealedIncreasing([1, 1000])).toContainAllValues([1, 1000]);
expect(
  deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7, 9, 8, 12])
).toContainAllValues([2, 9, 3, 17, 5, 11, 7, 13, 8, 12]);

// [2, , 3, , 5, , 7] -> [11, 13, 17]
// [11, , 13] -> [17]
// [17]

// 2 3 5 7 8 9 11 12 13 17
// 2 3 5 7 8 -> 9 11 12 13 17
// 9 11 12 -> 13 17
// 13 -> 17
// 17
