import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2327 lang=typescript
 *
 * [2327] Number of People Aware of a Secret
 */

// @lc code=start
function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
  const erase: number[] = [];
  const ready: number[] = [];
  var people = 0;
  var day = delay + 1;
  var ans = 1;
  ready[day] = 1;
  erase[forget + 1] = 1;

  while (day <= n) {
    const remove = erase[day] ?? 0;
    const go = ready[day] ?? 0;
    let future = 0;

    for (let i = 1; i <= remove; i++) {
      people--;
      ans--;
    }
    for (let i = 1; i <= go; i++) {
      people++;
    }
    for (let i = 1; i <= people; i++) {
      future++;
      ans++;
    }
    ready[day + delay] = future;
    erase[day + forget] = future;
    day++;
  }
  console.log(ready, erase, people, ans);

  return ans % (10e9 + 7);
}
// @lc code=end

expect(peopleAwareOfSecret(6, 2, 4)).toBe(5);
expect(peopleAwareOfSecret(4, 1, 3)).toBe(6);
expect(peopleAwareOfSecret(4, 1, 4)).toBe(8);
expect(peopleAwareOfSecret(6, 1, 2)).toBe(2);
expect(peopleAwareOfSecret(684, 18, 496)).toBe(653668527);
