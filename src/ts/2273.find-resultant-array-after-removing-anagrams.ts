import { expect } from "bun:test";
/*
 * @lc app=leetcode id=2273 lang=typescript
 *
 * [2273] Find Resultant Array After Removing Anagrams
 */

// @lc code=start
function removeAnagrams(words: string[]): string[] {
  const genWd = (wd: string) => {
    const arr = Array(26).fill(0);

    for (const c of wd) {
      arr[c.codePointAt(0)! - 97]++;
    }
    return arr + "";
  };
  const lwords = words.map(genWd);

  main: while (true) {
    for (let i = 1, l = words.length; i < l; i++) {
      if (lwords[i - 1] === lwords[i]) {
        lwords.splice(i, 1);
        words.splice(i, 1);
        continue main;
      }
    }
    break;
  }
  return words;
}
// @lc code=end

expect(removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"])).toEqual([
  "abba",
  "cd",
]);
expect(removeAnagrams(["a", "b", "c", "d", "e"])).toEqual([
  "a",
  "b",
  "c",
  "d",
  "e",
]);

/**
 * Accepted
 * 201/201 cases passed (13 ms)
 * Your runtime beats 21.43 % of typescript submissions
 * Your memory usage beats 25 % of typescript submissions (62.5 MB)
 */
