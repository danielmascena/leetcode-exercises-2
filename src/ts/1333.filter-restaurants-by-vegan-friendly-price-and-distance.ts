import { expect } from "bun:test";
/*
 * @lc app=leetcode id=1333 lang=typescript
 *
 * [1333] Filter Restaurants by Vegan-Friendly, Price and Distance
 */

// @lc code=start
function filterRestaurants(
  restaurants: number[][],
  veganFriendly: number,
  maxPrice: number,
  maxDistance: number
): number[] {
  return restaurants
    .filter(
      ([, , vf, p = 0, d = 0]) =>
        p <= maxPrice &&
        d <= maxDistance &&
        (veganFriendly ? veganFriendly === vf : true)
    )
    .sort(([aid = 0, arating = 0], [bid = 0, brating = 0]) =>
      arating === brating ? bid - aid : brating - arating
    )
    .map(([id]) => id);
}
// @lc code=end

expect(
  filterRestaurants(
    [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ],
    1,
    50,
    10
  )
).toEqual([3, 1, 5]);
expect(
  filterRestaurants(
    [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ],
    0,
    50,
    10
  )
).toEqual([4, 3, 2, 1, 5]);
expect(
  filterRestaurants(
    [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ],
    0,
    30,
    3
  )
).toEqual([4, 5]);
/**
 * Accepted
 * 53/53 cases passed (9 ms)
 * Your runtime beats 22.22 % of typescript submissions
 * Your memory usage beats 55.56 % of typescript submissions (63.2 MB)
 */
